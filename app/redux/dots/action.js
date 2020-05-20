// Actions for selected dots.
import {
    hasKey,
    getDefinedOnlyPayload
} from '../../helpers/action'
import { setInStorage } from '../../utils/window'
import {
    DOTS_STORE,
    DOTS_BIT_NUMBER
} from '../../constants/store'

export const updateDotsStore = (payload) => {
    const { dotsBitNumber } = payload

    if (hasKey(dotsBitNumber)) {
        setInStorage(DOTS_BIT_NUMBER, dotsBitNumber)
    }

    return ({
        type: DOTS_STORE,
        payload: getDefinedOnlyPayload(payload)
    })
}
