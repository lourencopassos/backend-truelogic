require('dotenv').config();

module.exports = {
  development: {
    client: 'mysql',
    connection: {
      host: process.env.DB_HOST ?? '127.0.0.1',
      port: 3306,
      user: process.env.DB_USER ?? 'root',
      password: process.env.DB_PASSWORD ?? 'root',
      database: process.env.DB_DATABASE_NAME ?? 'db',
    },
    migrations: {
      tableName: 'Album_migrations',
    },
  },
};
