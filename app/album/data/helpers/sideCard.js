import albumLyrics from '../lyrics'

export const addHasSideCard = (songIndex, finalSong) => {
    const { lyricUnits } = albumLyrics[songIndex]
    /**
     * Let app know that song has side stanzas. Only applies to "On a Golden
     * Cord" and "Uncanny Valley Boy."
     */
    const hasSideCards = lyricUnits.some(({
        unitMap: {
            hasTopSideCard,
            hasBottomSideCard
        }

    // Tell song it has side stanzas so ear button can be shown if needed.
    }) => (
        hasTopSideCard ||
        hasBottomSideCard
    ))

    if (hasSideCards) {
        finalSong.hasSideCards = true
    }
}
