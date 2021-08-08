import { createSelector } from 'reselect'
import { getStartTimeForVerse } from '../../api/album/time'
import { getIsSmallBannerText } from '../../helpers/resize/responsive'
import { mapSelectedSongIndex } from '../selected/selector'
import { mapWindowWidth } from '../viewport/selector'
import { BANNER_STORE } from '../../constants/store'

export const mapBannerHoverVerseIndex = (
    { [BANNER_STORE]: { bannerHoverVerseIndex } },
) => bannerHoverVerseIndex

export const mapIsBannerHovering = createSelector(
    mapBannerHoverVerseIndex,
    bannerHoverVerseIndex => bannerHoverVerseIndex > -1,
)

export const mapBannerHoverTime = createSelector(
    mapSelectedSongIndex,
    mapBannerHoverVerseIndex,
    (
        selectedSongIndex,
        bannerHoverVerseIndex,
    ) => (
        bannerHoverVerseIndex > -1 ?
            getStartTimeForVerse(
                selectedSongIndex,
                bannerHoverVerseIndex,
            ) :
            -1
    ),
)

export const mapIsSmallBannerText = createSelector(
    mapWindowWidth,
    windowWidth => getIsSmallBannerText(windowWidth),
)
