import { getDotKeysFromBit } from '../../helpers/dot'
import {
    getDotsBitFromStorage,
    getInitialIndicesFromRoutingOrStorage
} from '../../helpers/storage'

export const getDotsDefaults = songIndex => {
    const {
            initialAnnotationIndex
        } = getInitialIndicesFromRoutingOrStorage(songIndex),

        storedDotsBit = getDotsBitFromStorage(initialAnnotationIndex)

    return {
        selectedDotsBit: storedDotsBit,
        ...getDotKeysFromBit(storedDotsBit)
    }
}
