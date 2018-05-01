// Component to manually change played time and verse.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import SliderScenes from './SliderScenes'
import SliderStanzas from './SliderStanzas'

import SliderTimes from './Times/SliderTimes'
import SliderVerses from './Verses/SliderVerses'

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

    _handleTouchDown(e) {
        this.props.handleSliderTouchBegin(e)
    }

    render() {
        /* eslint-disable no-unused-vars */
        const { handleSliderTouchBegin,
            ...other } = this.props
        /* eslint-enable no-unused-vars */

        return (
            <SliderView {...other}
                handleTouchDown={this._handleTouchDown}
            />
        )
    }
}

/****************
 * PRESENTATION *
 ****************/

const sliderViewPropTypes = {

    // From parent.
    children: PropTypes.element,
    handleTouchDown: PropTypes.func.isRequired
},

SliderView = ({

    children,
    handleTouchDown

}) => (
    <div
        className={cx(
            'Slider'
        )}
        onMouseDown={handleTouchDown}
        onTouchStart={handleTouchDown}
    >
        <SliderTimes/>
        <SliderStanzas />
        <SliderVerses />
        <SliderScenes />
        <SliderAccess />

        {children}
    </div>
)

SliderView.propTypes = sliderViewPropTypes

export default Slider
