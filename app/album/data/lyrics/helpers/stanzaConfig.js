import { getIndexedVersesForUnit } from '../../../api/verses'

const _addStanzaIndexToVerseConfig = ({
    stanzaIndex,
    verse: { verseIndex },
    song: { songVerseConfigs }

}) => {
    songVerseConfigs[verseIndex].stanzaIndex = stanzaIndex
}

const _getInitialStanzaConfigs = (song) => {
    const { lyricUnits } = song

    if (!lyricUnits) {
        return null
    }

    const stanzaConfigs = []

    let stanzaIndex

    lyricUnits.forEach((unit, unitIndex) => {
        const
            { unitMap } = unit,
            {
                stanzaType,
                subsequent
            } = unitMap

        if (stanzaType) {
            /**
             * If it's the first unit of this stanza type, initialise the
             * config. Otherwise, fetch it.
             */
            const stanzaConfig = subsequent ?
                stanzaConfigs[stanzaConfigs.length - 1] :
                {
                    stanzaType,
                    stanzaVerseIndices: [],
                    stanzaUnitIndices: []
                }

            if (!subsequent) {
                // Only let initial unit increment the stanza index.
                stanzaIndex = stanzaConfigs.length
            }

            // Tell stanza that it owns this unit.
            stanzaConfig.stanzaUnitIndices.push(unitIndex)

            // TODO: Do this in verse config.
            getIndexedVersesForUnit(unit).forEach(verse => {

                stanzaConfig.stanzaVerseIndices.push(verse.verseIndex)

                _addStanzaIndexToVerseConfig({
                    stanzaIndex,
                    verse,
                    song
                })
            })

            if (!subsequent) {
                stanzaConfigs.push(stanzaConfig)
            }
        }
    })

    return stanzaConfigs
}

const _addEndTimesToStanzaConfigs = (
    stanzaConfigs,
    {
        songVerseConfigs,
        totalTime
    }
) => {
    stanzaConfigs.forEach((stanzaConfig, stanzaIndex) => {
        const { stanzaVerseIndices } = stanzaConfig
        let stanzaEndTime

        stanzaVerseIndices.forEach((verseIndex, index) => {
            // If this is the last verse of the stanza...
            if (index === stanzaVerseIndices.length - 1) {

                // If it is followed by another stanza...
                if (stanzaIndex < stanzaConfigs.length - 1) {
                    stanzaEndTime =
                        songVerseConfigs[verseIndex + 1]
                            .verseStartTime

                // If it is the last stanza...
                } else {
                    stanzaEndTime = totalTime
                }
            }
        })

        stanzaConfig.stanzaEndTime = stanzaEndTime
    })
}

export const addStanzaConfigs = (song) => {
    /**
     * These configs let the audio slider know the relative width of each unit
     * based on its time length.
     */
    // Initialise the stanza configs.
    const stanzaConfigs = _getInitialStanzaConfigs(song)

    if (stanzaConfigs) {
        // Add verse durations.
        _addEndTimesToStanzaConfigs(stanzaConfigs, song)

        song.songStanzaConfigs = stanzaConfigs
    }
}
