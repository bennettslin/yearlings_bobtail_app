import { getPathForSong } from '../../../api/album/songs'
import { getRoutingSongIndex } from '../routing'

const _getIsValidSongPath = pathname => {
    // Check if it's a valid album root path.
    if (pathname === '') {
        return true
    }

    // Check if it's a valid album page path.
    const routingSongIndex = getRoutingSongIndex(pathname)
    if (Number.isFinite(routingSongIndex)) {
        return pathname === `${routingSongIndex}-${getPathForSong(routingSongIndex)}`
    }

    return false
}

export const getIsAlbumPage = pathname => (
    _getIsValidSongPath(pathname)
)
