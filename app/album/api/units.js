import { getSong } from '../../album/api/songs'

export const getUnit = (songIndex, unitIndex) => {
    const { lyricUnits } = getSong(songIndex)

    return lyricUnits ?
        lyricUnits[unitIndex] :
        []
}

export const getLastUnitDotCardIndex = (songIndex) => {
    /**
     * Return an index if the last unit is a dot card. Otherwise, return -1.
     * Note that this assumes there can only be one last unit that isn't a
     * stanza unit.
     */
    const { lyricUnits } = getSong(songIndex)

    if (lyricUnits) {
        const
            lastUnitIndex = lyricUnits.length - 1,
            {
                unitMap: { unitDot },
                mainVerses
            } = lyricUnits[lastUnitIndex]

        if (unitDot && !mainVerses) {
            return lyricUnits.length - 1
        }
    }

    return -1
}
