import { getIndexedVersesForUnit } from '../../../api/verses'

const _addStanzaIndexToVerseConfig = ({
    stanzaIndex,
    verse: { verseIndex },
    song: { songVerseConfigs }

}) => {
    songVerseConfigs[verseIndex].stanzaIndex = stanzaIndex
}

const _initialiseStanzaData = (song) => {
    const { lyricUnits } = song
    const stanzaData = []
    let stanzaIndex

    lyricUnits.forEach((unit, unitIndex) => {
        const
            { unitMap } = unit,
            {
                formType,
                subsequent
            } = unitMap

        if (formType) {
            /**
             * If it's the first unit of this form type, initialise the
             * config. Otherwise, fetch it.
             */
            const stanzaTime = subsequent ?
                stanzaData[stanzaData.length - 1] :
                {
                    formType,
                    verseIndices: [],
                    unitIndices: []
                }

            if (!subsequent) {
                // Only let initial unit increment the stanza index.
                stanzaIndex = stanzaData.length
            }

            // Tell stanza that it owns this unit.
            stanzaTime.unitIndices.push(unitIndex)

            getIndexedVersesForUnit(unit).forEach(verse => {

                stanzaTime.verseIndices.push(verse.verseIndex)

                // TODO: Do this in verse config, not here.
                _addStanzaIndexToVerseConfig({
                    stanzaIndex,
                    verse,
                    song
                })
            })

            if (!subsequent) {
                stanzaData.push(stanzaTime)
            }
        }
    })

    return stanzaData
}

const _addEndTimesToStanzaData = (
    stanzaData,
    {
        songVerseConfigs,
        totalTime
    }
) => {
    stanzaData.forEach((stanzaTime, stanzaIndex) => {
        const { verseIndices } = stanzaTime
        let endTime

        verseIndices.forEach((verseIndex, index) => {
            // If this is the last verse of the stanza...
            if (index === verseIndices.length - 1) {

                // If it is followed by another stanza...
                if (stanzaIndex < stanzaData.length - 1) {
                    endTime =
                        songVerseConfigs[verseIndex + 1]
                            .verseStartTime

                // If it is the last stanza...
                } else {
                    endTime = totalTime
                }
            }
        })

        stanzaTime.endTime = endTime
    })
}

const _spreadStanzaData = (stanzaData, finalSong) => {
    const
        formTypes = [],
        unitIndicesList = [],
        verseIndicesList = [],
        endTimes = []

    stanzaData.forEach(stanzaTime => {
        formTypes.push(stanzaTime.formType)
        unitIndicesList.push(stanzaTime.unitIndices)
        verseIndicesList.push(stanzaTime.verseIndices)
        endTimes.push(stanzaTime.endTime)
    })

    finalSong.stanzaFormTypes = formTypes
    finalSong.stanzaUnitIndicesList = unitIndicesList
    finalSong.stanzaVerseIndicesList = verseIndicesList
    finalSong.stanzaEndTimes = endTimes
}

export const addStanzaData = (song, finalSong) => {
    /**
     * These configs let the audio slider know the relative width of each unit
     * based on its time length.
     */
    const stanzaData = _initialiseStanzaData(song)
    _addEndTimesToStanzaData(stanzaData, song)
    _spreadStanzaData(stanzaData, finalSong)
}
