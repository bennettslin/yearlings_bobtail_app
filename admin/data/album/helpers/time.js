import { getFloatWithTenth } from '../../../../app/helpers/general'

export const addSongAlbumTimes = songs => {
    songs.forEach((song, songIndex) => {
        if (!song.isLogue) {
            const {
                songAlbumTime = 0,
                songDuration = 0,
            } = songs[songIndex - 1]

            // Add previous song's album song time to its duration.
            song.songAlbumTime =
                getFloatWithTenth(songAlbumTime + songDuration)
        }
    })
}
