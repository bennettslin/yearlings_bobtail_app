// Component to touch change played time and verse.

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { connect } from 'react-redux'

import SliderTouchDispatcher from '../../dispatchers/SliderTouchDispatcher'
import SliderScenes from './Scenes'
import SliderStanzas from './Stanzas'
import SliderTimes from './Times'
import SliderAccess from './Access'

import { populateRefs } from 'helpers/ref'

const mapStateToProps = ({
    lyricStore: { canLyricCarouselEnter }
}) => ({
    canLyricCarouselEnter
})

class Slider extends PureComponent {

    static propTypes = {
        // Through Redux.
        canLyricCarouselEnter: PropTypes.bool.isRequired
    }

    _handleTouchDown = (e) => {
        logEvent(Slider.name, e)
        this.dispatchTouchBegin(e, this.sliderElement)
    }

    _getSliderElement = (node) => {
        this.sliderElement = node
    }

    _getRefs = (payload) => {
        populateRefs(this, payload)
    }

    render() {
        const { canLyricCarouselEnter } = this.props

        return (
            <div
                {...{
                    ref: this._getSliderElement,
                    className: cx(
                        'Slider',
                        canLyricCarouselEnter && 'Slider__visible'
                    ),
                    onMouseDown: this._handleTouchDown,
                    onTouchStart: this._handleTouchDown
                }}
            >
                <SliderScenes />
                <SliderTimes />
                <SliderStanzas />
                <SliderAccess />
                <SliderTouchDispatcher {...{ getRefs: this._getRefs }} />
            </div>
        )
    }
}

export default connect(mapStateToProps)(Slider)
