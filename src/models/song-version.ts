export class SongVersion {
  constructor (public title: string, public releaseDate: Date, public duration: number, public album: string) {}

  getInformations (): string {
    return `Title: ${this.title}, Release date: ${this.releaseDate.toISOString()}, Duration: ${this.duration} second(s), Album: ${this.album}`
  }
}
