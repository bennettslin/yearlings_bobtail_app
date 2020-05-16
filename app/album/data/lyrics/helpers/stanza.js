const _initialiseStanzaData = (song, unitVerseIndicesList, finalSong) => {
    const { lyricUnits } = song
    const
        stanzaFormTypes = [],
        stanzaUnitIndicesList = [],
        stanzaVerseIndicesList = [],
        verseStanzaIndicesList = []
    let stanzaIndex

    lyricUnits.forEach(({
        unitMap: {
            formType,
            subsequent
        }
    }, unitIndex) => {

        if (formType) {
            /**
             * If it's the first unit of this form type, initialise these
             * values. Otherwise, fetch them from the previous unit.
             */
            const unitFormType = subsequent ?
                stanzaFormTypes[stanzaFormTypes.length - 1] : formType
            const unitIndices = subsequent ?
                stanzaUnitIndicesList[stanzaUnitIndicesList.length - 1] : []
            const verseIndices = subsequent ?
                stanzaVerseIndicesList[stanzaVerseIndicesList.length - 1] : []

            if (!subsequent) {
                /**
                 * Only let initial unit increment the stanza index. Which
                 * array we count is arbitrary.
                 */
                stanzaIndex = stanzaFormTypes.length
            }

            // Tell stanza that it owns this unit.
            unitIndices.push(unitIndex)

            unitVerseIndicesList[unitIndex].forEach(verseIndex => {
                verseIndices.push(verseIndex)
                verseStanzaIndicesList.push(stanzaIndex)
            })

            if (!subsequent) {
                stanzaFormTypes.push(unitFormType)
                stanzaUnitIndicesList.push(unitIndices)
                stanzaVerseIndicesList.push(verseIndices)
            }
        }
    })

    finalSong.stanzaFormTypes = stanzaFormTypes
    finalSong.stanzaUnitIndicesList = stanzaUnitIndicesList
    finalSong.stanzaVerseIndicesList = stanzaVerseIndicesList
    finalSong.verseStanzaIndicesList = verseStanzaIndicesList

    return stanzaVerseIndicesList
}

const _addEndTimesToStanzaData = (
    stanzaVerseIndicesList,
    {
        verseConfigs,
        totalTime
    },
    finalSong
) => {
    const endTimes = []

    stanzaVerseIndicesList.forEach((verseIndices, stanzaIndex) => {
        let endTime

        verseIndices.forEach((verseIndex, index) => {
            // If this is the last verse of the stanza...
            if (index === verseIndices.length - 1) {

                // If it is followed by another stanza...
                if (stanzaIndex < stanzaVerseIndicesList.length - 1) {
                    endTime =
                        verseConfigs[verseIndex + 1]
                            .verseStartTime

                // If it is the last stanza...
                } else {
                    endTime = totalTime
                }
            }
        })

        endTimes.push(endTime)
    })

    finalSong.stanzaEndTimes = endTimes
}

export const addStanzaData = (song, unitVerseIndicesList, finalSong) => {
    /**
     * These configs let the audio slider know the relative width of each unit
     * based on its time length.
     */
    const stanzaVerseIndicesList =
        _initialiseStanzaData(song, unitVerseIndicesList, finalSong)

    _addEndTimesToStanzaData(stanzaVerseIndicesList, song, finalSong)
}
