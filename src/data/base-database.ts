import knex, { Knex } from 'knex';

export abstract class BaseDatabase {
  private static connection: Knex | null = null;

  protected getConnection(): Knex {
    if (!BaseDatabase.connection) {
      BaseDatabase.connection = knex({
        client: 'mysql',
        connection: {
          host: process.env.DB_HOST ?? '127.0.0.1',
          port: 3306,
          user: process.env.DB_USER ?? 'root',
          password: process.env.DB_PASSWORD ?? 'root',
          database: process.env.DB_DATABASE_NAME ?? 'db',
        },
      });
    }

    return BaseDatabase.connection;
  }

  public static async destroyConnection(): Promise<void> {
    if (BaseDatabase.connection) {
      await BaseDatabase.connection.destroy();
      BaseDatabase.connection = null;
    }
  }
}
