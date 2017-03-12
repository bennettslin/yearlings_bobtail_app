import React, { Component } from 'react'

class TransitionPopup extends Component {

    constructor(props) {
        super(props)

        this._handleTransitionEnd = this._handleTransitionEnd.bind(this)

        this.state = {
            isDisplayed: this.props.isVisible
        }
    }

    componentWillReceiveProps(nextProps) {
        /**
         * If now visible, it should now also be displayed, but if now
         * invisible, don't change to undisplayed just yet.
         */
        if (nextProps.isVisible && !this.props.isVisible) {
            this.setState({
                isDisplayed: true
            })
        }
    }

    _handleTransitionEnd(e) {
        if (e.propertyName === 'opacity' && !this.state.isVisible) {
            this.setState({
                isDisplayed: false
            })
        }
    }

    render() {
        const { popupClassName,
                isVisible,
                myChild } = this.props,

            { isDisplayed } = this.state,

            visibleClassName = isVisible ? 'visible' : '',
            displayClassName = isDisplayed ? 'displayed' : ''

        return (
            <div
                className={`transition-popup ${popupClassName} ${visibleClassName} ${displayClassName}`}
                onTransitionEnd={this._handleTransitionEnd}
            >
                {myChild}
            </div>
        )
    }
}

export default TransitionPopup
