const _getVerseConfigForStanzaConfig = (verseObject) => {
    const {
        verseIndex,
        time
    } = verseObject

    return {
        verseStartTime: time,
        verseIndex
    }
}

const _getInitialStanzaConfigs = (lyricUnits) => {
    const stanzaConfigs = []

    lyricUnits.forEach((unit, unitIndex) => {
        const {
                unitMap,
                lyricUnit,
                unitMap: { subCard }
            } = unit,
            {
                stanzaType,
                subsequent
            } = unitMap

        if (stanzaType) {
            /**
             * If it's the first unit of this stanza type, initialise
             * the config. Otherwise, fetch it.
             */
            const stanzaConfig = subsequent ?
                stanzaConfigs[stanzaConfigs.length - 1] :
                {
                    stanzaType,
                    stanzaVerseConfigs: [],
                    stanzaUnitIndices: []
                }

            // Tell stanza that it owns this unit.
            stanzaConfig.stanzaUnitIndices.push(unitIndex)

            // Then tell unit its stanza index.
            unitMap.stanzaIndex = stanzaConfigs.length

            if (lyricUnit) {
                lyricUnit.forEach(verseObject => {
                    stanzaConfig.stanzaVerseConfigs.push(
                        _getVerseConfigForStanzaConfig(verseObject)
                    )
                })
            }
            if (subCard) {
                stanzaConfig.stanzaVerseConfigs.push(
                    _getVerseConfigForStanzaConfig(subCard[0])
                )
            }

            if (!subsequent) {
                stanzaConfigs.push(stanzaConfig)
            }
        }
    })

    return stanzaConfigs
}

const _addVerseDurationsToStanzaConfigs = (stanzaConfigs, song) => {
    stanzaConfigs.forEach((stanzaConfig, stanzaIndex) => {
        const { stanzaVerseConfigs } = stanzaConfig
        let stanzaEndTime

        stanzaVerseConfigs.forEach((stanzaVerseConfig, verseIndex) => {
            const { verseStartTime } = stanzaVerseConfig
            let nextTime

            // It is followed by another verse.
            if (verseIndex < stanzaVerseConfigs.length - 1) {
                nextTime =
                    stanzaVerseConfigs[verseIndex + 1]
                        .verseStartTime

            // It is the last verse of a stanza followed by another stanza.
            } else if (stanzaIndex < stanzaConfigs.length - 1) {
                nextTime =
                    stanzaConfigs[stanzaIndex + 1]
                        .stanzaVerseConfigs[0]
                        .verseStartTime

                stanzaEndTime = nextTime

            // It is the last verse of the last stanza.
            } else {
                nextTime = song.totalTime

                stanzaEndTime = nextTime
            }

            stanzaVerseConfig.verseDuration = nextTime - verseStartTime
        })

        stanzaConfig.stanzaEndTime = stanzaEndTime
    })
}

export const addStanzaConfigsToSongs = (albumSongs) => {
    /**
     * These configs let the audio slider know the relative width of each unit
     * based on its time length.
     */

    albumSongs.forEach(song => {
        const { lyricUnits } = song

        if (lyricUnits) {
            // Initialise the stanza configs.
            const stanzaConfigs = _getInitialStanzaConfigs(lyricUnits)

            // Add verse durations.
            _addVerseDurationsToStanzaConfigs(stanzaConfigs, song)

            song.songStanzaConfigs = stanzaConfigs
        }
    })
}
