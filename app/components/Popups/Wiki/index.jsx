// Popup container for wiki section.

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Wiki from '../../Wiki'
import Popup from '../../Popup'

const mapStateToProps = ({
    sessionStore: { selectedWikiIndex }
}) => ({
    selectedWikiIndex
})

const wikiPopupPropTypes = {
    // Through Redux.
        selectedWikiIndex: PropTypes.number.isRequired,

        // From parent.
        handleWikiToggle: PropTypes.func.isRequired
    },

    WikiPopup = ({
    /* eslint-disable no-unused-vars */
        dispatch,
        /* eslint-enable no-unused-vars */

        selectedWikiIndex,
        handleWikiToggle,

        ...other
    }) => {

        const isVisible = Boolean(selectedWikiIndex)

        return (
            <Popup
                shrinkAnimate
                displaysInOverlay
                isFullSize
                isVisible={isVisible}
                popupName="Wiki"
                handleCloseClick={handleWikiToggle}
            >
                <Wiki {...other} />
            </Popup>
        )
    }

WikiPopup.propTypes = wikiPopupPropTypes

export default connect(mapStateToProps)(WikiPopup)
