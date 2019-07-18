import songs from './songs'

import { addGlobalAnnotationIndices } from './songs/helpers/admin'
import { addWormholeStuff } from './songs/helpers/wormhole'

const album = { songs }

addWormholeStuff(album)
addGlobalAnnotationIndices(album)

export default album
