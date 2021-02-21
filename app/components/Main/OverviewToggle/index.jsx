// Toggle button to show, hide, and disable overview section.
import React, { useRef, memo, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import cx from 'classnames'
import OverviewDispatcher from '../../../dispatchers/Overview'
import Button from '../../Button'
import TipsHand from '../../Tips/Hand'
import { OVERVIEW_TOGGLE_KEY } from '../../../constants/access'
import { OVERVIEW_BUTTON_KEY } from '../../../constants/buttons'
import { OVERVIEW } from '../../../constants/tips'
import { getOverviewToggleIdentifier } from './helper'
import { mapIsLyricLogue } from '../../../redux/lyric/selector'
import { mapSelectedOverviewOption } from '../../../redux/option/selector'
import './style'

const OverviewToggle = ({ className }) => {
    const
        dispatchOverview = useRef(),
        isLyricLogue = useSelector(mapIsLyricLogue),
        selectedOverviewOption = useSelector(mapSelectedOverviewOption)

    const handleButtonClick = () => {
        dispatchOverview.current({ isFromToggle: true })
    }

    useEffect(() => {
        logState('selectedOverviewOption', selectedOverviewOption)
    }, [selectedOverviewOption])

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
                    }),
                    handleButtonClick,
                }}
            />
            <TipsHand {...{ tipType: OVERVIEW }} />
            <OverviewDispatcher {...{ ref: dispatchOverview }} />
        </div>
    )
}

OverviewToggle.propTypes = {
    isToggleInOverview: PropTypes.bool,
    className: PropTypes.string,
}

export default memo(OverviewToggle)
