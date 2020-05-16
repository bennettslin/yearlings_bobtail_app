const _addInitialStanzaMetadata = ({
    lyricUnits,
    unitVerseIndicesList,
    finalSong

}) => {
    const
        stanzaFormTypes = [],
        stanzaUnitIndicesList = [],
        stanzaVerseIndicesList = [],
        verseStanzaIndices = []
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
                 * stanza array we count is arbitrary.
                 */
                stanzaIndex = stanzaFormTypes.length
            }

            // Tell stanza that it owns this unit.
            unitIndices.push(unitIndex)

            unitVerseIndicesList[unitIndex].forEach(verseIndex => {
                verseIndices.push(verseIndex)
                verseStanzaIndices.push(stanzaIndex)
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
    finalSong.verseStanzaIndices = verseStanzaIndices

    return stanzaVerseIndicesList
}

const _addStanzaEndTimes = ({
    stanzaVerseIndicesList,
    totalTime,
    verseStartTimes,
    finalSong

}) => {
    const endTimes = []

    stanzaVerseIndicesList.forEach((verseIndices, stanzaIndex) => {
        let endTime

        verseIndices.forEach((verseIndex, index) => {
            // If this is the last verse of the stanza...
            if (index === verseIndices.length - 1) {

                // If it is followed by another stanza...
                if (stanzaIndex < stanzaVerseIndicesList.length - 1) {
                    endTime = verseStartTimes[verseIndex + 1]

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

export const addStanzaMetadata = ({
    lyricUnits,
    totalTime,
    unitVerseIndicesList,
    verseStartTimes,
    finalSong
}) => {
    /**
     * These configs let the audio slider know the relative width of each unit
     * based on its time length.
     */
    const stanzaVerseIndicesList =
        _addInitialStanzaMetadata({
            lyricUnits,
            unitVerseIndicesList,
            finalSong
        })

    _addStanzaEndTimes({
        stanzaVerseIndicesList,
        totalTime,
        verseStartTimes,
        finalSong
    })
}
