import { strictEqual as equal, throws } from 'assert'
import { Artist } from '../src/models/artist'
import { SongVersion } from '../src/models/song-version'

describe('Artist', function () {
  let artist: Artist
  let songVersion: SongVersion

  beforeEach(function () {
    const name = 'Alex IT'
    artist = new Artist(name)

    const title = 'Title of the Song'
    const releaseDate = new Date('2021-11-09')
    const duration = 180
    const album = 'First Album'
    songVersion = new SongVersion(title, releaseDate, duration, album)
  })

  it('is well created', function () {
    equal(artist.name, 'Alex IT')
    equal(artist.getAllCurrentSongsVersion(), 'Artist: Alex IT, Songs: ')
    equal(artist.songs.length, 0)
  })

  it('with a song added', function () {
    equal(artist.songs.length, 0)
    artist.addNewSong(songVersion.title, songVersion.releaseDate, songVersion.duration, songVersion.album)
    equal(artist.songs.length, 1)
    equal(artist.getSong(1).getInformations(), 'Version 1: Title: Title of the Song, Release date: 2021-11-09T00:00:00.000Z, Duration: 180 second(s), Album: First Album')
    equal(artist.getACurrentSongVersion(1).getInformations(), 'Title: Title of the Song, Release date: 2021-11-09T00:00:00.000Z, Duration: 180 second(s), Album: First Album')
  })

  it('with a second version added to a song', function () {
    equal(artist.songs.length, 0)
    artist.addNewSong(songVersion.title, songVersion.releaseDate, songVersion.duration, songVersion.album)
    equal(artist.songs.length, 1)
    artist.addSongVersion(1, 'Title 2', songVersion.releaseDate, songVersion.duration, songVersion.album)
    equal(artist.getACurrentSongVersion(1).title, 'Title 2')
  })


  it('with a rollback to version 1', function () {
    equal(artist.songs.length, 0)
    artist.addNewSong(songVersion.title, songVersion.releaseDate, songVersion.duration, songVersion.album)
    equal(artist.songs.length, 1)
    artist.addSongVersion(1, 'Title 2', songVersion.releaseDate, songVersion.duration, songVersion.album)
    equal(artist.getACurrentSongVersion(1).title, 'Title 2')
    artist.rollbackToVersion(1,1)
    equal(artist.getACurrentSongVersion(1).title, songVersion.title)
  })

  it('song not found', function () {
    throws(() => {artist.getSong(1)}, Error, 'Song not found')
    throws(() => {artist.getACurrentSongVersion(1)}, Error, 'Song not found')
    throws(() => {artist.rollbackToVersion(1,1)}, Error, 'Song not found')
    throws(() => {artist.addSongVersion(1,songVersion.title, songVersion.releaseDate, songVersion.duration, songVersion.album)}, Error, 'Song not found')
  })
})
