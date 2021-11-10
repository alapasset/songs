import { strictEqual as equal, throws } from 'assert'
import { Song } from '../src/models/song'
import { SongVersion } from '../src/models/song-version'


describe('Song', function () {
  let songVersion: SongVersion
  let song: Song

  beforeEach(function () {
    const title = 'Title of the Song'
    const releaseDate = new Date('2021-11-09')
    const duration = 180
    const album = 'First Album'
    songVersion = new SongVersion(title, releaseDate, duration, album)
    song = new Song()
  })

  it('can add a version', function () {
    equal(song.songVersions.length, 0)
    song.addVersion(songVersion)
    equal(song.songVersions.length, 1)
    equal(song.getLastVersion(), songVersion)
    equal(song.getVersion(1), songVersion)
    equal(song.getVersion(1).getInformations(), 'Title: Title of the Song, Release date: 2021-11-09T00:00:00.000Z, Duration: 180 second(s), Album: First Album')
  })

  it('can\'t add more 5 version', function () {
    equal(song.songVersions.length, 0)
    song.addVersion(songVersion)
    song.addVersion(songVersion)
    song.addVersion(songVersion)
    song.addVersion(songVersion)
    song.addVersion(songVersion)
    equal(song.songVersions.length, 5)
    song.addVersion(songVersion)
    equal(song.songVersions.length, 5)
  })

  it('track not found', function () {
    throws(() => {song.getLastVersion()}, Error, 'No version found')
    throws(() => {song.getVersion(1)}, Error, 'No version found')
  })

})
