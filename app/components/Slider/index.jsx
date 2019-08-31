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

    constructor(props) {
        super(props)
        this.sliderElement = React.createRef()
    }

    _handleTouchDown = (e) => {
        logEvent('Slider', e)
        this.dispatchTouchBegin(e, this.sliderElement.current)
    }

    _getRefs = (payload) => {
        populateRefs(this, payload)
    }

    render() {
        const { canLyricCarouselEnter } = this.props

        return (
            <div
                {...{
                    ref: this.sliderElement,
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
