// Popup container for wiki section.

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import WikiSection from '../Wiki/Wiki'
import Popup from '../Popup/Popup'

const mapStateToProps = ({
    selectedWikiIndex
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

    selectedWikiIndex,
    handleWikiToggle,

...other }) => {

    const isVisible = !!selectedWikiIndex,
        myChild = (
            <WikiSection {...other} />
        )

    return (
        <Popup
            showClose
            shrinkAnimate
            displaysInOverlay
            isFullSize
            isVisible={isVisible}
            popupName="wiki"
            handleCloseClick={handleWikiToggle}
            myChild={myChild}
        />
    )
}

WikiPopup.propTypes = wikiPopupPropTypes

export default connect(mapStateToProps)(WikiPopup)
