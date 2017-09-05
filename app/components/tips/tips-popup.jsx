// Popup container for title section.

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import TipsSection from './tips-section'
import Popup from '../popup/popup'

const TipsPopup = ({

    selectedTipsIndex,
    handlePopupContainerClick

}) => {
    const isVisible = !selectedTipsIndex,
        myChild = (
            <TipsSection />
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

    // From parent.
    handlePopupContainerClick: PropTypes.func.isRequired
}

export default connect(({
    selectedTipsIndex
}) => ({
    selectedTipsIndex
}))(TipsPopup)
