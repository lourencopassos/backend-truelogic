import { Request, Response } from 'express'
import { Album, AlbumEditDTO, AlbumInputDTO } from '../model/album'

export interface IAlbumController {
  createAlbum: (req: Request, res: Response) => Promise<void>
  getAlbums: (req: Request, res: Response) => Promise<void>
  getAlbumById: (req: Request, res: Response) => Promise<void>
  deleteAlbum: (req: Request, res: Response) => Promise<void>
  updateAlbum: (req: Request, res: Response) => Promise<void>
}

export interface IAlbumBusiness {
  createAlbum: (album: AlbumInputDTO) => Promise<void>
  getAlbums: (offset: number) => Promise<Album[]>
  getAlbumById: (id: string) => Promise<Album>
  deleteAlbum: (id: string) => Promise<void>
  updateAlbum: (id: string, album: AlbumEditDTO) => Promise<void>
}

export interface IAlbumDatabase {
  create: (id: string,
    title: string,
    url: string,
    thumbnailUrl: string) => Promise<void>
  getAlbums: (offset: number) => Promise<Album[]>
  getAlbumById: (id: string) => Promise<Album>
  deleteAlbum: (id: string) => Promise<void>
  updateAlbum: (id: string, album: AlbumEditDTO) => Promise<void>

}
