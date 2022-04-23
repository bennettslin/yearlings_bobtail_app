// Actions for lyric state.
import { getSongIsLogue } from '../../endpoint/album/songs'
import { getDefinedOnlyPayload } from '../../helpers/action'
import { LYRIC_STORE } from '../../constants/store'
import { UPDATE_LYRIC_SONG } from './default'

export const updateLyricStore = payload => ({
    type: LYRIC_STORE,
    payload: getDefinedOnlyPayload(payload, LYRIC_STORE),
})

export const updateLyricSong = payload => {
    const { lyricSongIndex } = payload

    return ({
        type: UPDATE_LYRIC_SONG,
        payload: {
            ...payload,
            isLyricLogue: getSongIsLogue(lyricSongIndex),
        },
    })
}
