import { SongVersion } from './song-version'

export class Song {
  constructor (public songVersions: Array<SongVersion> = []) {}

  addVersion (songVersion: SongVersion): void {
    this.songVersions.push(songVersion)
    if (this.songVersions.length > 5) this.songVersions.shift()
  }

  getLastVersion (): SongVersion {
    const version = this.songVersions[this.songVersions.length - 1]
    if (!version) throw new Error('No version found')
    return version
  }

  getVersion (version: number): SongVersion{
    if (!this.songVersions[version - 1]) throw new Error('No version found')
    return this.songVersions[version - 1]
  }

  getInformations (): string {
    return this.songVersions.map((version, index) => `Version ${index + 1}: ${version.getInformations()}`).join(' / ')
  }
}
