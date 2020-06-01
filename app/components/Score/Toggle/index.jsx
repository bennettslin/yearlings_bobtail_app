// Toggle button to show, hide, and disable tips section.
import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import cx from 'classnames'
import ScoreDispatcher from '../../../handlers/Score/Dispatcher'
import Button from '../../Button'
import TipsHand from '../../Tips/Hand'
import { mapCanScoreMount } from '../../../redux/mount/selectors'
import { mapIsDesktopWidth } from '../../../redux/viewport/selectors'
import { SCORE_TOGGLE_KEY } from '../../../constants/access'
import { SCORES_BUTTON_KEY } from '../../../constants/buttons'
import { SCORE } from '../../../constants/tips'
import './style'

const ScoreToggle = ({ className }) => {
    const
        dispatchScore = useRef(),
        isDesktopWidth = useSelector(mapIsDesktopWidth),
        canScoreMount = useSelector(mapCanScoreMount),
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
