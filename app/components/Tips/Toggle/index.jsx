// Toggle button to show, hide, and disable tips section.
import React, { useRef, memo, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import cx from 'classnames'
import TipsDispatcher from '../../../dispatchers/Tips'
import Button from '../../Button'
import TipsHand from '../../Tips/Hand'
import { mapSelectedTipsOption } from '../../../redux/option/selector'
import { mapCanTipsShowForDevice } from '../../../redux/tips/selector'
import { TIPS_TOGGLE_KEY } from '../../../constants/access'
import { TIPS_BUTTON_KEY } from '../../../constants/buttons'
import { TIPS } from '../../../constants/tips'
import './style'

const TipsToggle = ({
    inPopup,
    className,

}) => {
    const
        dispatchTips = useRef(),
        canTipsShowForDevice = useSelector(mapCanTipsShowForDevice),
        selectedTipsOption = useSelector(mapSelectedTipsOption)

    const handleButtonClick = () => {
        dispatchTips.current({ isFromToggle: true })
    }

    useEffect(() => {
        if (!inPopup) {
            logState('selectedTipsOption', selectedTipsOption)
        }
    }, [selectedTipsOption])

    return (
        <div
            {...{
                className: cx(
                    'TipsToggle',
                    className,
                ),
            }}
        >
            <Button
                isLargeSize
                {...{
                    isBrightHover: inPopup,
                    buttonName: TIPS_BUTTON_KEY,
                    buttonIdentifier: selectedTipsOption,
                    accessKey: TIPS_TOGGLE_KEY,
                    isDisabled: !canTipsShowForDevice,
                    handleButtonClick,
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
    className: PropTypes.string,
}

export default memo(TipsToggle)
