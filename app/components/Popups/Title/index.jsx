// Popup container for title section.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateToggleStore } from 'flux/toggle/action'

import TitleSection from '../../Title'
import Popup from '../../Popup'

const mapStateToProps = ({
    toggleStore: { isTitleShown }
}) => ({
    isTitleShown
})

class TitlePopup extends Component {

    static propTypes = {
    // Through Redux.
        isTitleShown: PropTypes.bool.isRequired
    }

    closeTitle = () => {
        this.props.updateToggleStore({ isTitleShown: false })
    }

    render() {

        const {
            isTitleShown
        } = this.props

        return (
            <Popup
                bounceAnimate
                displaysInOverlay
                isCardSize
                hasWidePadding
                {...{
                    popupName: 'Title',
                    isVisible: isTitleShown,
                    handleCloseClick: this.closeTitle
                }}
            >
                <TitleSection />
            </Popup>
        )
    }
}

const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
        updateToggleStore
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(TitlePopup)
