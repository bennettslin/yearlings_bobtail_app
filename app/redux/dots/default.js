import { getDotKeysFromBit } from '../../helpers/dot'
import { getDotsBitFromStorage } from '../../helpers/storage'
import { INITIAL_ANNOTATION_INDEX } from '../selected/default'

const STORED_DOTS_BIT =
    getDotsBitFromStorage(INITIAL_ANNOTATION_INDEX)

export const DOTS_DEFAULTS = {
    selectedDotsBit: STORED_DOTS_BIT,
    ...getDotKeysFromBit(STORED_DOTS_BIT)
}
