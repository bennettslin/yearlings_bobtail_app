export const addHasSideCard = (song, finalSong) => {
    /**
     * Let app know that song has side stanzas. Only applies to "On a Golden
     * Cord" and "Uncanny Valley Boy."
     */
    const { lyricUnits } = song
    let hasSideCards = false

    lyricUnits.forEach(unit => {
        const {
                unitMap: {
                    hasTopSideCard,
                    hasBottomSideCard
                }
            } = unit,

            unitHasSideCards = Boolean(
                hasTopSideCard ||
                hasBottomSideCard
            )

        /**
         * Tell song it has side stanzas so ear button can be shown if needed.
         */
        if (unitHasSideCards || hasSideCards) {
            finalSong.hasSideCards = true
        }
    })
}
