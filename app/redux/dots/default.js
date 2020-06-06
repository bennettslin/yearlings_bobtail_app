import { getObjectFromBitNumber } from '../../helpers/bit'
import { getDotsBitNumberFromStorage } from '../../helpers/storage'
import { INITIAL_ANNOTATION_INDEX } from '../selected/default'
import { ORDERED_DOT_KEYS } from '../../constants/dots'

const STORED_DOTS_BIT_NUMBER =
    getDotsBitNumberFromStorage(INITIAL_ANNOTATION_INDEX)

export const DOTS_DEFAULTS = {
    dotsBitNumber: STORED_DOTS_BIT_NUMBER,

    /**
     * Only reference and wormhole dots are needed in store, but add them all
     * for dev clarity.
     */
    ...getObjectFromBitNumber({
        keysArray: ORDERED_DOT_KEYS,
        bitNumber: STORED_DOTS_BIT_NUMBER
    })
}
