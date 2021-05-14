import { formatKeysOfObjects } from '../../../utils/format'
import { addFormTypeIndices } from './formType'
import { addHasSideCard } from './sideCard'

export const addLyricMetadata = (songIndex, song) => {
    addFormTypeIndices(songIndex, song)
    addHasSideCard(songIndex, song)
}

export const getFormattedLyricMetadata = songs => (
    formatKeysOfObjects({
        keys: ['title', 'overview', 'lyricUnits'],
        objects: songs,
    })
)
