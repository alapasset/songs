import { strictEqual as equal } from 'assert'
import { Artist } from '../src/models/artist'
import { Song } from '../src/models/song'


describe('artist', function () {
  let artist: Artist

  beforeEach(function () {
    const name = 'Alex IT'
    artist = new Artist(name)
  })

  it('is well created', function () {
    equal(artist.name, 'Alex IT')
    equal(artist.getInformations(), 'Name: Alex IT, Songs: ')
    equal(artist.songs.length, 0)
  })

  it('with a song added', function () {
    equal(artist.songs.length, 0)
    const title = 'Title of the Song'
    const authors = ['Alex IT']
    const releaseDate = new Date('2021-11-09')
    const duration = 180
    const album = 'First Album'
    const song = new Song(title, authors, releaseDate, duration, album)
    artist.addSong(song)
    equal(artist.songs.length, 1)
    equal(artist.songs[0].getInformations(), 'Title: Title of the Song, Author: Alex IT, Release date: 2021-11-09T00:00:00.000Z, Duration: 180 second(s), Album: First Album')
  })
})
