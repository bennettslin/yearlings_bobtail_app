import { addFormTypeIndices } from './formType'
import { addHasSideCard } from './sideCard'

export const addLyricMetadata = (songIndex, song) => {
    addFormTypeIndices(songIndex, song)
    addHasSideCard(songIndex, song)
}
