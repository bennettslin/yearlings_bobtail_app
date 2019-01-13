// Popup container for about section.

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateToggleStore } from 'flux/toggle/action'

import About from '../../About'
import Popup from '../../Popup'

const mapStateToProps = ({
    toggleStore: { isAboutShown }
}) => ({
    isAboutShown
})

class AboutPopup extends PureComponent {

    static propTypes = {
    // Through Redux.
        isAboutShown: PropTypes.bool.isRequired,
        updateToggleStore: PropTypes.func.isRequired
    }

    _closeAbout = () => {
        this.props.updateToggleStore({ isAboutShown: false })
    }

    render() {
        return (
            <Popup
                doMountonEnter
                doUnmountOnExit
                bounceAnimate
                displaysInOverlay
                isCardSize
                hasWidePadding
                {...{
                    popupName: 'About',
                    isVisible: this.props.isAboutShown,
                    handleCloseClick: this._closeAbout
                }}
            >
                <About />
            </Popup>
        )
    }
}

export default connect(
    mapStateToProps,
    { updateToggleStore }
)(AboutPopup)
