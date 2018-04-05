// Popup container for wiki section.

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import WikiSection from './wiki-section'
import Popup from '../popup/popup'

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
            isVisible={isVisible}
            popupClassName="wiki"
            showClose={true}
            handleCloseClick={handleWikiToggle}
            myChild={myChild}
        />
    )
}

WikiPopup.propTypes = wikiPopupPropTypes

export default connect(mapStateToProps)(WikiPopup)
