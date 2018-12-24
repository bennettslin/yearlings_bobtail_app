import { DOT_UNIT } from 'constants/lyrics'

export const addDotUnitsCount = (song) => {
    const { lyricUnits } = song

    if (lyricUnits) {
        let dotUnitsCount = 0

        lyricUnits.forEach(unit => {
            const { unitMap } = unit

            if (unitMap[DOT_UNIT]) {
                dotUnitsCount++
            }
        })

        song.adminDotUnitsCount = dotUnitsCount
    }
}

export const addPluralCardsCount = (song) => {
    const { annotations } = song

    if (annotations) {
        let pluralCardsCount = 0

        annotations.forEach(annotation => {
            const { cards } = annotation
            if (cards.length > 1) {
                pluralCardsCount++
            }
        })

        song.adminPluralCardsCount = pluralCardsCount
    }
}
