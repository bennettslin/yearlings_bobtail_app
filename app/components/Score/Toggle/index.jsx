// Toggle button to show, hide, and disable tips section.
import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import cx from 'classnames'

import ScoreDispatcher from '../../../handlers/Score/Dispatcher'
import Button from '../../Button'
import TipsHand from '../../Tips/Hand'

import { IS_SCORE_LOADED_SELECTOR } from '../../../redux/load/selectors'
import { CAN_SCORE_MOUNT_SELECTOR } from '../../../redux/mount/selectors'
import { IS_DESKTOP_WIDTH_SELECTOR } from '../../../redux/viewport/selectors'

import { SCORE_TOGGLE_KEY } from '../../../constants/access'
import { SCORES_BUTTON_KEY } from '../../../constants/buttons'
import { SCORE } from '../../../constants/tips'

const ScoreToggle = ({ className }) => {
    const
        dispatchScore = useRef(),
        isScoreLoaded = useSelector(IS_SCORE_LOADED_SELECTOR),
        isDesktopWidth = useSelector(IS_DESKTOP_WIDTH_SELECTOR),
        canScoreMount = useSelector(CAN_SCORE_MOUNT_SELECTOR),
        handleButtonClick = () => {
            dispatchScore.current()
        }

    return canScoreMount && (
        <div
            {...{
                className: cx(
                    'ScoreToggle',
                    className
                )
            }}
        >
            <Button
                isLargeSize
                {...{
                    buttonName: SCORES_BUTTON_KEY,
                    accessKey: SCORE_TOGGLE_KEY,
                    isDisabled: !isScoreLoaded,
                    handleButtonClick
                }}
            />
            <TipsHand
                {...{
                    tipType: SCORE,
                    reverse: !isDesktopWidth
                }}
            />
            <ScoreDispatcher {...{ ref: dispatchScore }} />
        </div>
    )
}

ScoreToggle.propTypes = {
    className: PropTypes.string
}

export default ScoreToggle
