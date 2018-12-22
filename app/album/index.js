import { parseAlbumData } from './helpers'
import scenes from '../album/scenes'
import songs from '../album/songs'
import tips from '../album/tips'

const rawAlbum = {
        title: `Yearling's Bobtail`,
        bookStartingIndices: [1, 10],
        tips,
        scenes,
        songs
    },

    // Restructure raw data to be usable by app.
    album = parseAlbumData(rawAlbum)

export default album
