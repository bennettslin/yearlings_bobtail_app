import albumLyrics from '../lyrics'

const _addInitialStanzaMetadata = ({
    songIndex,
    unitVerseIndicesList,
    song,

}) => {
    const { lyricUnits } = albumLyrics[songIndex],
        stanzaFormTypes = [],
        stanzaUnitIndicesList = [],
        stanzaVerseIndicesList = [],
        unitStanzaIndices = [],
        verseStanzaIndices = []
    let stanzaIndex

    lyricUnits.forEach(({
        unitMap: {
            formType,
            subsequent,
        },
    }, unitIndex) => {

        if (formType) {
            /**
             * If it's the first unit of this form type, initialise these
             * values. Otherwise, fetch them from the previous unit.
             */
            const stanzaFormType = subsequent ?
                stanzaFormTypes[stanzaFormTypes.length - 1] : formType
            const stanzaUnitIndices = subsequent ?
                stanzaUnitIndicesList[stanzaUnitIndicesList.length - 1] : []
            const stanzaVerseIndices = subsequent ?
                stanzaVerseIndicesList[stanzaVerseIndicesList.length - 1] : []

            if (!subsequent) {
                /**
                 * Only let initial unit increment the stanza index. Which
                 * stanza array we count is arbitrary.
                 */
                stanzaIndex = stanzaFormTypes.length
            }

            // Tell stanza that it owns this unit.
            stanzaUnitIndices.push(unitIndex)

            unitVerseIndicesList[unitIndex].forEach(verseIndex => {
                stanzaVerseIndices.push(verseIndex)
                verseStanzaIndices.push(stanzaIndex)
            })

            if (!subsequent) {
                stanzaFormTypes.push(stanzaFormType)
                stanzaUnitIndicesList.push(stanzaUnitIndices)
                stanzaVerseIndicesList.push(stanzaVerseIndices)
            }

            unitStanzaIndices.push(stanzaIndex)

        } else {
            unitStanzaIndices.push(-1)
        }
    })

    song.stanzaFormTypes = stanzaFormTypes
    song.stanzaUnitIndicesList = stanzaUnitIndicesList
    song.stanzaVerseIndicesList = stanzaVerseIndicesList
    song.unitStanzaIndices = unitStanzaIndices
    song.verseStanzaIndices = verseStanzaIndices

    return stanzaVerseIndicesList
}

const _addStanzaEndTimes = ({
    songDuration,
    stanzaVerseIndicesList,
    verseStartTimes,
    song,

}) => {
    const endTimes = []

    stanzaVerseIndicesList.forEach((stanzaVerseIndices, stanzaIndex) => {
        let endTime

        stanzaVerseIndices.forEach((verseIndex, index) => {
            // If this is the last verse of the stanza...
            if (index === stanzaVerseIndices.length - 1) {

                // If it is followed by another stanza...
                if (stanzaIndex < stanzaVerseIndicesList.length - 1) {
                    endTime = verseStartTimes[verseIndex + 1]

                // If it is the last stanza...
                } else {
                    endTime = songDuration
                }
            }
        })

        endTimes.push(endTime)
    })

    song.stanzaEndTimes = endTimes
}

export const addStanzaMetadata = ({
    songIndex,
    songDuration,
    unitVerseIndicesList,
    verseStartTimes,
    song,

}) => {
    /**
     * These configs let the audio slider know the relative width of each unit
     * based on its time length.
     */
    const stanzaVerseIndicesList =
        _addInitialStanzaMetadata({
            songIndex,
            unitVerseIndicesList,
            song,
        })

    _addStanzaEndTimes({
        songIndex,
        songDuration,
        stanzaVerseIndicesList,
        verseStartTimes,
        song,
    })
}
