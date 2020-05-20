// Actions for lyric and carousel state.
import { getSongIsLogue } from '../../album/api/songs'
import {
    hasKey,
    getDefinedOnlyPayload
} from '../../helpers/action'
import { LYRIC_STORE } from '../../constants/store'

export const updateLyricStore = (payload) => {
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
