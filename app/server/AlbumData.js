import RawData from '../album/YearlingsBobtail'
import { parseAlbumData } from './buildHelpers/albumHelper'

// Restructure raw data to be usable by app.
const AlbumData = parseAlbumData(RawData)
export default AlbumData
