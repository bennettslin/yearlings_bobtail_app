import {
    getAlbum,
    getPitch,
    getScene,
} from '../../api/builds'
import { getSong } from '../../api/album/songs'
import { getLayersForScene } from '../../api/album/scenes'
import { getSceneIndexForVerse } from '../../api/album/verses'
import { getInitialGaLog } from '../analytics'
import {
    getStoredSongIndex,
    getStoredVerseIndex,
} from '../../helpers/storage'
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
} from './helpers/logs'

const initialiseLogger = () => {
    // Allow access to album in local delivery.
    if (IS_STAGING) {
        global.album = getAlbum()
        global.scene = getScene()
        global.pitch = getPitch()
        global.s = () => getSong(getStoredSongIndex())
        global.z = () => getLayersForScene(
            getStoredSongIndex(),
            getSceneIndexForVerse(
                getStoredSongIndex(),
                getStoredVerseIndex(
                    getStoredSongIndex()
                )
            )
        )
    }

    logServe({
        log: `Built ${BUILD_DATE_TIME}.`,
        action: 'load',
        label: BUILD_DATE_TIME,
    })

    logServe({
        log: getInitialGaLog(),
        action: 'ga',
    })

    global.logAccess = logAccess
    global.logAdmin = logAdmin
    global.logEvent = logEvent
    global.logFocus = logFocus
    global.logMount = logMount
    global.logPlayer = logPlayer
    global.logScroll = logScroll
    global.logSelect = logSelect
    global.logTransition = logTransition
    global.logError = logError
}

export default initialiseLogger
