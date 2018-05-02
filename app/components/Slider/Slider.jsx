// Component to manually change played time and verse.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import omit from 'lodash.omit'

import SliderScenes from './SliderScenes'
import SliderStanzas from './Stanzas/SliderStanzas'

import SliderTimes from './Times/SliderTimes'
// import SliderVerses from './Verses/SliderVerses'

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
    children: PropTypes.element,
    handleTouchDown: PropTypes.func.isRequired
},

SliderView = ({

    myRef,
    children,
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
        {/* <SliderVerses /> */}
        <SliderScenes />
        <SliderAccess />

        {children}
    </div>
)

SliderView.propTypes = sliderViewPropTypes

export default Slider
