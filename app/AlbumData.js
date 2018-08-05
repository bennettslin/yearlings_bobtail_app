import pino from 'pino'

import RawData from './album/YearlingsBobtail'
import { parseAlbumData } from './helpers/buildHelpers/albumHelper'

global.logger = pino()

if (process.env.NODE_ENV === 'production') {
    /* eslint-disable no-empty-function */
    logger.trace = () => {}
    logger.debug = () => {}
    logger.info = () => {}
    logger.warn = () => {}
    /* eslint-enable no-empty-function */
}

// Restructure raw data to be usable by app.
const AlbumData = parseAlbumData(RawData)
export default AlbumData
