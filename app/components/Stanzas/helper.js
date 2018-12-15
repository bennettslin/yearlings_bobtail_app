import { getSongObject } from 'helpers/data'

export const getParentOfVerseClassNamesForIndices = ({
    entities = [],

    // "Parent of verse index."
    prefix = 'PoV'
}) => {

    const classNames = entities.map(entity => {
        let verseIndex = entity.verseIndex

        /**
         * If it's a unit map, get the verse index from the subCard, which is
         * only ever an array of one.
         */
        if (entity.subCard) {
            verseIndex = entity.subCard[0].verseIndex
        }

        return !isNaN(verseIndex) ?
            `${prefix}${verseIndex}` :
            null
    })

    // Include the prefix without an index.
    classNames.push(prefix)

    return classNames
}

const _getLyricUnitsCount = (songIndex) => {

    if (songIndex < 0) {
        return 0
    }

    const songs = getSongObject(songIndex)
    return songs.lyricUnits ? songs.lyricUnits.length : 0
}

export const getLastUnitDotCardIndex = (songIndex) => {
    /**
     * Return an index if the last unit is a dot card. Otherwise, return -1.
     * Note that this assumes there can only be one last unit that isn't a
     * stanza unit.
     */

    const songObject = getSongObject(songIndex),
        { songStanzaConfigs } = songObject

    if (songStanzaConfigs) {
        // Get unit indices of last stanza.
        const { stanzaUnitIndices } = songStanzaConfigs[
            songStanzaConfigs.length - 1
        ]

        if (stanzaUnitIndices) {
            // Compare index of last unit to total units.
            const lyricUnitsCount = _getLyricUnitsCount(songIndex),
                lastStanzaUnitIndex = stanzaUnitIndices[
                    stanzaUnitIndices.length - 1
                ]

            /**
             * Remember that title is technically the first unit. So we're
             * treating this as if it were 1-based.
             */
            if (lastStanzaUnitIndex < lyricUnitsCount - 1) {
                return lyricUnitsCount - 1
            }
        }
    }

    return -1
}
