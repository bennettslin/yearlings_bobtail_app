// Reducers for selected dots.
import { hasKey } from '../../helpers/action'
import {
    getDotsBitForToggledDotIndex,
    getDotKeysFromBit,
} from '../../helpers/dot'
import {
    DOTS_STORE,
    SELECTED_DOTS_BIT,
} from '../../constants/store'
import { getDotsDefaults } from './default'
import { setInStorage } from '../../helpers/storage'

export const getDotsReducer = songIndex => (
    state = getDotsDefaults(songIndex),
    { type, payload }
) => {
    switch (type) {
        case DOTS_STORE: {
            const { dotIndex } = payload

            if (hasKey(dotIndex)) {
                const
                    { selectedDotsBit: prevDotsBit } = state,
                    selectedDotsBit = getDotsBitForToggledDotIndex({
                        dotIndex,
                        dotsBit: prevDotsBit,
                    })
                setInStorage(SELECTED_DOTS_BIT, selectedDotsBit)

                return {
                    ...state,
                    selectedDotsBit,
                    ...getDotKeysFromBit(selectedDotsBit),
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
