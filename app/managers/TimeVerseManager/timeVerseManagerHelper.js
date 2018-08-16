import {
    getTimeRelativeToVerseIndex
} from 'helpers/dataHelper'

export const getNextVerseIndexIfNeededForCurrentTime = (
    songIndex,
    verseIndex,
    currentTime
) => {
    /**
     * If the current time is in the next verse, return its index. Otherwise,
     * return null.
     */

    const
        /**
         * This method returns 1 if the current time is valid, and also if it's
         * after the given verse.
         */
        isTimeAfterCurrentVerse = getTimeRelativeToVerseIndex(
            songIndex,
            verseIndex,
            currentTime
        ) === 1

    return isTimeAfterCurrentVerse ?

        /**
         * If current time is after given verse and there is a next verse,
         * return index of the next verse.
         */
        verseIndex + 1 :

        // Otherwise, return null.
        null
}
