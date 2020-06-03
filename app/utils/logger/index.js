// eslint-disable-next-line import/no-unresolved
import {
    getAlbum,
    getSong
} from '../../api/album/songs'
import { getStoredSongIndex } from '../../helpers/storage'

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
if (IS_STAGING) {
    global.album = getAlbum()

    global.s = () => getSong(getStoredSongIndex())
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
