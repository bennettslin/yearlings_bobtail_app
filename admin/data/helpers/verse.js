export const addVerseDurations = ({
    songDuration,
    verseStartTimes,
    song

}) => {
    const verseDurations = []

    verseStartTimes.forEach((verseStartTime, verseIndex) => {
        let nextTime

        // It is followed by another verse.
        if (verseIndex < verseStartTimes.length - 1) {
            nextTime = verseStartTimes[verseIndex + 1]

        // It is the last verse.
        } else {
            nextTime = songDuration
        }

        verseDurations.push(nextTime - verseStartTime)
    })

    song.verseDurations = verseDurations
}