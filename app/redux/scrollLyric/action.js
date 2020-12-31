// Actions for scrolling lyric values.
import { SCROLL_LYRIC_STORE } from '../../constants/store'
import { SCROLL_LYRIC_DEFAULTS } from './default'

export const scrollLyricToAnchor = (log, index) => ({
    type: SCROLL_LYRIC_STORE,
    payload: {
        scrollLyricLog: log,
        scrollLyricIndex: index,
        scrollLyricByAnchor: true,
    },
})

export const scrollLyricToVerse = (log, index) => ({
    type: SCROLL_LYRIC_STORE,
    payload: {
        scrollLyricLog: log,
        scrollLyricIndex: index,
    },
})

export const scrollLyricBackToSelectedVerse = log => ({
    type: SCROLL_LYRIC_STORE,
    payload: {
        scrollLyricLog: log,
        scrollLyricAlways: true,
    },
})

export const scrollLyricForVerseSelect = (log, index) => ({
    type: SCROLL_LYRIC_STORE,
    payload: {
        scrollLyricLog: log,
        scrollLyricIndex: index,
        scrollLyricAlways: true,
        isScrollLyricForVerseSelect: true,
    },
})

export const scrollLyricForSongSelect = () => ({
    type: SCROLL_LYRIC_STORE,
    payload: {
        scrollLyricLog: 'Song change scrolled',
        isScrollLyricForSongSelect: true,
        scrollLyricAlways: true,
    },
})

export const scrollLyricForPlayAutoScroll = index => ({
    type: SCROLL_LYRIC_STORE,
    payload: {
        scrollLyricLog: 'Play scrolled',
        scrollLyricIndex: index,
        scrollLyricFromAutoScroll: true,
    },
})

export const resetScrollLyricStore = () => ({
    type: SCROLL_LYRIC_STORE,
    payload: SCROLL_LYRIC_DEFAULTS,
})
