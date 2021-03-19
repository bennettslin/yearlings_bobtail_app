// Reducers for session values.
import { hasKey } from '../../helpers/action'
import { setInStorage } from '../../utils/storage'
import { getSessionDefaults } from './default'
import {
    SESSION_STORE,
    IS_SONG_REPEAT_ON,
} from '../../constants/store'

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
            const { toggledIsSongRepeatOn } = payload

            if (hasKey(toggledIsSongRepeatOn)) {
                const
                    { isSongRepeatOn: prevIsSongRepeatOn } = state,
                    isSongRepeatOn = !prevIsSongRepeatOn

                setInStorage(IS_SONG_REPEAT_ON, isSongRepeatOn)

                return {
                    ...state,
                    ...payload,
                    isSongRepeatOn,
                }
            } else {
                return {
                    ...state,
                    ...payload,
                }
            }
        }
        default:
            return state
    }
}
