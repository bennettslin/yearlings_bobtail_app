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
    renderStore: { canVerseRender }
}) => ({
    canVerseRender
})

class Slider extends Component {

    static propTypes = {
        // Through Redux.
        canVerseRender: PropTypes.bool.isRequired,

        // From parent.
        handleSliderTouchBegin: PropTypes.func.isRequired,
        sliderDidRender: PropTypes.func.isRequired
    }

    state = {
        isShown: false,
        waitForShowTimeoutId: '',
        didRenderTimeoutId: ''
    }

    componentDidUpdate(prevProps) {
        const { canVerseRender } = this.props,
            { canVerseRender: couldRender } = prevProps

        if (canVerseRender && !couldRender) {
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

        } else if (couldRender && !canVerseRender) {

            this.setState({
                isShown: false
            })
        }
    }

    _waitForShowBeforeRender = () => {
        this.setState({
            isShown: true
        })
    }

    _handleTouchDown = (e) => {
        this.props.handleSliderTouchBegin(e, this.slider)
    }

    _setSliderRef = (node) => {
        this.slider = node
    }

    render() {
        const { canVerseRender } = this.props,
            { isShown } = this.state

        return (
            <div
                ref={this._setSliderRef}
                className={cx(
                    'Slider',
                    {
                        'parentIsShown': canVerseRender && isShown
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
