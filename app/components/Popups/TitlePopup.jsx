// Popup container for title section.

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import TitleSection from '../Title/Title'
import Popup from '../Popup/Popup'

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
    const isVisible = !!selectedTitleIndex,
        myChild = (
            <TitleSection />
        )

    return (
        <Popup
            showClose
            bounceAnimate
            displaysInOverlay
            isCardSize
            isVisible={isVisible}
            popupName="title"
            handleCloseClick={handleTitleToggle}
            handlePopupContainerClick={handlePopupContainerClick}
            myChild={myChild}
        />
    )
}

TitlePopup.propTypes = titlePopupPropTypes

export default connect(mapStateToProps)(TitlePopup)
