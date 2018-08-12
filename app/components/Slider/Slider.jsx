// Component to manually change played time and verse.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import SliderScenes from './SliderScenes'
import SliderStanzas from './Stanzas/SliderStanzas'
import SliderTimes from './Times/SliderTimes'
import SliderAccess from './SliderAccess'

const mapStateToProps = ({
    canSliderRender
}) => ({
    canSliderRender
})

class Slider extends Component {

    static propTypes = {
        // Through Redux.
        canSliderRender: PropTypes.bool.isRequired,

        // From parent.
        handleSliderTouchBegin: PropTypes.func.isRequired,
        sliderDidRender: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props)

        this.state = {
            isShown: false,
            waitForShowTimeoutId: '',
            didRenderTimeoutId: ''
        }

        this._handleTouchDown = this._handleTouchDown.bind(this)
        this._waitForShowBeforeRender = this._waitForShowBeforeRender.bind(this)
        this._setSliderRef = this._setSliderRef.bind(this)
    }

    componentDidUpdate(prevProps) {
        const { canSliderRender } = this.props,
            { canSliderRender: couldRender } = prevProps

        if (canSliderRender && !couldRender) {
            logger.warn('Slider rendered.')

            clearTimeout(this.state.waitForShowTimeoutId)
            clearTimeout(this.state.didRenderTimeoutId)

            const
                // Set timeout to prevent children transitions before render.
                waitForShowTimeoutId = setTimeout(
                    this._waitForShowBeforeRender, 50
                ),
                // Wait for parent transition before continuing render sequence.
                didRenderTimeoutId = setTimeout(
                    this.props.sliderDidRender, 100
                )

            this.setState({
                waitForShowTimeoutId,
                didRenderTimeoutId
            })

        } else if (couldRender && !canSliderRender) {

            this.setState({
                isShown: false
            })
        }
    }

    _waitForShowBeforeRender() {
        this.setState({
            isShown: true
        })
    }

    _handleTouchDown(e) {
        this.props.handleSliderTouchBegin(e, this.slider)
    }

    _setSliderRef(node) {
        this.slider = node
    }

    render() {
        const { canSliderRender } = this.props,
            { isShown } = this.state

        return (
            <div
                ref={this._setSliderRef}
                className={cx(
                    'Slider',
                    {
                        'parentIsShown': canSliderRender && isShown
                    }
                )}
                onMouseDown={this._handleTouchDown}
                onTouchStart={this._handleTouchDown}
            >
                <SliderTimes />
                <SliderStanzas />
                <SliderScenes />
                <SliderAccess />
            </div>
        )
    }
}

export default connect(mapStateToProps)(Slider)
