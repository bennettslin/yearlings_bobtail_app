import RawData from './album/yearlings-bobtail'
import { parseAlbumData } from './helpers/buildHelpers/albumHelper'

// Restructure raw data to be usable by app.
const AlbumData = parseAlbumData(RawData)
export default AlbumData
