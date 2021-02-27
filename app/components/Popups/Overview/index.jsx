// Popup container for overview section.
import React, { useContext, cloneElement } from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import AlbumPageElementContext from '../../../contexts/AlbumPageElement'
import Overview from '../../Overview'
import Popup from '../../Popup'
import { getIsServerSide } from '../../../utils/browser'
import { getMapIsOverviewPopupVisible } from '../../../redux/overview/selector'
import './style'

const OverviewPopup = ({ inMain = false }) => {
    const
        isOverviewPopupVisible = useSelector(
            getMapIsOverviewPopupVisible(inMain)
        ),
        albumPageElement = useContext(AlbumPageElementContext)

    return (
        <Popup
            appear
            mountOnEnter
            unmountOnExit
            bounceAnimate
            hasNarrowPadding
            noAbsoluteFull
            {...{
                popupName: 'OverviewPopup',
                isVisible: isOverviewPopupVisible,
                noFlexCentre: inMain,
            }}
        >
            {getIsServerSide() ? (
                cloneElement(albumPageElement, { isOverview: true })
            ) : (
                <Overview />
            )}
        </Popup>
    )
}

OverviewPopup.propTypes = {
    inMain: PropTypes.bool,
}

export default OverviewPopup
