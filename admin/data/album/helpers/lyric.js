import { getSmartQuotedObjectsForKeys } from '../../../utils/format/smartQuote'
import { getSpacedObjectsForKeys } from '../../../utils/format/spacing'
import { addFormTypeIndices } from './formType'
import { addHasSideCard } from './sideCard'

export const addLyricMetadata = (songIndex, song) => {
    addFormTypeIndices(songIndex, song)
    addHasSideCard(songIndex, song)
}

const _getSmartQuotedLyricMetadata = songs => (
    getSmartQuotedObjectsForKeys({
        keys: ['title', 'overview', 'lyricUnits'],
        objects: songs,
    })
)

const _getSpacedLyricMetadata = songs => (
    getSpacedObjectsForKeys({
        keys: ['title', 'overview', 'lyricUnits'],
        objects: songs,
    })
)

export const getFormattedLyricMetadata = entity => {
    let newEntity

    // Order matters. Spacing function assumes straight quotes.
    newEntity = _getSpacedLyricMetadata(entity)
    newEntity = _getSmartQuotedLyricMetadata(entity)

    return newEntity
}
