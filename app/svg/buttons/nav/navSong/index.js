import navLogue from 'assets/svgs/app/nav/navLogue'
import navSong from 'assets/svgs/app/nav/navSong'

import { getSongIsLogue } from 'album/api/songs'

const NAV_SONG_MAP = {
    [true]: navLogue,
    [false]: navSong
}

const getIcon = ({ buttonIdentifier: songIndex }) => {
    return NAV_SONG_MAP[getSongIsLogue(songIndex)]
}

export default getIcon
