// Reducers for dots slide activated texts.
import { hasKey } from '../../helpers/action'
import { getDotsBitForToggledDotIndex } from '../../helpers/dot'
import { DOTS_SLIDE_STORE } from '../../constants/store'
import { DOTS_SLIDE_DEFAULTS } from './default'

export default (
    state = DOTS_SLIDE_DEFAULTS,
    { type, payload }
) => {
    switch (type) {
        case DOTS_SLIDE_STORE: {
            const
                { dotIndex } = payload,
                { dotsSlideBit } = state
            return {
                ...state,
                ...hasKey(dotIndex) ? {
                    dotsSlideBit: getDotsBitForToggledDotIndex({
                        dotIndex,
                        dotsBit: dotsSlideBit
                    })
                } : payload
            }
        }
        default:
            return state
    }
}
