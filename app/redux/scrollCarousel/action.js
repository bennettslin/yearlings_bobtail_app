// Actions for scrolling carousel values.
import { SCROLL_CAROUSEL_STORE } from '../../constants/store'
import { SCROLL_CAROUSEL_DEFAULTS } from './default'

export const scrollCarouselToAnnotation = (log, index) => ({
    type: SCROLL_CAROUSEL_STORE,
    payload: {
        scrollCarouselLog: log,
        scrollCarouselIndex: index
    }
})

export const scrollCarouselForSongSelect = () => ({
    type: SCROLL_CAROUSEL_STORE,
    payload: {
        scrollCarouselLog: 'Song change scrolled',
        isScrollCarouselForSongSelect: true
    }
})

export const resetScrollCarouselStore = () => ({
    type: SCROLL_CAROUSEL_STORE,
    payload: SCROLL_CAROUSEL_DEFAULTS
})
