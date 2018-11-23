/**
 * Parent component that handles click, touch, and keyDown events.
 */

import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import RootContainer from '../RootContainer'

import KeyHandler from 'handlers/KeyHandler'
import AccessStylesheet from '../../components/Access/Stylesheet'

class InteractiveContainer extends PureComponent {

    static propTypes = {
        // Through Redux.
        appMounted: PropTypes.bool.isRequired,
        isSliderTouched: PropTypes.bool.isRequired,

        // From parent.
        eventHandlers: PropTypes.shape({
            handleBodyClick: PropTypes.func.isRequired,
            handleBodyTouchMove: PropTypes.func.isRequired,
            handleBodyTouchEnd: PropTypes.func.isRequired,
            setRootRef: PropTypes.func.isRequired
        })
    }

    state = {
        sliderMousedUp: false
    }

    componentDidUpdate(prevProps) {
        const
            { isSliderTouched } = this.props,
            { isSliderTouched: wasSliderTouched } = prevProps

        // This prevents a click event from registering after mouseUp.
        if (!isSliderTouched && wasSliderTouched) {

            // Let click handler get called first, then reset state.
            setTimeout(this._resetSliderMousedUp, 0)
        }
    }

    _resetSliderMousedUp = () => {
        this.setState({
            sliderMousedUp: false
        })
    }

    _handleMouseUp = (e) => {
        const { handleBodyTouchEnd } = this.props.eventHandlers
        handleBodyTouchEnd(e)

        if (this.props.isSliderTouched) {
            this.setState({
                sliderMousedUp: true
            })

        }
    }

    _handleClick = (e) => {
        const { handleBodyClick } = this.props.eventHandlers

        /**
         * Don't register the click event that happens after mouseUp if we're
         * lifting up from moving the slider.
         */
        if (!this.state.sliderMousedUp) {
            handleBodyClick(e)
        }
    }

    handleKeyDownPress = (e) => {
        this.keyHandler.handleKeyDownPress(e)
    }

    handleKeyUpPress = (e) => {
        this.keyHandler.handleKeyUpPress(e)
    }

    _setKeyHandlerRef = (node) => {
        this.keyHandler = node
    }

    render() {
        const {
                appMounted,
                eventHandlers
            } = this.props,

            {
                handleBodyTouchMove,
                setRootRef,
                ...other
            } = eventHandlers

        return appMounted && (
            <div
                ref={setRootRef}
                {...{
                    className: 'InteractiveContainer',
                    onClick: this._handleClick,
                    onTouchStart: this._handleClick,
                    onMouseMove: handleBodyTouchMove,
                    onTouchMove: handleBodyTouchMove,
                    onMouseUp: this._handleMouseUp,
                    onMouseLeave: this._handleMouseUp,
                    onTouchEnd: this._handleMouseUp,
                    onTouchCancel: this._handleMouseUp,
                    onKeyDown: this.handleKeyDownPress,
                    onKeyUp: this.handleKeyUpPress,
                    tabIndex: -1
                }}
            >
                <AccessStylesheet />
                <KeyHandler
                    {...{
                        // TODO: Eventually get rid of eventHandlers object.
                        eventHandlers: other,
                        setRef: this._setKeyHandlerRef
                    }}
                />

                <RootContainer
                    {...{
                        // TODO: Eventually get rid of eventHandlers object.
                        eventHandlers: other
                    }}
                />
            </div>
        )
    }
}

const mapStateToProps = ({
    appMounted,
    sliderStore: { isSliderTouched }
}) => ({
    appMounted,
    isSliderTouched
})

export default connect(mapStateToProps)(InteractiveContainer)
