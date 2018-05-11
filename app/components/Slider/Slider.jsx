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
        handleSliderTouchBegin: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props)

        this._handleTouchDown = this._handleTouchDown.bind(this)
    }

    shouldComponentUpdate() {
        return false
    }

    _handleTouchDown(e) {
        this.props.handleSliderTouchBegin(e, this.mySlider)
    }

    render() {

        return (
            <div
                className={cx(
                    'Slider'
                )}
                ref={(node) => (this.mySlider = node)}
                onMouseDown={this._handleTouchDown}
                onTouchStart={this._handleTouchDown}
            >
                <SliderTimes/>
                <SliderStanzas />
                <SliderScenes />
                <SliderAccess />
            </div>
        )
    }
}

export default Slider
