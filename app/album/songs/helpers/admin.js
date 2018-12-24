import { DOT_UNIT } from 'constants/lyrics'

export const addDotUnitsCount = (song) => {

    let dotUnitsCount = 0

    const { lyricUnits } = song

    if (lyricUnits) {
        lyricUnits.forEach(unit => {
            const { unitMap } = unit

            if (unitMap[DOT_UNIT]) {
                dotUnitsCount++
            }
        })
    }

    song.adminDotUnitsCount = dotUnitsCount
}
