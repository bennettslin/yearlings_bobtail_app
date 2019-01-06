// Popup container for title section.

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateToggleStore } from 'flux/toggle/action'

import TitleSection from '../../Title'
import Popup from '../../Popup'

const mapStateToProps = ({
    toggleStore: { isTitleShown }
}) => ({
    isTitleShown
})

class TitlePopup extends PureComponent {

    static propTypes = {
    // Through Redux.
        isTitleShown: PropTypes.bool.isRequired,
        updateToggleStore: PropTypes.func.isRequired
    }

    closeTitle = () => {
        this.props.updateToggleStore({ isTitleShown: false })
    }

    render() {
        return (
            <Popup
                doUnmount
                bounceAnimate
                displaysInOverlay
                isCardSize
                hasWidePadding
                {...{
                    popupName: 'Title',
                    isVisible: this.props.isTitleShown,
                    handleCloseClick: this.closeTitle
                }}
            >
                <TitleSection />
            </Popup>
        )
    }
}

export default connect(
    mapStateToProps,
    { updateToggleStore }
)(TitlePopup)
