import { getIndexedVersesForUnit } from '../../../api/verses'

const _addStanzaIndexToVerseConfig = ({
    stanzaIndex,
    verse: { verseIndex },
    song: { songVerseConfigs }

}) => {
    songVerseConfigs[verseIndex].stanzaIndex = stanzaIndex
}

const _getInitialStanzaTimes = (song) => {
    const { lyricUnits } = song

    if (!lyricUnits) {
        return null
    }

    const stanzaTimes = []

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
            const stanzaTime = subsequent ?
                stanzaTimes[stanzaTimes.length - 1] :
                {
                    stanzaType,
                    stanzaVerseIndices: [],
                    stanzaUnitIndices: []
                }

            if (!subsequent) {
                // Only let initial unit increment the stanza index.
                stanzaIndex = stanzaTimes.length
            }

            // Tell stanza that it owns this unit.
            stanzaTime.stanzaUnitIndices.push(unitIndex)

            // TODO: Do this in verse config.
            getIndexedVersesForUnit(unit).forEach(verse => {

                stanzaTime.stanzaVerseIndices.push(verse.verseIndex)

                _addStanzaIndexToVerseConfig({
                    stanzaIndex,
                    verse,
                    song
                })
            })

            if (!subsequent) {
                stanzaTimes.push(stanzaTime)
            }
        }
    })

    return stanzaTimes
}

const _addEndTimesToStanzaTimes = (
    stanzaTimes,
    {
        songVerseConfigs,
        totalTime
    }
) => {
    stanzaTimes.forEach((stanzaTime, stanzaIndex) => {
        const { stanzaVerseIndices } = stanzaTime
        let stanzaEndTime

        stanzaVerseIndices.forEach((verseIndex, index) => {
            // If this is the last verse of the stanza...
            if (index === stanzaVerseIndices.length - 1) {

                // If it is followed by another stanza...
                if (stanzaIndex < stanzaTimes.length - 1) {
                    stanzaEndTime =
                        songVerseConfigs[verseIndex + 1]
                            .verseStartTime

                // If it is the last stanza...
                } else {
                    stanzaEndTime = totalTime
                }
            }
        })

        stanzaTime.stanzaEndTime = stanzaEndTime
    })
}

export const addStanzaTimes = (song) => {
    /**
     * These configs let the audio slider know the relative width of each unit
     * based on its time length.
     */
    // Initialise the stanza configs.
    const stanzaTimes = _getInitialStanzaTimes(song)

    if (stanzaTimes) {
        // Add verse durations.
        _addEndTimesToStanzaTimes(stanzaTimes, song)

        return stanzaTimes
    }
}
