// Button to toggle between left and right columns.

import React from 'react'
import cx from 'classnames'
import { useDispatch, useSelector } from 'react-redux'
import CSSTransition from 'react-transition-group/CSSTransition'
import Button from '../../../Button'
import TipsHand from '../../../Tips/Hand'
import { LYRIC_SCROLL_TOGGLE_KEY } from '../../../../constants/access'
import { LYRIC_SCROLL_BUTTON_KEY } from '../../../../constants/buttons'
import { AUTOSCROLL } from '../../../../constants/tips'
import { mapIsAutoScroll } from '../../../../redux/toggle/selector'
import { enableAutoScroll } from '../../../../redux/toggle/action'

const LyricToggleScroll = () => {
    const
        dispatch = useDispatch(),
        isAutoScroll = useSelector(mapIsAutoScroll)

    const handleButtonClick = () => {
        dispatch(enableAutoScroll())
    }

    return (
        <CSSTransition
            appear
            mountOnEnter
            unmountOnExit
            {...{
                in: !isAutoScroll,
                timeout: 200,
                classNames: {
                    enterActive: 'LyricToggle__shown',
                    enterDone: 'LyricToggle__shown'
                }
            }}
        >
            <div className={cx(
                'LyricToggleScroll',
                'LyricToggle',
                'length__buttonLarge'
            )}>
                <Button
                    isLargeSize
                    {...{
                        buttonName: LYRIC_SCROLL_BUTTON_KEY,
                        accessKey: LYRIC_SCROLL_TOGGLE_KEY,
                        handleButtonClick
                    }}
                />
                <TipsHand reverse {...{ tipType: AUTOSCROLL }} />
            </div>
        </CSSTransition>
    )
}

export default LyricToggleScroll
