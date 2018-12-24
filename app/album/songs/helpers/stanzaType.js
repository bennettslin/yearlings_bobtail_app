export const addStanzaTypesToSongs = (albumSongs) => {
    /**
     * Associate a type and index for each stanza, like verse, chorus, and so
     * forth.
     */
    albumSongs.forEach(song => {
        const { lyricUnits } = song

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

                    // Tell unit its stanza type index.
                    unitMap.stanzaTypeIndex = stanzaTypeCounters[stanzaType]
                }
            })

            /**
             * Now that we know the count for each stanza type, loop through
             * all lyric units again.
             */
            lyricUnits.forEach(unit => {
                const
                    { unitMap } = unit,
                    { stanzaType } = unitMap

                if (stanzaType) {
                    /**
                     * Don't show index if there is only one of stanza of that
                     * type for the entire song.
                     */
                    if (stanzaTypeCounters[stanzaType] === 1) {
                        unitMap.stanzaTypeIndex = -1
                    }
                }
            })
        }
    })
}
