import { createSelector } from 'reselect'
import { getIsSmallBannerText } from '../../helpers/resize/responsive'
import { mapWindowWidth } from '../viewport/selectors'
import { BANNER_STORE } from '../../constants/store'

export const mapIsBannerHovering = (
    { [BANNER_STORE]: { isBannerHovering } }
) => isBannerHovering

export const mapBannerHoverVerseIndex = (
    { [BANNER_STORE]: { bannerHoverVerseIndex } }
) => bannerHoverVerseIndex

export const mapBannerHoverTime = (
    { [BANNER_STORE]: { bannerHoverTime } }
) => bannerHoverTime

export const mapIsSmallBannerText = createSelector(
    mapWindowWidth,
    windowWidth => getIsSmallBannerText(windowWidth)
)
