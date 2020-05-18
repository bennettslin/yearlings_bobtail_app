// Get album based on whether in local or deployed environment.
// eslint-disable-next-line import/no-unresolved
import album from 'data'

// Allow access to album in local delivery.
if (IS_DELIVERY) {
    global.album = album

    // TODO: Use window helper.
    global.a = (songIndex = window.localStorage.selectedSongIndex) => (
        album.songs[songIndex]
    )
}

export default album
