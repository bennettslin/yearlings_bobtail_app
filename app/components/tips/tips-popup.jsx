// Popup container for title section.

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import TipsSection from './tips-section'
import Popup from '../popup/popup'

const TipsPopup = ({

    selectedTipsIndex,
    selectedTitleIndex,
    handlePopupContainerClick,

...other }) => {
    const isVisible = !selectedTipsIndex && !selectedTitleIndex,
        myChild = (
            <TipsSection {...other} />
        )

    return (
        <Popup
            isVisible={isVisible}
            popupClassName="tips"
            handlePopupContainerClick={handlePopupContainerClick}
            myChild={myChild}
        />
    )
}

TipsPopup.propTypes = {
    // Through Redux.
    selectedTipsIndex: PropTypes.number.isRequired,
    selectedTitleIndex: PropTypes.number.isRequired,

    // From parent.
    handlePopupContainerClick: PropTypes.func.isRequired
}

export default connect(({
    selectedTipsIndex,
    selectedTitleIndex
}) => ({
    selectedTipsIndex,
    selectedTitleIndex
}))(TipsPopup)
