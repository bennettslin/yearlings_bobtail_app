import { getIndexedVersesForUnit } from '../../../album/api/verses'

const _getVerseConfigForStanzaConfig = (verse) => {
    const {
        verseIndex,
        time
    } = verse

    return {
        verseStartTime: time,
        verseIndex
    }
}

const _addStanzaIndexToVerseConfig = ({
    stanzaIndex,
    verse: { verseIndex },
    song: { songVerseConfigs }

}) => {
    songVerseConfigs[verseIndex].stanzaIndex = stanzaIndex
}

const _getInitialStanzaConfigs = (lyricUnits, song) => {
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
                    stanzaVerseConfigs: [],
                    stanzaUnitIndices: []
                }

            if (!subsequent) {
                // Only let initial unit increment the stanza index.
                stanzaIndex = stanzaConfigs.length
            }

            // Tell stanza that it owns this unit.
            stanzaConfig.stanzaUnitIndices.push(unitIndex)

            // Then tell unit its stanza index.
            unitMap.stanzaIndex = stanzaIndex

            getIndexedVersesForUnit(unit).forEach(verse => {

                stanzaConfig.stanzaVerseConfigs.push(
                    _getVerseConfigForStanzaConfig(verse)
                )

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

const _addVerseDurationsToStanzaConfigs = (
    stanzaConfigs,
    {
        songVerseConfigs,
        totalTime
    }
) => {
    stanzaConfigs.forEach((stanzaConfig, stanzaIndex) => {
        const { stanzaVerseConfigs } = stanzaConfig
        let stanzaEndTime

        stanzaVerseConfigs.forEach((stanzaVerseConfig, stanzaVerseIndex) => {
            const { verseIndex } = stanzaVerseConfig,
                { verseDuration } = songVerseConfigs[verseIndex]

            /**
             * Get the verse duration from the song verse configs that were
             * previously created.
             */
            stanzaVerseConfig.verseDuration = verseDuration

            // If this is the last verse of the stanza...
            if (stanzaVerseIndex === stanzaVerseConfigs.length - 1) {

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
    const { lyricUnits } = song

    if (lyricUnits) {
        // Initialise the stanza configs.
        const stanzaConfigs = _getInitialStanzaConfigs(lyricUnits, song)

        // Add verse durations.
        _addVerseDurationsToStanzaConfigs(stanzaConfigs, song)

        song.songStanzaConfigs = stanzaConfigs
    }
}
