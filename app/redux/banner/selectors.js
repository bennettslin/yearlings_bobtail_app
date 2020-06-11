import { createSelector } from "reselect"
import { getDurationForSong } from "../../api/album/time"
import {
    mapSelectedSongIndex,
    mapSelectedTime
} from "../selected/selectors"

export const mapIsBannerHovering = (
    { bannerStore: { isBannerHovering } }
) => isBannerHovering

export const mapBannerHoverVerseIndex = (
    { bannerStore: { bannerHoverVerseIndex } }
) => bannerHoverVerseIndex

export const mapBannerHoverTime = (
    { bannerStore: { bannerHoverTime } }
) => bannerHoverTime

export const mapSongBannerCursorWidth = createSelector(
    mapIsBannerHovering,
    mapBannerHoverTime,
    mapSelectedTime,
    mapSelectedSongIndex,
    (
        isBannerHovering,
        bannerHoverTime,
        selectedTime,
        selectedSongIndex
    ) => {
        const
            playedTime = isBannerHovering ? bannerHoverTime : selectedTime,
            songDuration = getDurationForSong(selectedSongIndex)

        return playedTime / songDuration * 100
    }
)
