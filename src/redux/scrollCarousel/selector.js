import { SCROLL_CAROUSEL_STORE } from '../../constants/store'

export const mapScrollCarouselLog = (
    { [SCROLL_CAROUSEL_STORE]: { scrollCarouselLog } },
) => scrollCarouselLog

export const mapScrollCarouselIndex = (
    { [SCROLL_CAROUSEL_STORE]: { scrollCarouselIndex } },
) => scrollCarouselIndex

export const mapScrollCarouselNoDuration = (
    { [SCROLL_CAROUSEL_STORE]: { isScrollCarouselForSongSelect } },
) => isScrollCarouselForSongSelect
