// Actions for viewport size.
import {
    getDefinedOnlyPayload
} from '../../helpers/action'
import { VIEWPORT_STORE } from '../../constants/store'

export const updateViewportStore = payload => {

    return ({
        type: VIEWPORT_STORE,
        payload: getDefinedOnlyPayload(payload)
    })
}
