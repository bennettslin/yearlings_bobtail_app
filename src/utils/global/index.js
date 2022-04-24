import {
    getAlbum,
    getFacePaths,
    getPromo,
    getScene,
} from '../../endpoint/builds'
import { getSong } from '../../endpoint/album/songs'
import { getLayersForScene } from '../../endpoint/album/scenes'
import { getSceneIndexForVerse } from '../../endpoint/album/verses'
import {
    getStoredSongIndex,
    getStoredVerseIndex,
} from '../../utils/storage'
import {
    logAccess,
    logAdmin,
    logEvent,
    logGeneral,
    logMount,
    logPlayer,
    logScroll,
    logSelect,
    logServe,
    logState,
    logTransition,
    logError,
    logSuccess,
} from '../logger'

// TODO: Preferable to just pass song and verse indices directly.
export const initialiseGlobalAdminObjects = () => {
    // Allow console access to album when not in production build.
    if (!IS_PRODUCTION) {
        global.album = getAlbum()
        global.scene = getScene()
        global.promo = getPromo()
        global.facePaths = getFacePaths()
        global.s = () => getSong(getStoredSongIndex())
        global.z = () => getLayersForScene(
            getStoredSongIndex(),
            getSceneIndexForVerse(
                getStoredSongIndex(),
                getStoredVerseIndex(
                    getStoredSongIndex(),
                ),
            ),
        )
    }
}

export const globaliseLogs = () => {
    global.logAccess = logAccess
    global.logAdmin = logAdmin
    global.logEvent = logEvent
    global.logGeneral = logGeneral
    global.logMount = logMount
    global.logPlayer = logPlayer
    global.logScroll = logScroll
    global.logSelect = logSelect
    global.logServe = logServe
    global.logState = logState
    global.logTransition = logTransition
    global.logError = logError
    global.logSuccess = logSuccess
}
