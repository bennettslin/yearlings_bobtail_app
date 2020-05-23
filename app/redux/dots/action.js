// Actions for selected dots.
import {
    hasKey,
    getDefinedOnlyPayload
} from '../../helpers/action'
import { setInStorage } from '../../helpers/storage'
import {
    DOTS_STORE,
    DOTS_BIT_NUMBER
} from '../../constants/store'

export const updateDotsStore = (payload) => {
    const { dotsBitNumber } = payload

    if (hasKey(dotsBitNumber)) {
        setInStorage(DOTS_BIT_NUMBER, dotsBitNumber)

        /**
         * Rather than parse the bit number, we'll have the component set the
         * individual dot in the store, which is done only for dev clarity.
         */
    }

    return ({
        type: DOTS_STORE,
        payload: getDefinedOnlyPayload(payload)
    })
}
