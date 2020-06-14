// Actions for toggled views.
import { setBoolInStorage } from '../../helpers/storage'
import {
    hasKey,
    getDefinedOnlyPayload
} from '../../helpers/action'
import {
    TOGGLE_STORE,
    IS_CAROUSEL_SHOWN
} from '../../constants/store'

export const updateToggleStore = payload => {
    const { isCarouselShown } = payload

    if (hasKey(isCarouselShown)) {
        setBoolInStorage(IS_CAROUSEL_SHOWN, isCarouselShown)
    }

    return ({
        type: TOGGLE_STORE,
        payload: getDefinedOnlyPayload(payload)
    })
}

export const updateIsAboutShown = (isAboutShown = false) => ({
    type: TOGGLE_STORE,
    payload: { isAboutShown }
})
