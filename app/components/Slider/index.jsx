// Component to touch change played time and verse.

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { connect } from 'react-redux'

import SliderTouchDispatcher from '../../dispatchers/SliderTouchDispatcher'
import SliderStanzas from './Stanzas'
import SliderTimes from './Times'
import AccessDirectionLetter from '../Access/DirectionLetter'

import { populateRefs } from 'helpers/ref'

import {
    PREVIOUS_VERSE_KEY,
    NEXT_VERSE_KEY
} from 'constants/access'

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
                <SliderTimes />
                <SliderStanzas />
                <AccessDirectionLetter
                    alignTop
                    {...{ accessKey: PREVIOUS_VERSE_KEY }}
                />
                <AccessDirectionLetter
                    alignTop
                    isNext
                    {...{ accessKey: NEXT_VERSE_KEY }}
                />
                <SliderTouchDispatcher {...{ getRefs: this._getRefs }} />
            </div>
        )
    }
}

export default connect(mapStateToProps)(Slider)
