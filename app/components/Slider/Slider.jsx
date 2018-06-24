// Component to manually change played time and verse.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import SliderScenes from './SliderScenes'
import SliderStanzas from './Stanzas/SliderStanzas'
import SliderTimes from './Times/SliderTimes'
import SliderAccess from './SliderAccess'

/*************
 * CONTAINER *
 *************/

class Slider extends Component {

    static propTypes = {
        // From parent.
        handleSliderTouchBegin: PropTypes.func.isRequired,

        canSliderRender: PropTypes.bool.isRequired,
        sliderDidRender: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props)

        this._handleTouchDown = this._handleTouchDown.bind(this)
    }

    componentDidUpdate(prevProps) {
        if (this.props.canSliderRender && !prevProps.canSliderRender) {
            console.warn('Slider rendered.')

            setTimeout(
                this.props.sliderDidRender, 0
            )
        }
    }

    shouldComponentUpdate(nextProps) {
        console.error('nextProps', nextProps.canSliderRender)
        return nextProps.canSliderRender !== this.props.canSliderRender
    }

    _handleTouchDown(e) {
        this.props.handleSliderTouchBegin(e, this.mySlider)
    }

    render() {

        const { canSliderRender } = this.props

        console.error('canSliderRender', canSliderRender)

        return canSliderRender ? (
            <div
                className={cx(
                    'Slider'
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
        ) : null
    }
}

export default Slider
