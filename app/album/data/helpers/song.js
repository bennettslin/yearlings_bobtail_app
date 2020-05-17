import albumLyrics from '../lyrics'

const _addIsLogue = (songIndex, finalSong) => {
    const { isLogue } = albumLyrics[songIndex]

    if (isLogue) {
        finalSong.isLogue = isLogue
    }

    return isLogue
}

const _addOverview = (songIndex, finalSong) => {
    const { overview } = albumLyrics[songIndex]
    finalSong.overview = overview
}

const _addTitle = (songIndex, finalSong) => {
    const { title } = albumLyrics[songIndex]
    finalSong.title = title
}

const _addDuration = (songIndex, finalSong) => {
    const { duration } = albumLyrics[songIndex]
    finalSong.songDuration = duration

    return duration
}

const _addIsDoublespeaker = (songIndex, finalSong) => {
    const { isDoublespeaker } = albumLyrics[songIndex]

    if (isDoublespeaker) {
        finalSong.isDoublespeaker = true
    }
}

export const addSongAndLogueMetadata = (songIndex, finalSong) => {
    const isLogue = _addIsLogue(songIndex, finalSong)
    _addOverview(songIndex, finalSong)
    _addTitle(songIndex, finalSong)

    return isLogue
}

export const addSongMetadata = (songIndex, finalSong) => {
    const duration = _addDuration(songIndex, finalSong)
    _addIsDoublespeaker(songIndex, finalSong)

    return duration
}
