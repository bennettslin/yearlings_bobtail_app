// import { parseAlbumData } from './helpers'
import songs from '../album/songs'

import { addGlobalAnnotationIndices } from './helpers/admin'
import { addWormholeStuff } from './helpers/wormholes'

const album = { songs }

addWormholeStuff(album)
addGlobalAnnotationIndices(album)

export default album
