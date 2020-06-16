// Reducers for selected dots.
import { hasKey } from '../../helpers/action'
import { getDotsBitForToggledDotIndex, getDotKeysFromBit } from '../../helpers/dot'
import {
    DOTS_STORE,
    SELECTED_DOTS_BIT
} from '../../constants/store'
import { DOTS_DEFAULTS } from './default'
import { setInStorage } from '../../helpers/storage'

export default (
    state = DOTS_DEFAULTS,
    { type, payload }
) => {
    switch (type) {
        case DOTS_STORE: {
            const
                { dotIndex } = payload,
                { selectedDotsBit: prevDotsBit } = state

            if (hasKey(dotIndex)) {
                const selectedDotsBit = getDotsBitForToggledDotIndex({
                    dotIndex,
                    dotsBit: prevDotsBit
                })
                setInStorage(SELECTED_DOTS_BIT, selectedDotsBit)

                return {
                    ...state,
                    selectedDotsBit,
                    ...getDotKeysFromBit(selectedDotsBit)
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
