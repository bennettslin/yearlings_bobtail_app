// Component to manually change played time and verse.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import SliderCursor from './slider-cursor'
import SliderStanzas from './slider-stanzas'
import SliderVerses from './slider-verses'
import SliderTimeBars from './slider-time-bars'

/*************
 * CONTAINER *
 *************/

class SliderSection extends Component {
    constructor(props) {
        super(props)
        this._handleTouchDown = this._handleTouchDown.bind(this)
    }

    _handleTouchDown(e) {
        this.props.handleSliderTouchBegin(e)
    }

    render() {
        return (
            <SliderSectionView
                handleTouchDown={this._handleTouchDown}
            />
        )
    }
}

SliderSection.propTypes = {
    // From parent.
    handleSliderTouchBegin: PropTypes.func.isRequired
}

/****************
 * PRESENTATION *
 ****************/

const SliderSectionView = ({

    handleTouchDown

}) => {

    return (
        <div
            className={classnames(
                'audio-banner',
                'slider-block'
            )}
        >
            <SliderStanzas />
            <SliderVerses />
            <SliderTimeBars />
            <SliderCursor />

            {/* Handle touch interactions. */}
            <div
                className={classnames(
                    'slider-bar',
                    'slider-touch-bar'
                )}
                onMouseDown={handleTouchDown}
                onTouchStart={handleTouchDown}
            >
            </div>
        </div>
    )
}

SliderSectionView.propTypes = {
    // From parent.
    handleTouchDown: PropTypes.func.isRequired
}

export default SliderSection
