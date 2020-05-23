import { getObjectFromBitNumber } from '../../helpers/bit'
import { getDotsFromStorage } from '../../helpers/storage'
import { ORDERED_DOT_KEYS } from '../../constants/dots'

const dotsBitNumber = getDotsFromStorage()

export const DOTS_DEFAULTS = {
    dotsBitNumber,

    /**
     * Components only ever retrieve the bit number. The individual dots are
     * never used, just visible in the store for dev clarity.
     */
    ...getObjectFromBitNumber({
        keysArray: ORDERED_DOT_KEYS,
        bitNumber: dotsBitNumber
    })
}
