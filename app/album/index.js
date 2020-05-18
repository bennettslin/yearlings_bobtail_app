import album from './data'

// TODO: Move to helper that adds based on delivery.
global.album = ALBUM
global.a = songIndex => album.songs[songIndex]
global.b = songIndex => ALBUM.songs[songIndex]

export default album
