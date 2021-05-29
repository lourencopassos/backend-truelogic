import { Request, Response } from 'express'
import { IAlbumBusiness, IAlbumController } from '../@types/album'
import { AlbumEditDTO, AlbumInputDTO } from '../model/album'

export class AlbumController implements IAlbumController {
  private readonly albumBusiness: IAlbumBusiness
  constructor(albumBusiness: IAlbumBusiness) {
    this.albumBusiness = albumBusiness
  }

  createAlbum = async (req: Request, res: Response): Promise<void> => {
    try {
      const input: AlbumInputDTO = {
        title: req.body.title,
        url: req.body.url,
        thumbnailUrl: req.body.url
      }

      await this.albumBusiness.createAlbum(input)

      res.sendStatus(201)
    } catch (error) {
      res.status(error.code || 400).send({ error: error.message })
    }
  }

  getAlbums = async (req: Request, res: Response): Promise<void> => {
    try {
      const offset = Number(req.query.offset)

      const albums = await this.albumBusiness.getAlbums(offset)
      res.status(200).send({ albums, total: albums.length })
    } catch (error) {
      res.status(error.code || 400).send({ error: error.message })
    }
  }

  getAlbumById = async (req: Request, res: Response): Promise<void> => {
    try {
      const id = req.params.id

      const album = await this.albumBusiness.getAlbumById(id)

      res.status(200).send(album)
    } catch (error) {
      res.status(error.code || 400).send({ error: error.message })
    }
  }

  deleteAlbum = async (req: Request, res: Response): Promise<void> => {
    try {
      const id = req.params.id
      await this.albumBusiness.deleteAlbum(id)
      res.sendStatus(204)
    } catch (error) {
      res.status(error.code || 400).send({ error: error.message })
    }
  }

  updateAlbum = async (req: Request, res: Response): Promise<void> => {
    try {
      const id = req.params.id

      const album: AlbumEditDTO = {
        title: req.body.title,
        url: req.body.url,
        thumbnailUrl: req.body.thumbnailUrl
      }

      await this.albumBusiness.updateAlbum(id, album)
      res.sendStatus(204)
    } catch (error) {
      res.status(error.code || 400).send({ error: error.message })
    }
  }
}
