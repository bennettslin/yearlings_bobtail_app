// Popup container for title section.

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Tips from '../../Tips'
import Popup from '../../Popup'

import { SHOWN } from 'constants/options'

const mapStateToProps = ({
    renderedStore: { isRenderedLogue },
    optionStore: { selectedTipsOption }
}) => ({
    isRenderedLogue,
    selectedTipsOption
})

const tipsPopupPropTypes = {
    // Through Redux.
        isRenderedLogue: PropTypes.bool.isRequired,
        selectedTipsOption: PropTypes.string.isRequired
    },

    TipsPopup = ({
        isRenderedLogue,
        selectedTipsOption
    }) => {

        const isVisible =
            !isRenderedLogue &&
            selectedTipsOption === SHOWN

        return (
            <Popup
                isCardSize
                bounceAnimate
                hasNarrowPadding
                {...{
                    popupName: 'Tips',
                    isVisible
                }}
            >
                <Tips />
            </Popup>
        )
    }

TipsPopup.propTypes = tipsPopupPropTypes

export default connect(mapStateToProps)(TipsPopup)
