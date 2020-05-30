// eslint-disable-next-line import/no-unresolved
import {
    getAlbum,
    getSong
} from '../../album/api/songs'
import {
    INITIAL_SONG_INDEX,
    INITIAL_ANNOTATION_INDEX
} from '../../redux/selected/default'
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
import { getCardsForAnnotation } from '../../album/api/annotations'

// Allow access to album in local delivery.
if (IS_STAGING) {
    global.album = getAlbum()

    // TODO: Allow for dynamic values to be passed, not just the initial ones.
    global.s = getSong(INITIAL_SONG_INDEX)
    global.a = getCardsForAnnotation(
        INITIAL_SONG_INDEX,
        INITIAL_ANNOTATION_INDEX
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
