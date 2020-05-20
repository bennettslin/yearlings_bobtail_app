import { getDotsFromStorage } from '../../helpers/storage'

/**
 * All dotKeys plus dotsBitNumber. Components only ever retrieve the bit
 * number. The individual dots are never used, just visible in the store
 * for dev clarity.
 */
export const DOTS_DEFAULTS = getDotsFromStorage()
