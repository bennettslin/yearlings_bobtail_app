import albumLyrics from '../lyrics'

export const addFormTypeIndices = (songIndex, song) => {
    /**
     * Associate a type and index for each stanza, like verse, chorus, and so
     * forth.
     */
    const { lyricUnits } = albumLyrics[songIndex],
        unitFormTypeIndices = []

    if (lyricUnits) {
        const formTypeCounters = {}

        // Initial loop through all lyric units.
        lyricUnits.forEach(unit => {
            const { unitMap } = unit,
                {
                    formType,
                    subsequent
                } = unitMap

            // Unless it's a dot card, it has a stanza type.
            if (formType) {

                // If it's not a subsequent unit, establish new index.
                if (!subsequent) {
                    formTypeCounters[formType] = (
                        formTypeCounters[formType] || 0
                    ) + 1
                }

                unitFormTypeIndices.push(formTypeCounters[formType])

            } else {
                unitFormTypeIndices.push(-1)
            }
        })

        /**
         * Now that we know the count for each stanza type, loop through all
         * lyric units again.
         */
        lyricUnits.forEach((unit, unitIndex) => {
            const
                { unitMap } = unit,
                { formType } = unitMap

            if (formType) {
                /**
                 * Don't show index if there is only one stanza of that type
                 * for the entire song.
                 */
                if (formTypeCounters[formType] === 1) {
                    unitFormTypeIndices[unitIndex] = -1
                }
            }
        })
    }

    song.unitFormTypeIndices = unitFormTypeIndices
}
