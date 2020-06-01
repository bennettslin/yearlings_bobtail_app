// Toggle button to show, hide, and disable overview section.
import React, { useRef, memo } from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import cx from 'classnames'
import OverviewDispatcher from '../../../handlers/Overview/Dispatcher'
import Button from '../../Button'
import TipsHand from '../../Tips/Hand'
import { OVERVIEW_TOGGLE_KEY } from '../../../constants/access'
import { OVERVIEW_BUTTON_KEY } from '../../../constants/buttons'
import { OVERVIEW } from '../../../constants/tips'
import { getOverviewToggleIdentifier } from './helper'
import { mapIsLyricLogue } from '../../../redux/lyric/selectors'
import { SELECTED_OVERVIEW_OPTION_SELECTOR } from '../../../redux/option/selectors'
import './style'

const OverviewToggle = ({
    isToggleInOverview,
    className
}) => {
    const
        dispatchOverview = useRef(),
        isLyricLogue = useSelector(mapIsLyricLogue),
        selectedOverviewOption = useSelector(SELECTED_OVERVIEW_OPTION_SELECTOR),
        handleButtonClick = () => {
            // The isToggled argument is ignored by logue overview.
            dispatchOverview.current({ isToggled: true })
        }

    return (
        <div className={cx(
            'OverviewToggle',
            className
        )}>
            <Button
                isCustomSize
                {...{
                    buttonName: OVERVIEW_BUTTON_KEY,
                    accessKey: OVERVIEW_TOGGLE_KEY,
                    buttonIdentifier: getOverviewToggleIdentifier({
                        isLyricLogue,
                        selectedOverviewOption,
                        isToggleInOverview
                    }),
                    handleButtonClick
                }}
            />
            <TipsHand {...{ tipType: OVERVIEW }} />
            <OverviewDispatcher {...{ ref: dispatchOverview }} />
        </div>
    )
}

OverviewToggle.propTypes = {
    isToggleInOverview: PropTypes.bool,
    className: PropTypes.string
}

export default memo(OverviewToggle)
