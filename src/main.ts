import { Song } from './models/song'

const song1 = new Song('titre1', ['moi'], new Date(), 120, 'album1')
console.log(song1.getInfomrations())
