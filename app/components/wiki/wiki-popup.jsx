// Popup container for wiki section.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import WikiSection from './wiki-section'
import Popup from '../popup/popup'
import { getComponentShouldUpdate } from '../../helpers/general-helper'

// Pass Redux state into component props.
const passReduxStateToProps = ({
    selectedWikiIndex
}) => ({
    selectedWikiIndex
})

class WikiPopup extends Component {

    shouldComponentUpdate(nextProps) {
        const { props } = this,
            componentShouldUpdate = getComponentShouldUpdate({
                props,
                nextProps,
                updatingPropsArray: [
                    'selectedWikiIndex'
                ]
            })

        return componentShouldUpdate
    }

    render() {
        const { selectedWikiIndex,
                handleWikiToggle,
                handlePopupFocus,
                ...other } = this.props,

            isVisible = !!selectedWikiIndex,
            myChild = (
                <WikiSection {...other} />
            )

        return (
            <Popup
                isVisible={isVisible}
                popupClassName="wiki"
                showClose={true}
                handlePopupFocus={handlePopupFocus}
                handleCloseClick={handleWikiToggle}
                myChild={myChild}
            />
        )
    }
}

WikiPopup.propTypes = {
    // Through Redux.
    selectedWikiIndex: PropTypes.number.isRequired,

    // From parent.
    handleWikiToggle: PropTypes.func.isRequired,
    handlePopupFocus: PropTypes.func.isRequired,
}
export default connect(passReduxStateToProps)(WikiPopup)
