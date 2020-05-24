// eslint-disable-next-line import/no-unresolved
import album from '../../album'
import { INITIAL_SONG_INDEX } from '../../redux/selected/default'
import {
    logAccess,
    logAdmin,
    logEvent,
    logFocus,
    logMount,
    logServe,
    logPlayer,
    logScroll,
    logSelect,
    logTransition,
    logError,
    logger
} from './helpers/logs'

// Allow access to album in local delivery.
if (IS_DELIVERY) {
    global.album = album
    global.a = (songIndex = INITIAL_SONG_INDEX) => (
        album.songs[songIndex]
    )
}

logServe({
    log: `Built ${BUILD_DATE_TIME}.`,
    action: 'load',
    label: BUILD_DATE_TIME
})

global.logAccess = logAccess
global.logAdmin = logAdmin
global.logEvent = logEvent
global.logFocus = logFocus
global.logMount = logMount
global.logServe = logServe
global.logPlayer = logPlayer
global.logScroll = logScroll
global.logSelect = logSelect
global.logTransition = logTransition
global.logError = logError

export default logger
