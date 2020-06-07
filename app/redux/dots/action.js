// Actions for selected dots.
import {
    hasKey,
    getDefinedOnlyPayload
} from '../../helpers/action'
import { setInStorage } from '../../helpers/storage'
import {
    DOTS_STORE,
    SELECTED_DOTS_BIT
} from '../../constants/store'

export const updateDotsStore = payload => {
    const { selectedDotsBit } = payload

    if (hasKey(selectedDotsBit)) {
        setInStorage(SELECTED_DOTS_BIT, selectedDotsBit)
    }

    return ({
        type: DOTS_STORE,
        payload: getDefinedOnlyPayload(payload)
    })
}
