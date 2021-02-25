import { getDotKeysFromBit } from '../../helpers/dot'
import { getInitialIndicesFromRoutingOrStorage } from '../../utils/routing/routing'
import { getDotsBitFromStorage } from '../../utils/storage'

export const getDotsDefaults = songIndex => {
    const {
            initialAnnotationIndex,
        } = getInitialIndicesFromRoutingOrStorage(songIndex),

        storedDotsBit = getDotsBitFromStorage(initialAnnotationIndex)

    return {
        selectedDotsBit: storedDotsBit,
        ...getDotKeysFromBit(storedDotsBit),
    }
}
