import { getFloatWithTenth } from '../../../../app/helpers/general'

export const addSongAlbumTimes = songs => {
    songs.forEach((song, songIndex) => {
        if (!song.isLogue) {
            const {
                playerTime = 0,
                songDuration = 0,
            } = songs[songIndex - 1]

            // Add previous song's player time to its duration.
            song.playerTime =
                getFloatWithTenth(playerTime + songDuration)
        }
    })
}
