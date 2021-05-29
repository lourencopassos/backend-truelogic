export class Album {
  constructor(
    private id: string,
    private title: string,
    private url: string,
    private thumbnailUrl: string
  ) {}

  getId(): string {
    return this.id
  }

  getTitle(): string {
    return this.title
  }

  getUrl(): string {
    return this.url
  }

  getThumbnailUrl(): string {
    return this.thumbnailUrl
  }

  setId(id: string): void {
    this.id = id
  }

  setTitle(title: string): void {
    this.title = title
  }

  setUrl(url: string): void {
    this.url = url
  }

  setThumbnailUrl(thumbnailUrl: string): void {
    this.thumbnailUrl = thumbnailUrl
  }

  static toAlbumModel(album: any): Album {
    return new Album(album.id, album.title, album.url, album.thumbnailUrl)
  }
}

export interface AlbumInputDTO {
  url: string
  title: string
  thumbnailUrl: string
}

export interface AlbumEditDTO {
  url?: string
  title?: string
  thumbnailUrl?: string
}
