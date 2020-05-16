import songs from './lyrics'

import { addWormholeStuff } from './lyrics/helpers/wormhole'
import { addGlobalAnnotationIndices } from './lyrics/helpers/admin'

const album = { songs }

addWormholeStuff(album)
addGlobalAnnotationIndices(album)

// FIXME: Remove.
global.album = album

export default album
