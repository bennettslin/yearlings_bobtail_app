// Button to toggle dots slide.
import React, { useRef, memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import DotsSlideDispatcher from '../../../dispatchers/DotsSlide'
import Button from '../../Button'
import TipsHand from '../../Tips/Hand'
import { DOTS_SLIDE_TOGGLE_KEY } from '../../../constants/access'
import { DOTS_SLIDE_BUTTON_KEY } from '../../../constants/buttons'
import {
    DOTS,
    WORMHOLES,
    WIKI,
} from '../../../constants/tips'
import './style'

const DotsSlideToggle = ({ className }) => {
    const dispatchDotsSlide = useRef()

    const handleButtonClick = () => {
        dispatchDotsSlide.current()
    }

    return (
        <div
            {...{
                className: cx(
                    'DotsSlideToggle',
                    className,
                ),
            }}
        >
            <Button
                isLargeSize
                {...{
                    buttonName: DOTS_SLIDE_BUTTON_KEY,
                    accessKey: DOTS_SLIDE_TOGGLE_KEY,
                    handleButtonClick,
                }}
            />
            <TipsHand {...{ tipType: DOTS }} />
            <TipsHand isPointedAtDotsSlide {...{ tipType: WORMHOLES }} />
            <TipsHand isPointedAtDotsSlide {...{ tipType: WIKI }} />
            <DotsSlideDispatcher {...{ ref: dispatchDotsSlide }} />
        </div>
    )
}

DotsSlideToggle.propTypes = {
    className: PropTypes.string,
}

export default memo(DotsSlideToggle)
