// Component to manually change played time and verse.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import SliderScenes from './SliderScenes'
import SliderStanzas from './SliderStanzas'
import SliderVerses from './SliderVerses'
import SliderTimes from './SliderTimes'

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
    children: PropTypes.element,
    handleTouchDown: PropTypes.func.isRequired
},

SliderSectionView = ({

    children,
    handleTouchDown

}) => (
    <div
        className={cx(
            'Slider'
        )}
    >
        <SliderStanzas />
        <SliderVerses />
        <SliderScenes />
        <SliderTimes/>
        <SliderAccess />

        {children}

        {/* Handle touch interactions. */}
        <div
            className={cx(
                'SliderTouchBar',
                'absoluteFullContainer'
            )}
            onMouseDown={handleTouchDown}
            onTouchStart={handleTouchDown}
        />
    </div>
)

SliderSectionView.propTypes = sliderViewPropTypes

export default Slider
