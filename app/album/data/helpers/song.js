import albumLyrics from '../lyrics'

export const addIsLogue = (songIndex, finalSong) => {
    const { isLogue } = albumLyrics[songIndex]

    if (isLogue) {
        finalSong.isLogue = isLogue
    }

    return isLogue
}

export const addOverview = (songIndex, finalSong) => {
    const { overview } = albumLyrics[songIndex]
    finalSong.overview = overview
}

export const addTitle = (songIndex, finalSong) => {
    const { title } = albumLyrics[songIndex]
    finalSong.title = title
}

export const addIsDoublespeaker = (songIndex, finalSong) => {
    const { isDoublespeaker } = albumLyrics[songIndex]

    if (isDoublespeaker) {
        finalSong.isDoublespeaker = true
    }
}

export const addDuration = (songIndex, finalSong) => {
    const { duration } = albumLyrics[songIndex]
    finalSong.songDuration = duration

    return duration
}
