// Popup container for title section.

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import TitleSection from './title-section'
import Popup from '../popup/popup'

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
            isVisible={isVisible}
            popupClassName="title"
            showClose={true}
            handleCloseClick={handleTitleToggle}
            handlePopupContainerClick={handlePopupContainerClick}
            myChild={myChild}
        />
    )
}

TitlePopup.propTypes = titlePopupPropTypes

export default connect(mapStateToProps)(TitlePopup)
