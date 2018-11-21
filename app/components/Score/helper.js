import album from 'server/album'

export const getSongScore = (songIndex) => {
    const { scores } = album
    return scores[songIndex - 1]
}
