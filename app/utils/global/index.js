import {
    getAlbum,
    getPitch,
    getScene,
} from '../../api/builds'
import { getSong } from '../../api/album/songs'
import { getLayersForScene } from '../../api/album/scenes'
import { getSceneIndexForVerse } from '../../api/album/verses'
import {
    getStoredSongIndex,
    getStoredVerseIndex,
} from '../../helpers/storage'
import { getInitialGaLog } from '../analytics'
import {
    logAccess,
    logAdmin,
    logEvent,
    logFocus,
    logMount,
    logPlayer,
    logScroll,
    logSelect,
    logServe,
    logState,
    logTransition,
    logError,
} from '../logger'

export const initialiseGlobalAdminObjects = () => {
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
}

export const globaliseLogs = () => {
    global.logAccess = logAccess
    global.logAdmin = logAdmin
    global.logEvent = logEvent
    global.logFocus = logFocus
    global.logMount = logMount
    global.logPlayer = logPlayer
    global.logScroll = logScroll
    global.logSelect = logSelect
    global.logServe = logServe
    global.logState = logState
    global.logTransition = logTransition
    global.logError = logError
}

export const logInitialLogs = () => {
    logServe(
        `Built ${BUILD_DATE_TIME}.`,
        {
            action: 'build',
            label: BUILD_DATE_TIME,
        }
    )

    logServe(getInitialGaLog())
}
