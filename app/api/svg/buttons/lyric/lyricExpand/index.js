import lyricCollapse from '../../../../../../assets/svgs/app/lyric/lyricCollapse'
import lyricExpand from '../../../../../../assets/svgs/app/lyric/lyricExpand'

const LYRIC_EXPAND_MAP = {
    [true]: lyricCollapse,
    [false]: lyricExpand,
}

export default ({ buttonIdentifier: isLyricExpanded }) => {
    return LYRIC_EXPAND_MAP[isLyricExpanded]
}
