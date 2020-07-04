import { SCROLL_LYRIC_STORE } from '../../constants/store'

export const mapScrollLyricLog = (
    { [SCROLL_LYRIC_STORE]: { scrollLyricLog } }
) => scrollLyricLog

export const mapScrollLyricByAnchor = (
    { [SCROLL_LYRIC_STORE]: { scrollLyricByAnchor } }
) => scrollLyricByAnchor

export const mapScrollLyricIndex = (
    { [SCROLL_LYRIC_STORE]: { scrollLyricIndex } }
) => scrollLyricIndex

export const mapScrollLyricAlways = (
    { [SCROLL_LYRIC_STORE]: { scrollLyricAlways } }
) => scrollLyricAlways

export const mapIsScrollLyricForSongSelect = (
    { [SCROLL_LYRIC_STORE]: { isScrollLyricForSongSelect } }
) => isScrollLyricForSongSelect

export const mapScrollLyricFromAutoScroll = (
    { [SCROLL_LYRIC_STORE]: { scrollLyricFromAutoScroll } }
) => scrollLyricFromAutoScroll

export const mapIsScrollLyricForVerseSelect = (
    { [SCROLL_LYRIC_STORE]: { isScrollLyricForVerseSelect } }
) => isScrollLyricForVerseSelect
