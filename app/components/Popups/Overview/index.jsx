// Popup container for overview section.
import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import Overview from '../../Overview'
import Popup from '../../Popup'
import { getMapIsOverviewPopupShown } from '../../../redux/option/selectors'
import './style'

const OverviewPopup = ({
    inMain = false

}) => {
    const isOverviewPopupShown = useSelector(
        getMapIsOverviewPopupShown(inMain)
    )

    return (
        <Popup
            doMountonEnter
            doUnmountOnExit
            bounceAnimate
            hasNarrowPadding
            noAbsoluteFull
            {...{
                popupName: 'OverviewPopup',
                isVisible: isOverviewPopupShown,
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
