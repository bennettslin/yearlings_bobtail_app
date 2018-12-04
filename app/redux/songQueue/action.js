// Actions for queued song values.
import { getDefinedOnlyPayload } from '../actionHelper'

import { SONG_QUEUE_STORE } from '../storeKeys'
import { SONG_QUEUE_DEFAULTS } from '../defaultStates'

export const updateSongQueueStore = (payload = SONG_QUEUE_DEFAULTS) => {

    return ({
        type: SONG_QUEUE_STORE,
        payload: getDefinedOnlyPayload(payload)
    })
}
