import { addFormTypeIndices } from './formType'
import { addHasSideCard } from './sideCard'

export const addLyricMetadata = (songIndex, finalSong) => {
    addFormTypeIndices(songIndex, finalSong)
    addHasSideCard(songIndex, finalSong)
}
