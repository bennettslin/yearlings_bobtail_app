import { getSong } from 'album/api/songs'
import { getSongStanzaConfigs } from 'album/api/stanzas'

export const getParentOfVerseClassNamesForIndices = ({
    entities = [],

    // "Parent of verse index."
    prefix = 'PoV'
}) => {

    const classNames = entities.map(entity => {
        const { verseIndex } = entity

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

    const songs = getSong(songIndex)
    return songs.lyricUnits ? songs.lyricUnits.length : 0
}

export const getLastUnitDotCardIndex = (songIndex) => {
    /**
     * Return an index if the last unit is a dot card. Otherwise, return -1.
     * Note that this assumes there can only be one last unit that isn't a
     * stanza unit.
     */

    const songStanzaConfigs = getSongStanzaConfigs(songIndex)

    if (songStanzaConfigs.length) {
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
             * There is another dot unit that is technically the first unit. So
             * we're treating this as if it were 1-based.
             */
            if (lastStanzaUnitIndex < lyricUnitsCount - 1) {
                return lyricUnitsCount - 1
            }
        }
    }

    return -1
}
