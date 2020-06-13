import mp3s from '../../../assets/mp3s'

export const getMp3ForSong = songIndex => (
    mp3s[songIndex - 1]
)
