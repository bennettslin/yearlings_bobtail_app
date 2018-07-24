import pino from 'pino'

import RawData from './album/YearlingsBobtail'
import { parseAlbumData } from './helpers/buildHelpers/albumHelper'

global.logger = pino()

// Restructure raw data to be usable by app.
const AlbumData = parseAlbumData(RawData)
export default AlbumData
