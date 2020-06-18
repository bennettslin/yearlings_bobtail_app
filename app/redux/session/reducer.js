// Reducers for session values.
import { hasKey } from '../../helpers/action'
import { SESSION_DEFAULTS } from './default'
import { AUDIO_OPTIONS } from '../../constants/options'
import { SESSION_STORE } from '../../constants/store'

export default (
    state = SESSION_DEFAULTS,
    { type, payload }
) => {
    switch (type) {
        case SESSION_STORE: {
            const
                { toggleAudioOptionIndex } = payload,
                { audioOptionIndex: prevAudioOptionIndex } = state
            return {
                ...state,
                ...payload,
                ...hasKey(toggleAudioOptionIndex) && {
                    audioOptionIndex: (
                        (prevAudioOptionIndex + 1) % AUDIO_OPTIONS.length
                    )
                }
            }
        }
        default:
            return state
    }
}
