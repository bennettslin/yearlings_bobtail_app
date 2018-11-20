// Popup container for title section.

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import TitleSection from '../../Title'
import Popup from '../../Popup'

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

    return (
        <Popup
            bounceAnimate
            displaysInOverlay
            isCardSize
            hasWidePadding
            {...{
                popupName: 'Title',
                isVisible: Boolean(selectedTitleIndex),
                handleCloseClick: handleTitleToggle,
                handlePopupContainerClick
            }}
        >
            <TitleSection />
        </Popup>
    )
}

TitlePopup.propTypes = titlePopupPropTypes

export default connect(mapStateToProps)(TitlePopup)
