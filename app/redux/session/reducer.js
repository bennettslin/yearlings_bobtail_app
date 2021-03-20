// Reducers for session values.
import { hasKey } from '../../helpers/action'
import { setInStorage } from '../../utils/storage'
import { getSessionDefaults } from './default'
import {
    SESSION_STORE,
    IS_SONG_REPEAT_ON,
    VOLUME_INDEX,
} from '../../constants/store'
import { VOLUME_MAX, VOLUME_MIN } from '../../constants/options'

export const getSessionReducer = ({
    initialSongIndex,
    initialAnnotationIndex,
}) => (
    state = getSessionDefaults({
        initialSongIndex,
        initialAnnotationIndex,
    }),
    { type, payload },
) => {
    switch (type) {
        case SESSION_STORE: {
            const {
                    toggledIsSongRepeatOn,
                    incrementedVolumeIndex,
                    decrementedVolumeIndex,
                    ...remainingPayload
                } = payload,
                newPayload = {}

            if (hasKey(toggledIsSongRepeatOn)) {
                const
                    { isSongRepeatOn: prevIsSongRepeatOn } = state,
                    isSongRepeatOn = !prevIsSongRepeatOn

                setInStorage(IS_SONG_REPEAT_ON, isSongRepeatOn)
                newPayload.isSongRepeatOn = isSongRepeatOn
            }

            if (
                hasKey(incrementedVolumeIndex) ||
                hasKey(decrementedVolumeIndex)
            ) {
                const { volumeIndex: prevVolumeIndex } = state
                let volumeIndex = prevVolumeIndex

                if (incrementedVolumeIndex) {
                    volumeIndex = Math.min(prevVolumeIndex + 1, VOLUME_MAX)
                }

                if (decrementedVolumeIndex) {
                    volumeIndex = Math.max(prevVolumeIndex - 1, VOLUME_MIN)
                }

                setInStorage(VOLUME_INDEX, volumeIndex)
                newPayload.volumeIndex = volumeIndex
            }

            return {
                ...state,
                ...remainingPayload,
                ...newPayload,
            }
        }
        default:
            return state
    }
}
