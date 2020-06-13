// Reducers for song and player state.
import { hasKey } from '../../helpers/action'
import {
    AUDIO_STORE,
    SELECTED_STORE
} from '../../constants/store'
import { SELECTED_DEFAULTS } from './default'
import { getStartTimeForVerse } from '../../api/album/time'

export default (
    state = SELECTED_DEFAULTS,
    { type, payload }
) => {
    switch (type) {
        case SELECTED_STORE:
            return {
                ...state,
                ...payload
            }
        case AUDIO_STORE: {
            const { isPlaying } = payload
            if (hasKey(isPlaying) && !isPlaying) {
                const {
                    selectedSongIndex,
                    selectedVerseIndex
                } = state

                return {
                    ...state,
                    selectedTime: getStartTimeForVerse(
                        selectedSongIndex,
                        selectedVerseIndex
                    )
                }
            }
            return state
        }
        default:
            return state
    }
}
