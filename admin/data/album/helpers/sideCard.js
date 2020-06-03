import albumLyrics from '../lyrics'

export const addHasSideCard = (songIndex, song) => {
    const { lyricUnits } = albumLyrics[songIndex]
    /**
     * Let app know that song has side stanzas. Only applies to "On a Golden
     * Cord" and "Uncanny Valley Boy."
     */
    const hasSideCards = lyricUnits.some(({
        unitMap: { sideCard }
    }) => (
        // Tell song it has side stanzas so ear button can be shown if needed.
        Boolean(sideCard)
    ))

    if (hasSideCards) {
        song.hasSideCards = true
    }
}
