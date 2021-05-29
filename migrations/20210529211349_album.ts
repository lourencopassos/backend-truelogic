import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists('Album');

  return knex.schema.createTable('Album', function (table) {
    table.string('id').primary();
    table.string('title').notNullable();
    table.string('url').notNullable();
    table.string('thumbnailUrl').notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists('Album');
}
