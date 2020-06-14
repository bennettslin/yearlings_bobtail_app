// Actions for selected dots.
import { DOTS_STORE } from '../../constants/store'

export const updateDotIndex = dotIndex => ({
    type: DOTS_STORE,
    payload: { dotIndex }
})
