// Popup container for tips section.
import React from 'react'
import { useSelector } from 'react-redux'
import Tips from '../../Tips'
import Popup from '../../Popup'
import { getShowTipForDevice } from '../../../api/album/tips'
import { SHOWN } from '../../../constants/options'
import { mapCanLyricCarouselEnter } from '../../../redux/entrance/selectors'
import {
    mapLyricSongIndex,
    mapIsLyricLogue
} from '../../../redux/lyric/selectors'
import { mapSelectedTipsOption } from '../../../redux/option/selectors'
import {
    mapIsPhoneWidth,
    mapIsTabletWidth,
    mapIsDesktopWidth
} from '../../../redux/viewport/selectors'
import './style'

const TipsPopup = () => {
    const
        canLyricCarouselEnter = useSelector(mapCanLyricCarouselEnter),
        lyricSongIndex = useSelector(mapLyricSongIndex),
        isLyricLogue = useSelector(mapIsLyricLogue),
        selectedTipsOption = useSelector(mapSelectedTipsOption),
        isPhoneWidth = useSelector(mapIsPhoneWidth),
        isTabletWidth = useSelector(mapIsTabletWidth),
        isDesktopWidth = useSelector(mapIsDesktopWidth),

        // TODO: Make this a selector.
        isVisible =
            canLyricCarouselEnter &&
            !isLyricLogue &&
            selectedTipsOption === SHOWN &&

            // Ensure this song's tip can be shown for this viewport width.
            getShowTipForDevice({
                songIndex: lyricSongIndex,
                isPhoneWidth,
                isTabletWidth,
                isDesktopWidth
            })

    return (
        <Popup
            doMountonEnter
            doUnmountOnExit
            isCardSize
            bounceAnimate
            hasNarrowPadding
            noAbsoluteFull
            {...{
                popupName: 'TipsPopup',
                isVisible
            }}
        >
            <Tips />
        </Popup>
    )
}

export default TipsPopup
