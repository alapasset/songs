import { strictEqual as equal } from 'assert'
import { Song } from '../src/models/song'


describe('song', function () {
  let song: Song

  beforeEach(function () {
    const title = 'Title of the Song'
    const authors = ['Alex IT']
    const releaseDate = new Date('2021-11-09')
    const duration = 180
    const album = 'First Album'
    song = new Song(title, authors, releaseDate, duration, album)
  })

  it('is well created', function () {
    equal(song.getInformations(), 'Title: Title of the Song, Author: Alex IT, Release date: 2021-11-09T00:00:00.000Z, Duration: 180 second(s), Album: First Album')
  })

  it('title is well modified', function () {
    equal(song.getInformations(), 'Title: Title of the Song, Author: Alex IT, Release date: 2021-11-09T00:00:00.000Z, Duration: 180 second(s), Album: First Album')
    song.title = 'Title of the Song 2'
    equal(song.getInformations(), 'Title: Title of the Song 2, Author: Alex IT, Release date: 2021-11-09T00:00:00.000Z, Duration: 180 second(s), Album: First Album')
  })

  it('author is well modified', function () {
    equal(song.getInformations(), 'Title: Title of the Song, Author: Alex IT, Release date: 2021-11-09T00:00:00.000Z, Duration: 180 second(s), Album: First Album')
    const authors = song.authors
    authors.push('Graou Ver')
    song.authors = authors
    equal(song.getInformations(), 'Title: Title of the Song, Author: Alex IT/Graou Ver, Release date: 2021-11-09T00:00:00.000Z, Duration: 180 second(s), Album: First Album')
  })

  it('release date is well modified', function () {
    equal(song.getInformations(), 'Title: Title of the Song, Author: Alex IT, Release date: 2021-11-09T00:00:00.000Z, Duration: 180 second(s), Album: First Album')
    song.releaseDate = new Date('2021-11-08')
    equal(song.getInformations(), 'Title: Title of the Song, Author: Alex IT, Release date: 2021-11-08T00:00:00.000Z, Duration: 180 second(s), Album: First Album')
  })

  it('duration is well modified', function () {
    equal(song.getInformations(), 'Title: Title of the Song, Author: Alex IT, Release date: 2021-11-09T00:00:00.000Z, Duration: 180 second(s), Album: First Album')
    song.duration = 120
    equal(song.getInformations(), 'Title: Title of the Song, Author: Alex IT, Release date: 2021-11-09T00:00:00.000Z, Duration: 120 second(s), Album: First Album')
  })

  it('album is well modified', function () {
    equal(song.getInformations(), 'Title: Title of the Song, Author: Alex IT, Release date: 2021-11-09T00:00:00.000Z, Duration: 180 second(s), Album: First Album')
    song.album = 'Second Album'
    equal(song.getInformations(), 'Title: Title of the Song, Author: Alex IT, Release date: 2021-11-09T00:00:00.000Z, Duration: 180 second(s), Album: Second Album')
  })
})
