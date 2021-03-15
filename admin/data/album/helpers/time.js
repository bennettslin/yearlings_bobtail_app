import { getFloatToHundredth } from '../../../../app/helpers/general'

const getSecondsFromMixTime = mixTimeString => {
    // Mix time string looks like 1:15:22.67.
    let sign = 1

    // If mix start time is negative.
    if (mixTimeString[0] === '-') {
        mixTimeString = mixTimeString.replace('-', '')
        sign = -1
    }

    const
        mixTimeArray = mixTimeString.split(':'),
        minutes = parseInt(mixTimeArray[0]),
        seconds = parseInt(mixTimeArray[1]),
        frames = parseFloat(mixTimeArray[2])

    return sign * (
        minutes * 60 +
        seconds +
        // A frame is a thirtieth of a second.
        frames / 30
    )
}

export const getVerseTimeFromMixTimes = (songMixTime, verseMixTime) => (
    /**
     * Mix times were obtained from the projects stored in the Roland VS-2480,
     * which have all the song's meter and tempo information.
     */
    getFloatToHundredth(
        /**
         * This is the time that the verse begins in the mix. Default priority
         * goes to the start of the bar, then halfway, then a quarter way. Use
         * the score to determine when there is a vocal rest.
         */
        getSecondsFromMixTime(verseMixTime) -
        /**
         * This is the time that the sound begins in the mix. Once it is lined
         * up with the song's player time, then the mix time for each verse
         * will also line up with that verse's player time.
         */
        getSecondsFromMixTime(songMixTime),
    )
)
