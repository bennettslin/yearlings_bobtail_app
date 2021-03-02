// Actions for activated state.
import { ACTIVATED_STORE } from '../../constants/store'
import { ACTIVATED_DEFAULTS } from './default'

export const updateActivatedVerseIndex = (
    activatedVerseIndex = ACTIVATED_DEFAULTS.activatedVerseIndex
) => ({
    type: ACTIVATED_STORE,
    payload: { activatedVerseIndex },
})
