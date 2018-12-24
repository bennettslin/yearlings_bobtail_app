import { parseAlbumData } from './helpers'
import songs from '../album/songs'

import { addGlobalAnnotationIndices } from './helpers/admin'

const album = parseAlbumData({ songs })

addGlobalAnnotationIndices(album)

export default album
