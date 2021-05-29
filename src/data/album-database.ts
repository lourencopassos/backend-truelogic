import { BaseDatabase } from './base-database'
import { Album, AlbumEditDTO } from '../model/album'
import { IAlbumDatabase } from '../@types/album'

export class AlbumDatabase extends BaseDatabase implements IAlbumDatabase {
  private static readonly TABLE_NAME = 'Album'

  public async create(
    id: string,
    title: string,
    url: string,
    thumbnailUrl: string
  ): Promise<void> {
    try {
      await this.getConnection()
        .insert({
          id,
          title,
          url,
          thumbnailUrl
        })
        .into(AlbumDatabase.TABLE_NAME)
    } catch (error) {
      throw new Error(error.sqlMessage || error.message)
    }
  }

  public async getAlbums(offset: number): Promise<Album[]> {
    const albums = await this.getConnection()
      .select('*')
      .from(AlbumDatabase.TABLE_NAME)
      .limit(10)
      .offset(offset)
      .orderBy('title', 'asc')

    return albums.map((album) => { return Album.toAlbumModel(album) })
  }

  public async getAlbumById(id: string): Promise<Album> {
    const result = await this.getConnection()
      .select('*')
      .from(AlbumDatabase.TABLE_NAME)
      .where({ id })

    return Album.toAlbumModel(result[0])
  }

  public async updateAlbum(id: string, album: AlbumEditDTO): Promise<void> {
    try {
      await this.getConnection()
        .update(album)
        .where({ id })
        .from(AlbumDatabase.TABLE_NAME)
    } catch (error) {
      throw new Error(error.sqlMessage || error.message)
    }
  }

  public async deleteAlbum(id: string): Promise<void> {
    try {
      await this.getConnection()
        .where({ id })
        .del()
        .from(AlbumDatabase.TABLE_NAME)
    } catch (error) {
      throw new Error(error.sqlMessage || error.message)
    }
  }
}
