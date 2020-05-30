// Toggle button to show, hide, and disable tips section.
import React, { useRef, memo } from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import cx from 'classnames'
import TipsDispatcher from '../../../handlers/Tips/Dispatcher'
import Button from '../../Button'
import TipsHand from '../../Tips/Hand'
import { IS_TIPS_SHOWABLE_SELECTOR } from '../../../redux/transient/selectors'
import { SELECTED_TIPS_OPTION_SELECTOR } from '../../../redux/option/selectors'
import { TIPS_TOGGLE_KEY } from '../../../constants/access'
import { TIPS_BUTTON_KEY } from '../../../constants/buttons'
import { TIPS } from '../../../constants/tips'
import './style'

const TipsToggle = ({
    inPopup,
    className

}) => {
    const
        isTipsShowable = useSelector(IS_TIPS_SHOWABLE_SELECTOR),
        selectedTipsOption = useSelector(SELECTED_TIPS_OPTION_SELECTOR),
        dispatchTips = useRef(),
        handleTipsClick = () => {
            dispatchTips.current({ isToggled: true })
        }

    return (
        <div
            {...{
                className: cx(
                    'TipsToggle',
                    className
                )
            }}
        >
            <Button
                isLargeSize
                {...{
                    isBrightHover: inPopup,
                    buttonName: TIPS_BUTTON_KEY,
                    buttonIdentifier: selectedTipsOption,
                    accessKey: TIPS_TOGGLE_KEY,
                    isDisabled: !isTipsShowable,
                    handleButtonClick: handleTipsClick
                }}
            />
            {inPopup && (
                <TipsHand reverse {...{ tipType: TIPS }} />
            )}
            <TipsDispatcher {...{ ref: dispatchTips }} />
        </div>
    )
}

TipsToggle.propTypes = {
    inPopup: PropTypes.bool,
    className: PropTypes.string
}

export default memo(TipsToggle)
