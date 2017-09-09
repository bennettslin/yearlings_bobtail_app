// Popup container for overview section.

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import OverviewSection from './overview-section'
import Popup from '../popup/popup'
import { getSongIsLogue } from '../../helpers/data-helper'

const mapStateToProps = ({
    selectedOverviewIndex,
    isHeavyRenderReady,
    selectedSongIndex,
    selectedTitleIndex,
    selectedTipsIndex,
    overviewLogueIndex,
    overviewSongIndex
}) => ({
    selectedOverviewIndex,
    isHeavyRenderReady,
    selectedSongIndex,
    selectedTitleIndex,
    selectedTipsIndex,
    overviewLogueIndex,
    overviewSongIndex
})

const overviewPopupPropTypes = {
    // Through Redux.
    overviewLogueIndex: PropTypes.number.isRequired,
    overviewSongIndex: PropTypes.number.isRequired,
    selectedOverviewIndex: PropTypes.number.isRequired,
    isHeavyRenderReady: PropTypes.bool.isRequired,
    selectedSongIndex: PropTypes.number.isRequired,
    selectedTipsIndex: PropTypes.number.isRequired,
    selectedTitleIndex: PropTypes.number.isRequired,

    // From parent.
    inOverviewSubfield: PropTypes.bool.isRequired,
    handlePopupContainerClick: PropTypes.func.isRequired
},

OverviewPopup = ({

    inOverviewSubfield,
    overviewLogueIndex,
    overviewSongIndex,
    selectedOverviewIndex,
    isHeavyRenderReady,
    selectedSongIndex,
    selectedTipsIndex,
    selectedTitleIndex,
    handlePopupContainerClick,

...other }) => {

    const isLogue = getSongIsLogue(selectedSongIndex),

        overviewIndex = inOverviewSubfield ? overviewSongIndex : overviewLogueIndex,

        myChild = (
            <OverviewSection {...other}
                overviewIndex={overviewIndex}
            />
        )

    let isVisible

    // Switch between logue and song overview sections.
    if (isLogue) {
        isVisible = !inOverviewSubfield
    } else {
        isVisible = selectedOverviewIndex ? false : inOverviewSubfield
    }

    /**
     * Always hide overview section when title is open, or when tip is shown
     * in song. Always hide before ready to render.
     */
    if (!isHeavyRenderReady || selectedTitleIndex || (!isLogue && !selectedTipsIndex)) {
        isVisible = false
    }

    return (
        <Popup
            isVisible={isVisible}
            popupClassName="overview"
            handlePopupContainerClick={handlePopupContainerClick}
            myChild={myChild}
        />
    )
}

OverviewPopup.propTypes = overviewPopupPropTypes

export default connect(mapStateToProps)(OverviewPopup)
