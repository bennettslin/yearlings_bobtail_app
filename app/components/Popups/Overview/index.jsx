// Popup container for overview section.
import React, { memo, useContext } from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import PageComponentContext from '../../../contexts/PageComponent'
import Overview from '../../Overview'
import Popup from '../../Popup'
import { getIsServerSide } from '../../../utils/server'
import { getMapIsOverviewPopupVisible } from '../../../redux/overview/selector'
import './style'

const OverviewPopup = ({ inMain = false }) => {
    const
        isOverviewPopupVisible = useSelector(
            getMapIsOverviewPopupVisible(inMain)
        ),
        PageComponent = useContext(PageComponentContext)

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
                noFlexCentre: inMain
            }}
        >
            {getIsServerSide() ? (
                <PageComponent isOverview />
            ) : (
                <Overview />
            )}
        </Popup>
    )
}

OverviewPopup.propTypes = {
    inMain: PropTypes.bool
}

export default memo(OverviewPopup)
