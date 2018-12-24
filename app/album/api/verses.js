import { getSongObject } from 'album/api/songs'

export const getAllTimedVerses = (unit) => {
    const {
        lyricUnit,
        unitMap: { subCard }
    } = unit

    return [
        ...lyricUnit || [],
        ...subCard || []
    ]
}

const _parseLyrics = (lyricEntity, verseIndex) => {
    // Recurse until object with verse index is found.

    // Method does not apply to logues.
    if (lyricEntity) {
        if (Array.isArray(lyricEntity)) {
            return lyricEntity.reduce((childSelectedLyric, childLyric) => (
                childSelectedLyric || _parseLyrics(childLyric, verseIndex)
            ), null)

        } else if (lyricEntity.lyricUnit) {
            return (
                _parseLyrics(lyricEntity.lyricUnit, verseIndex) ||
                _parseLyrics(lyricEntity.unitMap, verseIndex)
            )

        } else if (lyricEntity.verseIndex === verseIndex) {
            return lyricEntity

            // Object with verseIndex key not found, so dig into subCard.
        } else if (lyricEntity.subCard) {
            return _parseLyrics(lyricEntity.subCard, verseIndex)
        }
    }
}

export const getVerseObject = (
    songIndex,
    verseIndex
) => {
    const { lyricUnits } = getSongObject(songIndex)
    return _parseLyrics(lyricUnits, verseIndex)
}

// TODO: Not sure why this breaks...
// export const getVerseObject = (
//     songIndex,
//     verseIndex
// ) => {
//     const { lyricUnits } = getSongObject(songIndex)

//     lyricUnits.forEach(unit => {
//         getAllTimedVerses(unit).forEach(verse => {
//             if (verse.verseIndex === verseIndex) {
//                 return verse
//             }
//         })
//     })
// }
