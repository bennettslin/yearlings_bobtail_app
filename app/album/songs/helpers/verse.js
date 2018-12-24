export const addVerseIndicesToSongs = (albumSongs) => {

    albumSongs.forEach(song => {
        const { lyricUnits } = song

        if (lyricUnits) {
            let verseIndexCounter = 0

            lyricUnits.forEach(unit => {
                const {
                    lyricUnit,
                    unitMap: { subCard }
                } = unit

                if (lyricUnit) {
                    lyricUnit.forEach(verseObject => {
                        verseObject.verseIndex = verseIndexCounter
                        verseIndexCounter++
                    })
                }

                if (subCard) {
                    subCard[0].verseIndex = verseIndexCounter
                    verseIndexCounter++
                }
            })
        }
    })
}
