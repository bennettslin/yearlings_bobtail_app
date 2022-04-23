// Reducers for lyric and carousel state.
import { hasKey } from '../../helpers/action'
import { getLyricDefaults, UPDATE_LYRIC_SONG } from './default'
import { navigateToAlbumPage } from '../../helpers/navigate'
import { LYRIC_STORE, SELECTED_STORE } from '../../constants/store'

export const getLyricReducer = ({
    initialSongIndex,
    initialVerseIndex,
    initialAnnotationIndex,
}) => (
    state = getLyricDefaults({
        initialSongIndex,
        initialVerseIndex,
        initialAnnotationIndex,
    }),
    { type, payload },
) => {
    switch (type) {
        case LYRIC_STORE:
            return {
                ...state,
                ...payload,
            }
        case UPDATE_LYRIC_SONG: {
            const {
                lyricSongIndex,
                lyricVerseIndex,
                lyricAnnotationIndex,
                replace,
            } = payload

            /**
             * If song was changed, push to history.
             */
            navigateToAlbumPage(
                lyricSongIndex,
                lyricVerseIndex,
                lyricAnnotationIndex,
                replace,
            )

            return {
                ...state,
                ...payload,
            }
        }
        case SELECTED_STORE: {
            const {
                    selectedSongIndex,
                    selectedVerseIndex,
                    selectedAnnotationIndex,
                } = payload,
                {
                    lyricSongIndex,
                    lyricVerseIndex,
                    lyricAnnotationIndex,
                } = state,
                isChangeWithinSameSong =
                    !hasKey(selectedSongIndex) && (
                        hasKey(selectedVerseIndex) ||
                        hasKey(selectedAnnotationIndex)
                    )

            if (!isChangeWithinSameSong) {
                return state
            }

            /**
             * If verse or annotation was changed within same song, replace in
             * history right away.
             */
            navigateToAlbumPage(
                lyricSongIndex,
                hasKey(selectedVerseIndex) ?
                    selectedVerseIndex :
                    lyricVerseIndex,
                hasKey(selectedAnnotationIndex) ?
                    selectedAnnotationIndex :
                    lyricAnnotationIndex,
                true, // Replace in history.
            )

            return {
                ...state,
                /**
                 * If verse or annotation was changed within same song, set in
                 * state right away.
                 */
                ...hasKey(selectedVerseIndex) && {
                    lyricVerseIndex: selectedVerseIndex,
                },
                ...hasKey(selectedAnnotationIndex) && {
                    lyricAnnotationIndex: selectedAnnotationIndex,
                },
            }
        }
        default:
            return state
    }
}
