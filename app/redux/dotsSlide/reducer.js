// Reducers for dots slide activated texts.
import { hasKey } from '../../helpers/action'
import { getDotsBitForToggledDotIndex, getDotKeysFromBit } from '../../helpers/dot'
import {
    DOTS_SLIDE_STORE,
    TOGGLE_STORE
} from '../../constants/store'
import { DOTS_SLIDE_DEFAULTS } from './default'

export default (
    state = DOTS_SLIDE_DEFAULTS,
    { type, payload }
) => {
    switch (type) {
        case DOTS_SLIDE_STORE: {
            const { dotIndex } = payload

            if (hasKey(dotIndex)) {
                const
                    { dotsSlideBit: prevDotsBit } = state,
                    dotsSlideBit = getDotsBitForToggledDotIndex({
                        dotIndex,
                        dotsBit: prevDotsBit
                    })

                return {
                    ...state,
                    dotsSlideBit,
                    ...getDotKeysFromBit(dotsSlideBit)
                }
            } else {
                return {
                    ...state,
                    ...payload
                }
            }
        }
        case TOGGLE_STORE: {
            const { isDotsSlideShown } = payload
            return hasKey(isDotsSlideShown) && !isDotsSlideShown ? {
                ...state,
                ...DOTS_SLIDE_DEFAULTS
            } : state
        }
        default:
            return state
    }
}
