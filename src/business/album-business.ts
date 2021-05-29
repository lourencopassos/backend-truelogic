import { Album, AlbumInputDTO, AlbumEditDTO } from '../model/album'
import { albumSchema } from '../model/validations'
import { IdGenerator } from '../utils/id-generator'
import { InvalidParameterError, MissingParameterError } from '../error'
import { IAlbumBusiness, IAlbumDatabase } from '../@types/album'

export class AlbumBusiness implements IAlbumBusiness {
  private readonly albumDatabase: IAlbumDatabase
  constructor(albumDatabase: IAlbumDatabase) {
    this.albumDatabase = albumDatabase
  }

  async createAlbum(album: AlbumInputDTO): Promise<void> {
    const idGenerator = new IdGenerator()
    const id = idGenerator.generate()

    const { title, url, thumbnailUrl } = album

    if (!title || !url || !thumbnailUrl) {
      throw new InvalidParameterError(
        'Missing album information, url title or thumbnail url.'
      )
    }

    albumSchema.validate(album)

    return await this.albumDatabase.create(
      id,
      title,
      url,
      thumbnailUrl
    )
  }

  async getAlbums(offset: number): Promise<Album[]> {
    let offsetNumber
    !offset ? (offsetNumber = 0) : (offsetNumber = offset)

    return await this.albumDatabase.getAlbums(offsetNumber)
  }

  async getAlbumById(id: string): Promise<Album> {
    if (!id) {
      throw new MissingParameterError(
        'Missing id'
      )
    }

    return await this.albumDatabase.getAlbumById(id)
  }

  async deleteAlbum(id: string): Promise<void> {
    if (!id) {
      throw new InvalidParameterError('Check movie id to return')
    }

    return await this.albumDatabase.deleteAlbum(id)
  }

  async updateAlbum(id: string, album: AlbumEditDTO): Promise<void> {
    if (!id || !album) {
      throw new InvalidParameterError('Check id and album')
    }

    return await this.albumDatabase.updateAlbum(id, album)
  }
}
