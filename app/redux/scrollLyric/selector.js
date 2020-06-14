import { SCROLL_LYRIC_STORE } from '../../constants/store'

export const mapScrollLyricLog = (
    { [SCROLL_LYRIC_STORE]: { scrollLyricLog } }
) => scrollLyricLog

export const mapScrollLyricByVerse = (
    { [SCROLL_LYRIC_STORE]: { scrollLyricByVerse } }
) => scrollLyricByVerse

export const mapScrollLyricIndex = (
    { [SCROLL_LYRIC_STORE]: { scrollLyricIndex } }
) => scrollLyricIndex

export const mapScrollLyricAlways = (
    { [SCROLL_LYRIC_STORE]: { scrollLyricAlways } }
) => scrollLyricAlways

export const mapScrollLyricNoDuration = (
    { [SCROLL_LYRIC_STORE]: { scrollLyricNoDuration } }
) => scrollLyricNoDuration

export const mapScrollLyricFromAutoScroll = (
    { [SCROLL_LYRIC_STORE]: { scrollLyricFromAutoScroll } }
) => scrollLyricFromAutoScroll

// TODO: What is this value?
export const mapQueuedSceneChangeExitScrollCallback = (
    { [SCROLL_LYRIC_STORE]: { queuedSceneChangeExitScrollCallback } }
) => queuedSceneChangeExitScrollCallback
