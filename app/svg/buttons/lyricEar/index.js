import lyricEar from 'assets/svgs/app/lyricEar'

import {
    LEFT,
    RIGHT
} from 'constants/lyrics'

const LYRIC_EAR_MAP = {
    [LEFT]: lyricEar,
    [RIGHT]: lyricEar
}

const getIcon = ({ buttonIdentifier: direction }) => {
    return LYRIC_EAR_MAP[direction]
}

export default getIcon
