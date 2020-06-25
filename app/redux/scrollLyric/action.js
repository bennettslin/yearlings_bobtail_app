// Actions for scrolling lyric values.
import { SCROLL_LYRIC_STORE } from '../../constants/store'
import { SCROLL_LYRIC_DEFAULTS } from './default'

export const scrollLyricToAnchor = (log, index) => ({
    type: SCROLL_LYRIC_STORE,
    payload: {
        scrollLyricLog: log,
        scrollLyricIndex: index
    }
})

export const scrollLyricToVerse = (log, index) => ({
    type: SCROLL_LYRIC_STORE,
    payload: {
        scrollLyricLog: log,
        scrollLyricIndex: index,
        scrollLyricByVerse: true
    }
})

// TODO: Is a separate action for always scrolling necessary?
export const scrollLyricToVerseAlways = (log, index) => ({
    type: SCROLL_LYRIC_STORE,
    payload: {
        scrollLyricLog: log,
        scrollLyricIndex: index,
        scrollLyricByVerse: true,
        scrollLyricAlways: true
    }
})

export const scrollLyricForSongChange = () => ({
    type: SCROLL_LYRIC_STORE,
    payload: {
        scrollLyricLog: 'Song change scrolled',
        scrollLyricByVerse: true,
        scrollLyricNoDuration: true,
        scrollLyricAlways: true
    }
})

export const scrollLyricForAutoScrolledPlay = () => ({
    type: SCROLL_LYRIC_STORE,
    payload: {
        scrollLyricLog: 'Play toggled',
        scrollLyricByVerse: true,
        scrollLyricAlways: true
    }
})

export const scrollLyricForPlayAutoScroll = index => ({
    type: SCROLL_LYRIC_STORE,
    payload: {
        scrollLyricLog: 'Play autoScrolled',
        scrollLyricIndex: index,
        scrollLyricByVerse: true,
        scrollLyricFromAutoScroll: true
    }
})

export const resetScrollLyricStore = () => ({
    type: SCROLL_LYRIC_STORE,
    payload: SCROLL_LYRIC_DEFAULTS
})
