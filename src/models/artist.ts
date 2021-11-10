import { Song } from './song'
import { SongVersion } from './song-version'

export class Artist {

  constructor (public name: string, public songs: Array<Song> = []) {}

  private formatSong (): string {
    return this.songs.map((song, index) => `Song ${index + 1}: ${song.getLastVersion().getInformations()}`).join(' / ')
  }

  getAllCurrentSongsVersion (): string {
    return `Artist: ${this.name}, Songs: ${this.formatSong()}`
  }

  getACurrentSongVersion (track: number): SongVersion {
    if (!this.songs[track - 1]) throw new Error ('Song not found')
    return this.songs[track - 1].getLastVersion()
  }

  getSong (track: number): Song {
    const song = this.songs[track - 1]
    if (!song) throw new Error ('Song not found')
    return song
  }

  addSongVersion (track: number, title: string, releaseDate: Date, duration: number, album: string) {
    if (!this.songs[track - 1]) throw new Error ('Song not found')
    this.songs[track - 1].addVersion(new SongVersion(title, releaseDate, duration, album))
  }

  addNewSong (title: string, releaseDate: Date, duration: number, album: string) {
    const newSong = new Song()
    newSong.addVersion(new SongVersion(title, releaseDate, duration, album))
    this.songs.push(newSong)
  }

  rollbackToVersion (track: number, version: number) {
    const song = this.songs[track - 1]
    if (!song) throw new Error ('Song not found')
    const songVersion = song.getVersion(version)
    this.songs[track - 1].addVersion(songVersion)
  }
}
