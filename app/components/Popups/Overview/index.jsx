// Popup container for overview section.
import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import Overview from '../../Overview'
import Popup from '../../Popup'
import {
    getIsOverviewVisibleBySection,
    getIsOverviewVisibleBySong
} from './helper'
import { mapCanLyricCarouselEnter } from '../../../redux/entrance/selectors'
import { mapIsLyricLogue } from '../../../redux/lyric/selectors'
import {
    mapIsLogueOverviewShown,
    mapIsOverviewShown,
    mapIsTipsShown
} from '../../../redux/option/selectors'
import { mapIsOverlayShown } from '../../../redux/transient/selectors'
import './style'

const OverviewPopup = ({
    inMain = false

}) => {
    const
        canLyricCarouselEnter = useSelector(mapCanLyricCarouselEnter),
        isLyricLogue = useSelector(mapIsLyricLogue),
        isLogueOverviewShown = useSelector(mapIsLogueOverviewShown),
        isOverviewShown = useSelector(mapIsOverviewShown),
        isOverlayShown = useSelector(mapIsOverlayShown),
        isTipsShown = useSelector(mapIsTipsShown),

        // TODO: Make this a selector.
        isVisibleBySection = getIsOverviewVisibleBySection({
            inMain,
            isLyricLogue
        }),

        isVisibleBySong = getIsOverviewVisibleBySong({
            isLyricLogue,
            isOverlayShown,
            isLogueOverviewShown,
            isOverviewShown,
            isTipsShown
        }),

        isVisible =
            canLyricCarouselEnter &&
            isVisibleBySection &&
            isVisibleBySong

    return (
        <Popup
            doMountonEnter
            doUnmountOnExit
            bounceAnimate
            hasNarrowPadding
            noAbsoluteFull
            {...{
                popupName: 'OverviewPopup',
                isVisible,
                noFlexCentre: inMain
            }}
        >
            <Overview />
        </Popup>
    )
}

OverviewPopup.propTypes = {
    inMain: PropTypes.bool
}

export default memo(OverviewPopup)
