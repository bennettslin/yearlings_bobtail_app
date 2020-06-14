import { createSelector } from 'reselect'
import { getStanzaIndexForVerse } from '../../api/album/verses'
import {
    getCursorIndex,
    getSongCursorWidth,
    getCursorWidth
} from '../../helpers/cursor'
import {
    mapIsActivated,
    mapActivatedTime,
    mapActivatedVerseIndex
} from '../activated/selectors'
import {
    mapLyricSongIndex,
    mapLyricVerseIndex
} from '../lyric/selectors'
import {
    mapSelectedSongIndex,
    mapSelectedTime
} from '../selected/selectors'
import {
    mapIsSliderMoving,
    mapSliderTime,
    mapSliderVerseIndex
} from '../slider/selectors'
import {
    mapIsBannerHovering,
    mapBannerHoverTime
} from '../banner/selectors'

export const mapCursorTime = createSelector(
    mapSelectedTime,
    mapIsActivated,
    mapActivatedTime,
    mapIsSliderMoving,
    mapSliderTime,
    (
        selectedTime,
        isActivated,
        activatedTime,
        isSliderMoving,
        sliderTime
    ) => getCursorWidth({
        selectedTime,
        isActivated,
        activatedTime,
        isSliderMoving,
        sliderTime
    })
)

export const mapSongCursorWidth = createSelector(
    mapIsBannerHovering,
    mapBannerHoverTime,
    mapSelectedTime,
    mapSelectedSongIndex,
    (
        isBannerHovering,
        bannerHoverTime,
        selectedTime,
        selectedSongIndex
    ) => getSongCursorWidth({
        isBannerHovering,
        bannerHoverTime,
        selectedTime,
        selectedSongIndex
    })
)

// export const mapSceneCursorWidth = createSelector(

//     (

//     ) => {
//         const
//             cursorIndex = getCursorIndex(
//                 sliderSceneIndex,
//                 activatedSceneIndex,
//                 selectedSceneIndex
//             ),
//             isAfterCursor = cursorIndex < sceneIndex,
            
//             // TODO: Make this a selector. Only selected filmstrip scene gets updates.
//             cursorWidth =
//                 (selectedTime - sceneStartTime) /
//                 sceneDuration * 100
//     }
// )

// const
// activatedSceneIndex = useSelector(mapActivatedSceneIndex),
// selectedSongIndex = useSelector(mapSelectedSongIndex),
// selectedSceneIndex = useSelector(mapSelectedSceneIndex),
// isSceneSelected = useSelector(getMapIsSceneSelected(sceneIndex)),
// selectedTime = useSelector(mapSelectedTime),
// sliderSceneIndex = useSelector(mapSliderSceneIndex),
// sceneStartTime = getStartTimeForScene(
//     selectedSongIndex,
//     sceneIndex
// ),
// sceneDuration = getDurationForScene(
//     selectedSongIndex,
//     sceneIndex
// ),

// isOdd = Boolean(sceneIndex % 2),
// isSceneActivated = useSelector(getMapIsSceneActivated(sceneIndex)),
// isSceneSlid = useSelector(getMapIsSceneSlid(sceneIndex)),

export const mapCursorVerseIndex = createSelector(
    mapSliderVerseIndex,
    mapActivatedVerseIndex,
    mapLyricVerseIndex,
    (
        sliderVerseIndex,
        activatedVerseIndex,
        lyricVerseIndex
    ) => getCursorIndex(
        sliderVerseIndex,
        activatedVerseIndex,
        lyricVerseIndex
    )
)

export const getMapIsVerseCursor = verseIndex => createSelector(
    mapCursorVerseIndex,
    cursorVerseIndex => verseIndex === cursorVerseIndex
)

export const getMapVerseCursorStatus = verseIndex => createSelector(
    mapCursorVerseIndex,
    cursorVerseIndex => {
        if (verseIndex < cursorVerseIndex) {
            return -1
        } else if (verseIndex > cursorVerseIndex) {
            return 1
        } else {
            return 0
        }
    }
)

export const getMapIsStanzaCursor = stanzaIndex => createSelector(
    mapLyricSongIndex,
    mapCursorVerseIndex,
    (
        lyricSongIndex,
        cursorVerseIndex
    ) => (
        stanzaIndex === getStanzaIndexForVerse(
            lyricSongIndex,
            cursorVerseIndex
        )
    )
)
