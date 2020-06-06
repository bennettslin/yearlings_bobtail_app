import lyricEarLeft from '../../../../../../assets/svgs/app/lyric/lyricEarLeft'
import lyricEarRight from '../../../../../../assets/svgs/app/lyric/lyricEarRight'

import {
    LYRIC_LEFT,
    LYRIC_RIGHT
} from '../../../../../constants/lyrics'

const LYRIC_EAR_MAP = {
    [LYRIC_LEFT]: lyricEarLeft,
    [LYRIC_RIGHT]: lyricEarRight
}

export default ({ buttonIdentifier: direction }) => {
    return LYRIC_EAR_MAP[direction]
}
