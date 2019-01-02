// Actions for lyric and carousel state.
import { getSongIsLogue } from 'album/api/songs'

import {
    hasKey,
    getDefinedOnlyPayload
} from '../actionHelper'

import { LYRIC_STORE } from '../storeKeys'
import {
    // LYRIC_TRANSITION_DEFAULTS,
    LYRIC_DEFAULTS
} from '../defaultStates'

export const updateLyricStore = (payload = LYRIC_DEFAULTS) => {
    const {
        lyricSongIndex
    } = payload

    if (hasKey(lyricSongIndex)) {
        payload.isLyricLogue = getSongIsLogue(lyricSongIndex)
    }

    return ({
        type: LYRIC_STORE,
        payload: getDefinedOnlyPayload(payload)
    })
}

// export const resetLyricForTransition = () => {
//     return ({
//         type: LYRIC_STORE,
//         payload: LYRIC_TRANSITION_DEFAULTS
//     })
// }
