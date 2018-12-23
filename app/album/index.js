import { parseAlbumData } from './helpers'
import songs from '../album/songs'

const rawAlbum = {
        songs
    },

    // Restructure raw data to be usable by app.
    album = parseAlbumData(rawAlbum)

export default album
