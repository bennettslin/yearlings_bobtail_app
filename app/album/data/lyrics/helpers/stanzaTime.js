import { getIndexedVersesForUnit } from '../../../api/verses'

const _addStanzaIndexToVerseConfig = ({
    stanzaIndex,
    verse: { verseIndex },
    song: { songVerseConfigs }

}) => {
    songVerseConfigs[verseIndex].stanzaIndex = stanzaIndex
}

const _initialiseStanzaTimes = (song) => {
    const { lyricUnits } = song
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

            getIndexedVersesForUnit(unit).forEach(verse => {

                stanzaTime.stanzaVerseIndices.push(verse.verseIndex)

                // TODO: Do this in verse config, not here.
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

const _spreadStanzaTimes = (stanzaTimes, finalSong) => {
    const
        stanzaTypes = [],
        stanzaUnitIndicesList = [],
        stanzaVerseIndicesList = [],
        stanzaEndTimes = []

    stanzaTimes.forEach(stanzaTime => {
        stanzaTypes.push(stanzaTime.stanzaType)
        stanzaUnitIndicesList.push(stanzaTime.stanzaUnitIndices)
        stanzaVerseIndicesList.push(stanzaTime.stanzaVerseIndices)
        stanzaEndTimes.push(stanzaTime.stanzaEndTime)
    })

    finalSong.stanzaTypes = stanzaTypes
    finalSong.stanzaUnitIndicesList = stanzaUnitIndicesList
    finalSong.stanzaVerseIndicesList = stanzaVerseIndicesList
    finalSong.stanzaEndTimes = stanzaEndTimes

    // TODO: Remove
    finalSong.stanzaTimes = stanzaTimes
}

export const addStanzaTimes = (song, finalSong) => {
    /**
     * These configs let the audio slider know the relative width of each unit
     * based on its time length.
     */
    const stanzaTimes = _initialiseStanzaTimes(song)
    _addEndTimesToStanzaTimes(stanzaTimes, song)
    _spreadStanzaTimes(stanzaTimes, finalSong)
}
