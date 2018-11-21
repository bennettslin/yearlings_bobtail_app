import { getSongObject } from '../../../helpers/dataHelper'

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
