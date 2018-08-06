// Popup container for title section.

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import TitleSection from 'components/Title/Title'
import Popup from 'components/Popup/Popup'

const mapStateToProps = ({
    selectedTitleIndex
}) => ({
    selectedTitleIndex
})

const titlePopupPropTypes = {
    // Through Redux.
    selectedTitleIndex: PropTypes.number.isRequired,

    // From parent.
    handleTitleToggle: PropTypes.func.isRequired,
    handlePopupContainerClick: PropTypes.func.isRequired
},

TitlePopup = ({

    selectedTitleIndex,
    handleTitleToggle,
    handlePopupContainerClick

}) => {
    const isVisible = Boolean(selectedTitleIndex)
    return (
        <Popup
            bounceAnimate
            displaysInOverlay
            isCardSize
            hasWidePadding
            isVisible={isVisible}
            popupName="Title"
            handleCloseClick={handleTitleToggle}
            handlePopupContainerClick={handlePopupContainerClick}
        >
            <TitleSection />
        </Popup>
    )
}

TitlePopup.propTypes = titlePopupPropTypes

export default connect(mapStateToProps)(TitlePopup)
