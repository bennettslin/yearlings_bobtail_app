// Popup container for overview section.
import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import Overview from '../../Overview'
import Popup from '../../Popup'
import { getMapIsOverviewPopupVisible } from '../../../redux/overview/selector'
import './style'

const OverviewPopup = ({ inMain = false }) => {
    const isOverviewPopupVisible = useSelector(
        getMapIsOverviewPopupVisible(inMain)
    )

    return (
        <Popup
            mountOnEnter
            unmountOnExit
            bounceAnimate
            hasNarrowPadding
            noAbsoluteFull
            {...{
                popupName: 'OverviewPopup',
                isVisible: isOverviewPopupVisible,
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
