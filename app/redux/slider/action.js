// Actions for slider state.
import { getDefinedOnlyPayload } from '../../helpers/action'
import { SLIDER_STORE } from '../../constants/store'
import { SLIDER_DEFAULTS } from './default'

export const updateSliderStore = (payload = SLIDER_DEFAULTS) => ({
    type: SLIDER_STORE,
    payload: getDefinedOnlyPayload(payload)
})
