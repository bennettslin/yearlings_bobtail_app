import { getDefinedOnlyPayload } from '../../helpers/action'
import { THEATRE_STORE } from '../../constants/store'

export const updateTheatreStore = payload => ({
    type: THEATRE_STORE,
    payload: getDefinedOnlyPayload(payload)
})
