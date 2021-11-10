import { Artist } from './models/artist'

console.log('---- New Artist ----')
const artist = new Artist('Alex IT')
console.log(artist.getAllCurrentSongsVersion())

console.log('\n---- Add a first Song ----')
artist.addNewSong('titre1', new Date(), 120, 'album1')
console.log(artist.getAllCurrentSongsVersion())

console.log('\n---- Add a second Song ----')
artist.addNewSong('titre2 a', new Date('2021-02-02'), 180, 'album2')
console.log(artist.getAllCurrentSongsVersion())

console.log('\n---- Add a 5 new versions to Song 2 ----')
artist.addSongVersion(2, 'titre2 b', new Date(), 181, 'album3')
artist.addSongVersion(2, 'titre2 c', new Date(), 181, 'album3')
artist.addSongVersion(2, 'titre2 d', new Date(), 181, 'album3')
artist.addSongVersion(2, 'titre2 e', new Date(), 181, 'album3')
artist.addSongVersion(2, 'titre2 f', new Date(), 181, 'album3')
console.log(artist.getAllCurrentSongsVersion())

console.log('\n---- Get All version from song 2 ----')
console.log(artist.getSong(2).getInformations())

console.log('\n---- Rollback to version 3 from song 2 ----')
artist.rollbackToVersion(2,3)
console.log(artist.getSong(2).getInformations())
