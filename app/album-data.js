import RawData from './album/yearlings-bobtail'
import { prepareAlbumData } from './helpers/album-build-helper'

// Restructure raw data to be usable by app.
const AlbumData = prepareAlbumData(RawData)
export default AlbumData
