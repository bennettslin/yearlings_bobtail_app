// Popup container for title section.

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import TipsSection from '../Tips/tips-section'
import Popup from '../popup/popup'
import { getSongIsLogue } from '../../helpers/data-helper'

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

TipsPopup.propTypes = tipsPopupPropTypes

export default connect(mapStateToProps)(TipsPopup)
