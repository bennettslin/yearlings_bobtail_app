// Popup container for overview section.

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import OverviewSection from './overview-section'
import Popup from '../popup/popup'
import { getSongIsLogue } from '../../helpers/data-helper'

const OverviewPopup = ({

    inOverviewSubfield,
    overviewLogueIndex,
    overviewSongIndex,
    selectedOverviewIndex,
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

    // Always hide overview section when tips or title is open.
    if (!selectedTipsIndex || selectedTitleIndex) {
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

OverviewPopup.propTypes = {
    // Through Redux.
    overviewLogueIndex: PropTypes.number.isRequired,
    overviewSongIndex: PropTypes.number.isRequired,
    selectedOverviewIndex: PropTypes.number.isRequired,
    selectedSongIndex: PropTypes.number.isRequired,
    selectedTipsIndex: PropTypes.number.isRequired,
    selectedTitleIndex: PropTypes.number.isRequired,

    // From parent.
    inOverviewSubfield: PropTypes.bool.isRequired,
    handlePopupContainerClick: PropTypes.func.isRequired
}

export default connect(({
    selectedOverviewIndex,
    selectedSongIndex,
    selectedTitleIndex,
    selectedTipsIndex,
    overviewLogueIndex,
    overviewSongIndex
}) => ({
    selectedOverviewIndex,
    selectedSongIndex,
    selectedTitleIndex,
    selectedTipsIndex,
    overviewLogueIndex,
    overviewSongIndex
}))(OverviewPopup)
