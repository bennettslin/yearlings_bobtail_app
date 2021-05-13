import { formatKeysOfArrayOfObjects } from '../../../utils/format'
import { addFormTypeIndices } from './formType'
import { addHasSideCard } from './sideCard'

export const addLyricMetadata = (songIndex, song) => {
    addFormTypeIndices(songIndex, song)
    addHasSideCard(songIndex, song)
}

export const getFormattedLyricMetadata = songs => (
    formatKeysOfArrayOfObjects({
        keys: ['title', 'overview', 'lyricUnits'],
        objects: songs,
    })
)
