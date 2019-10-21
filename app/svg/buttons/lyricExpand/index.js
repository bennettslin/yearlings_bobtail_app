import lyricCollapse from 'assets/svgs/app/lyricCollapse'
import lyricExpand from 'assets/svgs/app/lyricExpand'

const LYRIC_EXPAND_MAP = {
    [true]: lyricCollapse,
    [false]: lyricExpand
}

const getIcon = ({ buttonIdentifier: isLyricExpanded }) => {
    return LYRIC_EXPAND_MAP[isLyricExpanded]
}

export default getIcon
