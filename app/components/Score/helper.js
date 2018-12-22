import scoresArray from 'assets/scores'

export const getSongScore = (songIndex) => {
    return scoresArray[songIndex - 1]
}
