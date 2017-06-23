// Popup container for wiki section.

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import WikiSection from './wiki-section'
import Popup from '../popup/popup'

const WikiPopup = ({

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

WikiPopup.propTypes = {
    // Through Redux.
    selectedWikiIndex: PropTypes.number.isRequired,

    // From parent.
    handleWikiToggle: PropTypes.func.isRequired
}
export default connect(({
    selectedWikiIndex
}) => ({
    selectedWikiIndex
}))(WikiPopup)
