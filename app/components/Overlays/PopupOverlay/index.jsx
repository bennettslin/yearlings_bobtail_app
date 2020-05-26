import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import CSSTransition from 'react-transition-group/CSSTransition'
import './style'

const mapStateToProps = ({
    transientStore: { isOverlayShown }
}) => ({
    isOverlayShown
})

const propTypes = {
    // Through Redux.
    isOverlayShown: PropTypes.bool.isRequired
}

const PopupOverlay = ({
    isOverlayShown

}) => (
    <CSSTransition
        mountOnEnter
        unmountOnExit
        {...{
            in: isOverlayShown,
            timeout: 200,
            classNames: {
                enterActive: 'PopupOverlay__shown',
                enterDone: 'PopupOverlay__shown'
            }
        }}
    >
        <div className="PopupOverlay" />
    </CSSTransition>
)

PopupOverlay.propTypes = propTypes

export default connect(mapStateToProps)(PopupOverlay)
