// Button to toggle between left and right columns.
import React, { useRef } from 'react'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import CSSTransition from 'react-transition-group/CSSTransition'
import EarColumnDispatcher from '../../../../dispatchers/EarColumn'
import Button from '../../../Button'
import TipsHand from '../../../Tips/Hand'
import { LYRIC_COLUMN_TOGGLE_KEY } from '../../../../constants/access'
import { LYRIC_EAR_BUTTON_KEY } from '../../../../constants/buttons'
import { EAR_COLUMN_KEYS } from '../../../../constants/lyrics'
import { DOUBLESPEAKER } from '../../../../constants/tips'
import { mapIsDesktopWidth } from '../../../../redux/device/selector'
import { mapIsEarShown } from '../../../../redux/ear/selector'
import { mapEarColumnIndex } from '../../../../redux/session/selector'
import './style'

const LyricToggleEar = () => {
    const
        dispatchEarColumn = useRef(),
        isEarShown = useSelector(mapIsEarShown),
        earColumnIndex = useSelector(mapEarColumnIndex),
        isDesktopWidth = useSelector(mapIsDesktopWidth)

    const handleButtonClick = () => {
        dispatchEarColumn.current()
    }

    return (
        <CSSTransition
            appear
            mountOnEnter
            unmountOnExit
            {...{
                in: isEarShown,
                timeout: 200,
                classNames: {
                    enterActive: 'LyricToggle__shown',
                    enterDone: 'LyricToggle__shown'
                }
            }}
        >
            <div className={cx(
                'LyricToggleEar',
                'LyricToggle',
                'length__buttonLarge'
            )}>
                <Button
                    isLargeSize
                    {...{
                        buttonName: LYRIC_EAR_BUTTON_KEY,
                        buttonIdentifier: EAR_COLUMN_KEYS[earColumnIndex],
                        accessKey: LYRIC_COLUMN_TOGGLE_KEY,
                        handleButtonClick
                    }}
                />
                <TipsHand
                    {...{
                        tipType: DOUBLESPEAKER,
                        reverse: isDesktopWidth
                    }}
                />
                <EarColumnDispatcher {...{ ref: dispatchEarColumn }} />
            </div>
        </CSSTransition>
    )
}

export default LyricToggleEar
