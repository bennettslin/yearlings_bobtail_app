import { getFullPathForSong } from '../../../endpoint/album/songs'
import { getRoutingSongIndex } from '../routing'
import { getIsAlbumClientSession } from '../session'

export const getIsAlbumSongPath = pathname => {
    // Check if it's a valid album root path.
    if (pathname === '') {
        return true
    }

    // Check if it's a valid album page path.
    const routingSongIndex = getRoutingSongIndex(pathname)
    if (Number.isFinite(routingSongIndex)) {
        return (
            // Allow for song path to be just index number.
            pathname === `${routingSongIndex}` ||
            pathname === `${getFullPathForSong(routingSongIndex)}`
        )
    }

    return false
}

export const getIsAlbumSession = pathname => (
    getIsAlbumSongPath(pathname) ||

    /**
     * Also check if we are in a promo popup, since it will show a promo
     * pathname while it is open.
     */
    getIsAlbumClientSession()
)
