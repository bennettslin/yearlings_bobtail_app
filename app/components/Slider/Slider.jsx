// Component to manually change played time and verse.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import SliderAccess from './SliderAccess'
import SliderCursor from './SliderCursor'
import SliderScenes from './SliderScenes'
import SliderStanzas from './SliderStanzas'
import SliderVerses from './SliderVerses'
import SliderTimeBars from './SliderTimeBars'

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
            <SliderSectionView {...other}
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
    handleTouchDown: PropTypes.func.isRequired
},

SliderSectionView = ({

    handleTouchDown

}) => (
    <div
        className={cx(
            'slider-block'
        )}
    >
        <SliderStanzas />
        <SliderVerses />
        <SliderScenes />
        <SliderTimeBars />
        <SliderCursor />

        <SliderAccess />

        {/* Handle touch interactions. */}
        <div
            className={cx(
                'slider-bar',
                'slider-touch-bar'
            )}
            onMouseDown={handleTouchDown}
            onTouchStart={handleTouchDown}
        />
    </div>
)

SliderSectionView.propTypes = sliderViewPropTypes

export default Slider
