import {
    getSongIsLogue,
    getSongsNotLoguesCount
} from 'helpers/dataHelper'

export const getNextPlayerToRender = (
    selectedSongIndex,
    canPlayThroughsObject
) => {
    /**
     * Given an array of players that have passed canPlayThrough, return
     * the next player in the queue to be rendered, starting with the
     * selected song.
     */

    const songsCount = getSongsNotLoguesCount(),
        isLogue = getSongIsLogue(selectedSongIndex)

    /**
     * If logue, set to first song. Song indices are 1-based.
     */
    let currentSongIndex = isLogue ? 1 : selectedSongIndex,
        nextPlayerToRender,
        counter = 0

    do {
        // Counter song can play through, so increment.
        if (canPlayThroughsObject[currentSongIndex]) {
            currentSongIndex = (currentSongIndex % songsCount) + 1

        /**
         * This is the first song that hasn't passed canPlayThrough
         * that is either the selected song or coming after it.
         */
        } else {
            nextPlayerToRender = currentSongIndex
        }

        counter++

    } while (!nextPlayerToRender && counter < songsCount)

    /**
     * Return next song in the queue, or else -1 if all are now rendered.
     */
    nextPlayerToRender = nextPlayerToRender || -1

    return nextPlayerToRender
}
