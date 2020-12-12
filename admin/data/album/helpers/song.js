import albumLyrics from '../lyrics'

const _addIsLogue = (songIndex, song) => {
    const { isLogue } = albumLyrics[songIndex]

    if (isLogue) {
        song.isLogue = isLogue
    }

    return isLogue
}

const _addOverview = (songIndex, song) => {
    const { overview } = albumLyrics[songIndex]
    song.overview = overview
}

const _addPathAndTitle = (songIndex, song) => {
    const { path, title } = albumLyrics[songIndex]
    song.path = path
    song.title = title
}

const _addDuration = (songIndex, song) => {
    const { duration } = albumLyrics[songIndex]
    song.songDuration = duration

    return duration
}

const _addIsDoublespeaker = (songIndex, song) => {
    const { isDoublespeaker } = albumLyrics[songIndex]

    if (isDoublespeaker) {
        song.isDoublespeaker = true
    }
}

export const addSongAndLogueMetadata = (songIndex, song) => {
    const isLogue = _addIsLogue(songIndex, song)
    _addOverview(songIndex, song)
    _addPathAndTitle(songIndex, song)

    return isLogue
}

export const addSongMetadata = (songIndex, song) => {
    const duration = _addDuration(songIndex, song)
    _addIsDoublespeaker(songIndex, song)

    return duration
}
