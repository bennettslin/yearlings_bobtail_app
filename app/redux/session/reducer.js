// Reducers for session values.
import { hasKey } from '../../helpers/action'
import { setInStorage } from '../../helpers/storage'
import { SESSION_DEFAULTS } from './default'
import { AUDIO_OPTIONS } from '../../constants/options'
import {
    SESSION_STORE,
    AUDIO_OPTION_INDEX
} from '../../constants/store'

export default (
    state = SESSION_DEFAULTS,
    { type, payload }
) => {
    switch (type) {
        case SESSION_STORE: {
            const { toggledAudioOptionIndex } = payload

            if (hasKey(toggledAudioOptionIndex)) {
                const
                    { audioOptionIndex: prevAudioOptionIndex } = state,
                    audioOptionIndex =
                        (prevAudioOptionIndex + 1) % AUDIO_OPTIONS.length

                setInStorage(AUDIO_OPTION_INDEX, audioOptionIndex)

                return {
                    ...state,
                    ...payload,
                    audioOptionIndex
                }
            } else {
                return {
                    ...state,
                    ...payload
                }
            }
        }
        default:
            return state
    }
}
