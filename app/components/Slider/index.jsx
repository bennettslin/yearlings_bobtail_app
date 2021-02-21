// Component to touch change played time and verse.
import React, { useRef } from 'react'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import SliderTouchDispatcher from '../../dispatchers/SliderTouch'
import SliderStanzas from './Stanzas'
import SliderTimes from './Times'
import AccessDirectionLetter from '../Access/DirectionLetter'
import TipsHand from '../Tips/Hand'
import { mapIsSongChangeDone } from '../../redux/entrance/selector'
import {
    PREVIOUS_VERSE_KEY,
    NEXT_VERSE_KEY,
} from '../../constants/access'
import { SLIDER } from '../../constants/tips'
import './style'

const Slider = () => {
    const
        dispatchSliderTouch = useRef(),
        sliderElement = useRef(),
        isSongChangeDone = useSelector(mapIsSongChangeDone)

    const onTouchStart = e => {
        logEvent('Slider')
        dispatchSliderTouch.current.begin(e, sliderElement.current)
    }

    return (
        <div
            {...{
                ref: sliderElement,
                className: cx(
                    'Slider',
                    isSongChangeDone && 'Slider__visible',
                    'Rancho'
                ),
                onMouseDown: onTouchStart,
                onTouchStart,
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
            <SliderTouchDispatcher {...{ ref: dispatchSliderTouch }} />
        </div>
    )
}

export default Slider
