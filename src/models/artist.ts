import { Song } from './song'

export class Artist {

  constructor (public name: string, public songs: Array<Song> = []) {}

  getInformations () {
    return `Name: ${this.name}, Songs: ${this.songs.join(' /')}`
  }

  addSong (song: Song) {
    this.songs.push(song)
  }
}
