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
    selectedTitleIndex
}) => ({
    isHeavyRenderReady,
    renderReadySongIndex,
    selectedTipsIndex,
    selectedTitleIndex
})

const tipsPopupPropTypes = {
    // Through Redux.
    isHeavyRenderReady: PropTypes.bool.isRequired,
    renderReadySongIndex: PropTypes.number.isRequired,
    selectedTipsIndex: PropTypes.number.isRequired,
    selectedTitleIndex: PropTypes.number.isRequired,

    // From parent.
    handlePopupContainerClick: PropTypes.func.isRequired
},

TipsPopup = ({

    isHeavyRenderReady,
    renderReadySongIndex,
    selectedTipsIndex,
    selectedTitleIndex,
    handlePopupContainerClick,

...other }) => {

    const isLogue = getSongIsLogue(renderReadySongIndex),

        isVisible = isHeavyRenderReady && !isLogue && !selectedTipsIndex && !selectedTitleIndex,

        myChild = (
            <Tips {...other} />
        )

    return (
        <Popup
            bounceAnimate
            popupName="tips"
            isVisible={isVisible}
            handlePopupContainerClick={handlePopupContainerClick}
            myChild={myChild}
        />
    )
}

TipsPopup.propTypes = tipsPopupPropTypes

export default connect(mapStateToProps)(TipsPopup)
