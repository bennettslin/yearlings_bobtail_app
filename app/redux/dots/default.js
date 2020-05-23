import { getObjectFromBitNumber } from '../../helpers/bit'
import { getDotsBitNumberFromStorage } from '../../helpers/storage'
import { INITIAL_ANNOTATION_INDEX } from '../selected/default'
import { ORDERED_DOT_KEYS } from '../../constants/dots'

const STORED_DOTS_BIT_NUMBER =
    getDotsBitNumberFromStorage(INITIAL_ANNOTATION_INDEX)

export const DOTS_DEFAULTS = {
    dotsBitNumber: STORED_DOTS_BIT_NUMBER,

    /**
     * Components only ever retrieve the bit number. The individual dots are
     * never used, just visible in the store for dev clarity.
     */
    ...getObjectFromBitNumber({
        keysArray: ORDERED_DOT_KEYS,
        bitNumber: STORED_DOTS_BIT_NUMBER
    })
}
