// Toggle button to show and hide title section.

import React, { useRef } from 'react'
import cx from 'classnames'
import AboutDispatcher from '../../../dispatchers/About'
import Button from '../../Button'
import TipsHand from '../../Tips/Hand'
import { ABOUT_TOGGLE_KEY } from '../../../constants/access'
import { ABOUT_BUTTON_KEY } from '../../../constants/buttons'
import { ABOUT } from '../../../constants/tips'
import './style'

const AboutToggle = () => {
    const
        dispatchAbout = useRef(),
        handleButtonClick = () => {
            dispatchAbout.current()
        }

    return (
        <div className={cx(
            'AboutToggle'
        )}>
            <Button
                isCustomSize
                {...{
                    buttonName: ABOUT_BUTTON_KEY,
                    accessKey: ABOUT_TOGGLE_KEY,
                    handleButtonClick
                }}
            />
            <TipsHand {...{ tipType: ABOUT }} />
            <AboutDispatcher {...{ ref: dispatchAbout }} />
        </div>
    )
}

export default AboutToggle
