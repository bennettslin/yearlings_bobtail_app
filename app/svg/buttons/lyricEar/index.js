import lyricEarLeft from 'assets/svgs/app/lyricEarLeft'
import lyricEarRight from 'assets/svgs/app/lyricEarRight'

import {
    LEFT,
    RIGHT
} from 'constants/lyrics'

const LYRIC_EAR_MAP = {
    [LEFT]: lyricEarLeft,
    [RIGHT]: lyricEarRight
}

const getIcon = ({ buttonIdentifier: direction }) => {
    return LYRIC_EAR_MAP[direction]
}

export default getIcon
