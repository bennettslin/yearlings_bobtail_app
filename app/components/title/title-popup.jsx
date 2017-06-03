// Popup container for title section.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import TitleSection from './title-section'
import Popup from '../popup/popup'
import { getComponentShouldUpdate } from '../../helpers/general-helper'

class TitlePopup extends Component {

    shouldComponentUpdate(nextProps) {
        const { props } = this,
            componentShouldUpdate = getComponentShouldUpdate({
                props,
                nextProps,
                updatingPropsArray: [
                    'selectedTitleIndex'
                ]
            })

        return componentShouldUpdate
    }

    render() {
        const { selectedTitleIndex,
                handleTitleToggle,
                handlePopupFocus } = this.props,

            isVisible = !!selectedTitleIndex,
            myChild = (
                <TitleSection />
            )

        return (
            <Popup
                isVisible={isVisible}
                popupClassName="title"
                showClose={true}
                handlePopupFocus={handlePopupFocus}
                handleCloseClick={handleTitleToggle}
                myChild={myChild}
            />
        )
    }
}

TitlePopup.propTypes = {
    // Through Redux.
    selectedTitleIndex: PropTypes.number.isRequired,

    // From parent.
    handleTitleToggle: PropTypes.func.isRequired,
    handlePopupFocus: PropTypes.func.isRequired
}

export default connect(({
    selectedTitleIndex
}) => ({
    selectedTitleIndex
}))(TitlePopup)
