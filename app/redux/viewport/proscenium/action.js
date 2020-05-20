import { getDefinedOnlyPayload } from '../../actionHelper'

import { PROSCENIUM_STORE } from '../../../constants/store/keys'
import { PROSCENIUM_DEFAULTS } from '../../defaultStates'

export const updateProsceniumStore = (payload = PROSCENIUM_DEFAULTS) => ({
    type: PROSCENIUM_STORE,
    payload: getDefinedOnlyPayload(payload)
})
