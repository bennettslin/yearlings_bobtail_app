// TODO: Add configs and types separately.
export const addStanzaConfigsAndTypes = (albumSongs) => {
    /**
     * Associate a type and index for each stanza, like verse, chorus, and so
     * forth.
     */
    albumSongs.forEach(song => {
        const { lyricUnits } = song

        if (lyricUnits) {
            const tempStanzaTypeCounters = {},
                songStanzaConfigs = []

            // Initial loop through all lyric units.
            lyricUnits.forEach(unit => {
                const {
                        unitMap,
                        lyricUnit
                    } = unit,
                    {
                        stanzaType,
                        subsequent
                    } = unitMap

                if (stanzaType) {
                    // If it's not a subsequent unit, establish new index.
                    if (!subsequent) {

                        /**
                         * This will let audio slider know the relative width
                         * of each unit, based on its time length.
                         */
                        songStanzaConfigs.push({
                            stanzaVerseConfigs: [{
                                /**
                                 * Initialise with just the start time, because
                                 * at this point we still don't know the verse
                                 * index.
                                 */
                                verseStartTime: lyricUnit[0].time
                            }],
                            stanzaType,
                            stanzaUnitIndices: []
                        })

                        tempStanzaTypeCounters[stanzaType] = (
                            tempStanzaTypeCounters[stanzaType] || 0
                        ) + 1
                    }

                    // Tell unit and subsequent units their stanza index.
                    unitMap.stanzaIndex = songStanzaConfigs.length - 1

                    // Tell unit its stanza type index.
                    unitMap.stanzaTypeIndex = tempStanzaTypeCounters[stanzaType]
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
                    if (tempStanzaTypeCounters[stanzaType] === 1) {
                        unitMap.stanzaTypeIndex = -1
                    }
                }
            })

            song.songStanzaConfigs = songStanzaConfigs
        }
    })
}
