// Actions for players values.
import { getDefinedOnlyPayload } from '../../helpers/action'

import { PLAYERS_STORE } from '../../constants/store'
import { PLAYERS_DEFAULTS } from './default'

export const updatePlayersStore = (payload = PLAYERS_DEFAULTS) => ({
    type: PLAYERS_STORE,
    payload: getDefinedOnlyPayload(payload)
})
