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

export const addIsDoublespeaker = (songIndex, finalSong) => {
    const { isDoublespeaker } = albumLyrics[songIndex]

    if (isDoublespeaker) {
        finalSong.isDoublespeaker = true
    }
}

export const addSongTotalTime = (songIndex, finalSong) => {
    const { duration } = albumLyrics[songIndex]
    finalSong.songDuration = duration

    return duration
}
