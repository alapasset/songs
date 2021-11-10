export class Song {
  constructor (public title: string, public authors: Array<string>, public releaseDate: Date, public duration: number, public album: string) {}

  getInformations () {
    return `Title: ${this.title}, Author: ${this.authors.join('/')}, Release date: ${this.releaseDate.toISOString()}, Duration: ${this.duration} second(s), Album: ${this.album}`
  }
}
