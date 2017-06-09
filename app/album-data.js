import RawData from './album/yearlings-bobtail'
import { parseAlbumData } from './helpers/build/album-helper'

// Restructure raw data to be usable by app.
const AlbumData = parseAlbumData(RawData)
export default AlbumData
