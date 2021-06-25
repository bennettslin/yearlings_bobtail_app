import navLogue from '../../../../../../assets/svgs/app/nav/navLogue'
import navSong from '../../../../../../assets/svgs/app/nav/navSong'

import { getSongIsLogue } from '../../../../album/songs'

const NAV_SONG_MAP = {
    [true]: navLogue,
    [false]: navSong,
}

export default ({ buttonOption: songIndex }) => {
    return NAV_SONG_MAP[getSongIsLogue(songIndex)]
}
