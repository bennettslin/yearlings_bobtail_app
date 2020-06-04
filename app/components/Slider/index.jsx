// Component to touch change played time and verse.
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { connect } from 'react-redux'
import SliderTouchDispatcher from '../../dispatchers/SliderTouchDispatcher'
import SliderStanzas from './Stanzas'
import SliderTimes from './Times'
import AccessDirectionLetter from '../Access/DirectionLetter'
import TipsHand from '../Tips/Hand'
import {
    PREVIOUS_VERSE_KEY,
    NEXT_VERSE_KEY
} from '../../constants/access'
import { SLIDER } from '../../constants/tips'
import './style'

const mapStateToProps = state => {
    const {
        entranceStore: { canLyricCarouselEnter }
    } = state

    return {
        canLyricCarouselEnter
    }
}

class Slider extends PureComponent {

    static propTypes = {
        // Through Redux.
        canLyricCarouselEnter: PropTypes.bool.isRequired
    }

    constructor(props) {
        super(props)
        this.sliderElement = React.createRef()
    }

    _handleTouchDown = e => {
        logEvent({ e, componentName: 'Slider' })
        this.dispatchTouchBegin(e, this.sliderElement.current)
    }

    getDispatchSliderTouch = dispatch => {
        if (dispatch) {
            this.dispatchTouchBegin = dispatch.dispatchTouchBegin
        }
    }

    render() {
        const { canLyricCarouselEnter } = this.props

        return (
            <div
                {...{
                    ref: this.sliderElement,
                    className: cx(
                        'Slider',
                        canLyricCarouselEnter && 'Slider__visible',
                        'Rancho'
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
                <TipsHand reverse {...{ tipType: SLIDER }} />
                <SliderTouchDispatcher {...{ ref: this.getDispatchSliderTouch }} />
            </div>
        )
    }
}

export default connect(mapStateToProps)(Slider)
