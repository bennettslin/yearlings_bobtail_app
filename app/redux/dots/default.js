import { getObjectFromBit } from '../../helpers/bit'
import { getDotsBitFromStorage } from '../../helpers/storage'
import { INITIAL_ANNOTATION_INDEX } from '../selected/default'
import { ORDERED_DOT_KEYS } from '../../constants/dots'

const STORED_DOTS_BIT =
    getDotsBitFromStorage(INITIAL_ANNOTATION_INDEX)

export const DOTS_DEFAULTS = {
    selectedDotsBit: STORED_DOTS_BIT,

    /**
     * Only reference and wormhole dots are needed in store, but add them all
     * for dev clarity.
     */
    ...getObjectFromBit({
        keysArray: ORDERED_DOT_KEYS,
        bitNumber: STORED_DOTS_BIT
    })
}
