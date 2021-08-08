import { getDotKeysFromBit } from '../../helpers/dot'
import { getDotsBitFromStorage } from '../../utils/storage'

export const getDotsDefaults = initialAnnotationIndex => {
    const storedDotsBit = getDotsBitFromStorage(initialAnnotationIndex)

    return {
        selectedDotsBit: storedDotsBit,
        ...getDotKeysFromBit(storedDotsBit),
    }
}
