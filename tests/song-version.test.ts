import { strictEqual as equal } from 'assert'
import { SongVersion } from '../src/models/song-version'

describe('Song Version', function () {
  let songVersion: SongVersion

  beforeEach(function () {
    const title = 'Title of the Song'
    const releaseDate = new Date('2021-11-09')
    const duration = 180
    const album = 'First Album'
    songVersion = new SongVersion(title, releaseDate, duration, album)
  })

  it('is well created', function () {
    equal(songVersion.getInformations(), 'Title: Title of the Song, Release date: 2021-11-09T00:00:00.000Z, Duration: 180 second(s), Album: First Album')
  })

  it('title is well modified', function () {
    equal(songVersion.getInformations(), 'Title: Title of the Song, Release date: 2021-11-09T00:00:00.000Z, Duration: 180 second(s), Album: First Album')
    songVersion.title = 'Title of the Song 2'
    equal(songVersion.getInformations(), 'Title: Title of the Song 2, Release date: 2021-11-09T00:00:00.000Z, Duration: 180 second(s), Album: First Album')
  })

  it('release date is well modified', function () {
    equal(songVersion.getInformations(), 'Title: Title of the Song, Release date: 2021-11-09T00:00:00.000Z, Duration: 180 second(s), Album: First Album')
    songVersion.releaseDate = new Date('2021-11-08')
    equal(songVersion.getInformations(), 'Title: Title of the Song, Release date: 2021-11-08T00:00:00.000Z, Duration: 180 second(s), Album: First Album')
  })

  it('duration is well modified', function () {
    equal(songVersion.getInformations(), 'Title: Title of the Song, Release date: 2021-11-09T00:00:00.000Z, Duration: 180 second(s), Album: First Album')
    songVersion.duration = 120
    equal(songVersion.getInformations(), 'Title: Title of the Song, Release date: 2021-11-09T00:00:00.000Z, Duration: 120 second(s), Album: First Album')
  })

  it('album is well modified', function () {
    equal(songVersion.getInformations(), 'Title: Title of the Song, Release date: 2021-11-09T00:00:00.000Z, Duration: 180 second(s), Album: First Album')
    songVersion.album = 'Second Album'
    equal(songVersion.getInformations(), 'Title: Title of the Song, Release date: 2021-11-09T00:00:00.000Z, Duration: 180 second(s), Album: Second Album')
  })
})
