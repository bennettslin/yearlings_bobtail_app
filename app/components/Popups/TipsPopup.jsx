// Popup container for title section.

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Tips from '../Tips/Tips'
import Popup from '../Popup/Popup'
import { getSongIsLogue } from '../../helpers/dataHelper'

const mapStateToProps = ({
    isRenderable,
    renderableSongIndex,
    selectedTipsIndex,
}) => ({
    isRenderable,
    renderableSongIndex,
    selectedTipsIndex,
})

const tipsPopupPropTypes = {
    // Through Redux.
    isRenderable: PropTypes.bool.isRequired,
    renderableSongIndex: PropTypes.number.isRequired,
    selectedTipsIndex: PropTypes.number.isRequired,

    // From parent.
    handlePopupContainerClick: PropTypes.func.isRequired
},

TipsPopup = ({

    isRenderable,
    renderableSongIndex,
    selectedTipsIndex,
    handlePopupContainerClick,

...other }) => {

    const isLogue = getSongIsLogue(renderableSongIndex),

        isVisible = isRenderable && !isLogue && !selectedTipsIndex

    return (
        <Popup
            isCardSize
            bounceAnimate
            hasNarrowPadding
            popupName="Tips"
            isVisible={isVisible}
            handlePopupContainerClick={handlePopupContainerClick}
        >
            <Tips {...other} />
        </Popup>
    )
}

TipsPopup.propTypes = tipsPopupPropTypes

export default connect(mapStateToProps)(TipsPopup)
