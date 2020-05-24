import { getDefinedOnlyPayload } from '../../helpers/action'
import { PROSCENIUM_STORE } from '../../constants/store'

export const updateProsceniumStore = payload => ({
    type: PROSCENIUM_STORE,
    payload: getDefinedOnlyPayload(payload)
})
