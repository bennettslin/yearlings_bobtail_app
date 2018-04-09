// Popup container for title section.

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Tips from '../Tips/Tips'
import Popup from '../Popup/Popup'
import { getSongIsLogue } from '../../helpers/dataHelper'

const mapStateToProps = ({
    isHeavyRenderReady,
    renderReadySongIndex,
    selectedTipsIndex,
}) => ({
    isHeavyRenderReady,
    renderReadySongIndex,
    selectedTipsIndex,
})

const tipsPopupPropTypes = {
    // Through Redux.
    isHeavyRenderReady: PropTypes.bool.isRequired,
    renderReadySongIndex: PropTypes.number.isRequired,
    selectedTipsIndex: PropTypes.number.isRequired,

    // From parent.
    handlePopupContainerClick: PropTypes.func.isRequired
},

TipsPopup = ({

    isHeavyRenderReady,
    renderReadySongIndex,
    selectedTipsIndex,
    handlePopupContainerClick,

...other }) => {

    const isLogue = getSongIsLogue(renderReadySongIndex),

        isVisible = isHeavyRenderReady && !isLogue && !selectedTipsIndex,

        myChild = (
            <Tips {...other} />
        )

    return (
        <Popup
            bounceAnimate
            isCardSize
            popupName="tips"
            isVisible={isVisible}
            handlePopupContainerClick={handlePopupContainerClick}
            myChild={myChild}
        />
    )
}

TipsPopup.propTypes = tipsPopupPropTypes

export default connect(mapStateToProps)(TipsPopup)
