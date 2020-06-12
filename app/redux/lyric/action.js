// Actions for lyric and carousel state.
import { getSongIsLogue } from '../../api/album/songs'
import {
    hasKey,
    getDefinedOnlyPayload
} from '../../helpers/action'
import { LYRIC_STORE } from '../../constants/store'

export const updateLyricStore = payload => {
    const { lyricSongIndex } = payload

    if (hasKey(lyricSongIndex)) {
        payload.isLyricLogue = getSongIsLogue(lyricSongIndex)
    }

    return ({
        type: LYRIC_STORE,
        payload: getDefinedOnlyPayload(payload)
    })
}
