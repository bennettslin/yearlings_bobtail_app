// Popup container for about section.
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateIsAboutShown } from '../../../redux/toggle/action'
import About from '../../About'
import Popup from '../../Popup'
import './style'

const mapStateToProps = state => {
    const {
        toggleStore: { isAboutShown }
    } = state
    return {
        isAboutShown
    }
}

class AboutPopup extends PureComponent {

    static propTypes = {
    // Through Redux.
        isAboutShown: PropTypes.bool.isRequired,
        updateIsAboutShown: PropTypes.func.isRequired
    }

    _closeAbout = () => {
        this.props.updateIsAboutShown()
    }

    render() {
        const { isAboutShown } = this.props

        return (
            <Popup
                bounceAnimate
                displaysInOverlay
                isCardSize
                canBeFullHeight
                hasWidePadding
                {...{
                    popupName: 'AboutPopup',
                    isVisible: isAboutShown,
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
    { updateIsAboutShown }
)(AboutPopup)
