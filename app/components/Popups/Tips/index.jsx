// Popup container for title section.

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Tips from '../../Tips'
import Popup from '../../Popup'

const mapStateToProps = ({
    renderStore: { canMainRender },
    renderedStore: { isRenderedLogue },
    sessionStore: { selectedTipsIndex }
}) => ({
    canMainRender,
    isRenderedLogue,
    selectedTipsIndex
})

const tipsPopupPropTypes = {
    // Through Redux.
        canMainRender: PropTypes.bool.isRequired,
        isRenderedLogue: PropTypes.bool.isRequired,
        selectedTipsIndex: PropTypes.number.isRequired
    },

    TipsPopup = ({
    /* eslint-disable no-unused-vars */
        dispatch,
        /* eslint-enable no-unused-vars */

        canMainRender,
        isRenderedLogue,
        selectedTipsIndex,

        ...other
    }) => {

        const isVisible = canMainRender && !isRenderedLogue && !selectedTipsIndex

        return (
            <Popup
                isCardSize
                bounceAnimate
                hasNarrowPadding
                popupName="Tips"
                isVisible={isVisible}
            >
                <Tips {...other} />
            </Popup>
        )
    }

TipsPopup.propTypes = tipsPopupPropTypes

export default connect(mapStateToProps)(TipsPopup)
