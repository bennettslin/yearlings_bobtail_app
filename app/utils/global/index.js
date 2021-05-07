import {
    getAlbum,
    getArtup,
    getScene,
} from '../../api/builds'
import { getSong } from '../../api/album/songs'
import { getLayersForScene } from '../../api/album/scenes'
import { getSceneIndexForVerse } from '../../api/album/verses'
import {
    getStoredSongIndex,
    getStoredVerseIndex,
} from '../../utils/storage'
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
    logSuccess,
} from '../logger'

// TODO: Preferable to just pass song and verse indices directly.
export const initialiseGlobalAdminObjects = () => {
    // Allow console access to album when not in production build.
    if (!IS_PRODUCTION) {
        global.album = getAlbum()
        global.scene = getScene()
        global.artup = getArtup()
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
    global.logFocus = logFocus
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
