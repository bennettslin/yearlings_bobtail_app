export const addStanzaTypeIndices = (song) => {
    /**
     * Associate a type and index for each stanza, like verse, chorus, and so
     * forth.
     */
    const { lyricUnits } = song,
        stanzaTypeIndices = []

    if (lyricUnits) {
        const stanzaTypeCounters = {}

        // Initial loop through all lyric units.
        lyricUnits.forEach(unit => {
            const { unitMap } = unit,
                {
                    stanzaType,
                    subsequent
                } = unitMap

            // Unless it's a dot card, it has a stanza type.
            if (stanzaType) {

                // If it's not a subsequent unit, establish new index.
                if (!subsequent) {
                    stanzaTypeCounters[stanzaType] = (
                        stanzaTypeCounters[stanzaType] || 0
                    ) + 1
                }

                stanzaTypeIndices.push(stanzaTypeCounters[stanzaType])

            } else {
                stanzaTypeIndices.push(-1)
            }
        })

        /**
         * Now that we know the count for each stanza type, loop through all
         * lyric units again.
         */
        lyricUnits.forEach((unit, unitIndex) => {
            const
                { unitMap } = unit,
                { stanzaType } = unitMap

            if (stanzaType) {
                /**
                 * Don't show index if there is only one stanza of that type
                 * for the entire song.
                 */
                if (stanzaTypeCounters[stanzaType] === 1) {
                    stanzaTypeIndices[unitIndex] = -1
                }
            }
        })
    }

    return stanzaTypeIndices
}
