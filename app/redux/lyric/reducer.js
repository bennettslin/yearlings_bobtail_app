// Reducers for lyric and carousel state.
import { hasKey } from '../../helpers/action'
import { LYRIC_STORE, SELECTED_STORE } from '../../constants/store'
import { getLyricDefaults } from './default'

export const getLyricReducer = songIndex => (
    state = getLyricDefaults(songIndex),
    { type, payload }
) => {
    switch (type) {
        case LYRIC_STORE:
            return {
                ...state,
                ...payload
            }
        case SELECTED_STORE: {
            const {
                selectedSongIndex,
                selectedVerseIndex,
                selectedAnnotationIndex
            } = payload

            return {
                ...state,
                /**
                 * If verse or annotation was changed within the same song, set
                 * here right away.
                 */
                ...!hasKey(selectedSongIndex) && {
                    ...hasKey(selectedVerseIndex) && {
                        lyricVerseIndex: selectedVerseIndex
                    },
                    ...hasKey(selectedAnnotationIndex) && {
                        lyricAnnotationIndex: selectedAnnotationIndex
                    }
                }
            }
        }
        default:
            return state
    }
}
