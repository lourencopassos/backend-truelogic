import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
  await knex('Album').del();

  await knex('Album').insert([
    {
      id: '89480594-85a3-42a1-aeab-955facb9ae7f',
      title: 'Album Photos 1',
      url: 'https://via.placeholder.com/600/92c952',
      thumbnailUrl: 'https://via.placeholder.com/150/92c952',
    },
    {
      id: 'b179b53d-0dc6-4aad-a914-18e5a382efb6',
      title: 'Album Photos 2',
      url: 'https://via.placeholder.com/600/771796',
      thumbnailUrl: 'https://via.placeholder.com/150/771796',
    },
    {
      id: 'a0db0937-316e-4b40-844b-96bf6ed6833c',
      title: 'Album Photos 3',
      url: 'https://via.placeholder.com/600/24f355',
      thumbnailUrl: 'https://via.placeholder.com/150/24f355',
    },
    {
      id: 'fa10fdbf-9790-4778-9578-8179d0b4c9c6',
      title: 'Album Photos 4',
      url: 'https://via.placeholder.com/600/d32776',
      thumbnailUrl: 'https://via.placeholder.com/150/d32776',
    },
  ]);
}
