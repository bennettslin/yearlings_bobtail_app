import {
    HAS_SIDE_CARDS
} from 'constants/lyrics'

/**
 * Let app know that song has side stanzas. Only applies to "On a Golden Cord"
 * and "Uncanny Valley Boy."
 */
export const addHasSideCardStatusToSongs = (albumSongs) => {

    albumSongs.forEach(song => {
        const { lyricUnits } = song

        if (lyricUnits) {
            let songHasSideCards = false

            lyricUnits.forEach(unit => {
                const { unitMap } = unit,

                    unitHasSideCards = Boolean(
                        unitMap.topSideCard || unitMap.bottomSideCard
                    )

                songHasSideCards = unitHasSideCards || songHasSideCards
            })

            /**
             * Tell song it has side stanzas, so ear button can be shown if
             * needed.
             */
            song[HAS_SIDE_CARDS] = songHasSideCards
        }
    })
}
