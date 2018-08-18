// Popup container for title section.

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Tips from 'components/Tips/Tips'
import Popup from 'components/Popup/Popup'
import { getSongIsLogue } from 'helpers/dataHelper'

const mapStateToProps = ({
    renderStore: { canMainRender },
    renderedStore: { renderedSongIndex },
    selectedTipsIndex
}) => ({
    canMainRender,
    renderedSongIndex,
    selectedTipsIndex
})

const tipsPopupPropTypes = {
    // Through Redux.
    canMainRender: PropTypes.bool.isRequired,
    renderedSongIndex: PropTypes.number.isRequired,
    selectedTipsIndex: PropTypes.number.isRequired,

    // From parent.
    handlePopupContainerClick: PropTypes.func.isRequired
},

TipsPopup = ({
    /* eslint-disable no-unused-vars */
    dispatch,
    /* eslint-enable no-unused-vars */

    canMainRender,
    renderedSongIndex,
    selectedTipsIndex,
    handlePopupContainerClick,

...other }) => {

    const isLogue = getSongIsLogue(renderedSongIndex),

        isVisible = canMainRender && !isLogue && !selectedTipsIndex

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
