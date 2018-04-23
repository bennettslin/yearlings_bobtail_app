// Popup container for overview section.

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import OverviewSection from '../Overview/Overview'
import Popup from '../Popup/Popup'
import { getSongIsLogue } from '../../helpers/dataHelper'

const mapStateToProps = ({
    selectedOverviewIndex,
    isHeavyRenderReady,
    selectedSongIndex,
    selectedTipsIndex
}) => ({
    selectedOverviewIndex,
    isHeavyRenderReady,
    selectedSongIndex,
    selectedTipsIndex
})

const overviewPopupPropTypes = {
    // Through Redux.
    selectedOverviewIndex: PropTypes.number.isRequired,
    isHeavyRenderReady: PropTypes.bool.isRequired,
    selectedSongIndex: PropTypes.number.isRequired,
    selectedTipsIndex: PropTypes.number.isRequired,

    // From parent.
    className: PropTypes.any,
    inMain: PropTypes.bool,
    handlePopupContainerClick: PropTypes.func.isRequired
},

OverviewPopup = ({

    className,
    inMain,
    selectedOverviewIndex,
    isHeavyRenderReady,
    selectedSongIndex,
    selectedTipsIndex,
    handlePopupContainerClick,

...other }) => {

    const isLogue = getSongIsLogue(selectedSongIndex)

    let isVisible

    // Switch between logue and song overview sections.
    if (isLogue) {
        isVisible = !inMain
    } else {
        isVisible = selectedOverviewIndex ? false : inMain
    }

    /**
     * Always hide overview section when title is open, or when tip is shown
     * in song. Always hide before ready to render.
     */
    if (!isHeavyRenderReady || (!isLogue && !selectedTipsIndex)) {
        isVisible = false
    }

    return (
        <Popup
            bounceAnimate
            hasNarrowPadding
            popupName="overview"
            className={className}
            noFlexCentre={inMain}
            isVisible={isVisible}
            handlePopupContainerClick={handlePopupContainerClick}
        >
            <OverviewSection {...other} />
        </Popup>
    )
}

OverviewPopup.propTypes = overviewPopupPropTypes

export default connect(mapStateToProps)(OverviewPopup)
