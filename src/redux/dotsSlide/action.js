// Actions for dots slide activated texts.
import { DOTS_SLIDE_STORE } from '../../constants/store'
import { DOTS_SLIDE_DEFAULTS } from './default'

export const updateSlideDotIndex = dotIndex => ({
    type: DOTS_SLIDE_STORE,
    payload: { dotIndex },
})

export const resetActivatedDots = () => ({
    type: DOTS_SLIDE_STORE,
    payload: DOTS_SLIDE_DEFAULTS,
})
