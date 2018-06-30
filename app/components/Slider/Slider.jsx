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
            didRenderTimeoutId: ''
        }

        this._handleTouchDown = this._handleTouchDown.bind(this)
        this._waitForShowBeforeRender = this._waitForShowBeforeRender.bind(this)
    }

    componentDidUpdate(prevProps) {
        const { canSliderRender } = this.props,
            { canSliderRender: couldRender } = prevProps

        if (canSliderRender && !couldRender) {
            console.warn('Slider rendered.')

            // Set timeout to prevent children transitions before render.
            setTimeout(this._waitForShowBeforeRender, 50)

            clearTimeout(this.state.didRenderTimeoutId)

            // Wait for parent to transition before continuing render sequence.
            const didRenderTimeoutId = setTimeout(
                this.props.sliderDidRender, 100
            )

            this.setState({
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
        this.props.handleSliderTouchBegin(e, this.mySlider)
    }

    render() {
        const { canSliderRender } = this.props,
            { isShown } = this.state

        return (
            <div
                className={cx(
                    'Slider',
                    {
                        'parentIsShown': canSliderRender && isShown
                    }
                )}
                ref={(node) => (this.mySlider = node)}
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
