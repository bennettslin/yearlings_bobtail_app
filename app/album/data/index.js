import songs, { finalSongs } from './lyrics'

import { addWormholeStuff } from './lyrics/helpers/wormhole'
import { addGlobalAnnotationIndices } from './lyrics/helpers/admin'

const album = { songs }
export const finalAlbum = { finalSongs }

addWormholeStuff(songs)
addGlobalAnnotationIndices(album)

// FIXME: Remove.
global.album = album
global.finalAlbum = finalAlbum

export default album
