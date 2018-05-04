// Component to manually change played time and verse.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import omit from 'lodash.omit'

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

    _handleTouchDown(e) {
        this.props.handleSliderTouchBegin(e, this.mySlider)
    }

    render() {
        const other = omit(this.props, 'handleSliderTouchBegin')

        return (
            <SliderView {...other}
                myRef={(node) => (this.mySlider = node)}
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
    myRef: PropTypes.func.isRequired,
    handleTouchDown: PropTypes.func.isRequired
},

SliderView = ({

    myRef,
    handleTouchDown

}) => (
    <div
        className={cx(
            'Slider'
        )}
        ref={myRef}
        onMouseDown={handleTouchDown}
        onTouchStart={handleTouchDown}
    >
        <SliderTimes/>
        <SliderStanzas />
        <SliderScenes />
        <SliderAccess />
    </div>
)

SliderView.propTypes = sliderViewPropTypes

export default Slider
