import React from 'react'
import cx from 'classnames'
import { useDispatch } from 'react-redux'
import Button from '../../Button'
import TipsHand from '../../Tips/Hand'
import { toggleIsAboutShown } from '../../../redux/toggle/action'
import { ABOUT_TOGGLE_KEY } from '../../../constants/access'
import { ABOUT_BUTTON_KEY } from '../../../constants/buttons'
import { ABOUT } from '../../../constants/tips'
import './style'

const AboutToggle = () => {
    const dispatch = useDispatch()

    const handleButtonClick = () => {
        dispatch(toggleIsAboutShown())
    }

    return (
        <div className={cx(
            'AboutToggle',
        )}>
            <Button
                isCustomSize
                {...{
                    buttonName: ABOUT_BUTTON_KEY,
                    accessKey: ABOUT_TOGGLE_KEY,
                    handleButtonClick,
                }}
            />
            <TipsHand {...{ tipType: ABOUT }} />
        </div>
    )
}

export default AboutToggle
