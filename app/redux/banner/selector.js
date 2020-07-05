import { createSelector } from 'reselect'
import { getIsSmallBannerText } from '../../helpers/resize/responsive'
import { mapWindowWidth } from '../viewport/selector'
import { BANNER_STORE } from '../../constants/store'

export const mapBannerHoverVerseIndex = (
    { [BANNER_STORE]: { bannerHoverVerseIndex } }
) => bannerHoverVerseIndex

export const mapIsBannerHovering = createSelector(
    mapBannerHoverVerseIndex,
    bannerHoverVerseIndex => bannerHoverVerseIndex > -1
)

export const mapIsSmallBannerText = createSelector(
    mapWindowWidth,
    windowWidth => getIsSmallBannerText(windowWidth)
)
