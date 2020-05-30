// Component to show the played audio time.
import React from 'react'
import { useSelector } from 'react-redux'
import cx from 'classnames'
import { getFormattedTime } from '../../../../helpers/format'
import {
    IS_ACTIVATED_SELECTOR,
    ACTIVATED_TIME_SELECTOR
} from '../../../../redux/activated/selectors'
import {
    IS_BANNER_HOVERING_SELECTOR,
    BANNER_HOVER_TIME_SELECTOR
} from '../../../../redux/banner/selectors'
import {
    IS_SELECTED_LOGUE_SELECTOR,
    SELECTED_TIME_SELECTOR
} from '../../../../redux/selected/selectors'
import {
    IS_SLIDER_MOVING_SELECTOR,
    SLIDER_TIME_SELECTOR
} from '../../../../redux/slider/selectors'
import './style'

const SongBannerTimer = () => {
    const
        isActivated = useSelector(IS_ACTIVATED_SELECTOR),
        activatedTime = useSelector(ACTIVATED_TIME_SELECTOR),
        isBannerHovering = useSelector(IS_BANNER_HOVERING_SELECTOR),
        bannerHoverTime = useSelector(BANNER_HOVER_TIME_SELECTOR),
        isSelectedLogue = useSelector(IS_SELECTED_LOGUE_SELECTOR),
        selectedTime = useSelector(SELECTED_TIME_SELECTOR),
        isSliderMoving = useSelector(IS_SLIDER_MOVING_SELECTOR),
        sliderTime = useSelector(SLIDER_TIME_SELECTOR)

    let time = selectedTime

    if (isSliderMoving) {
        time = sliderTime
    }

    if (isActivated) {
        time = activatedTime
    }

    if (isBannerHovering) {
        time = bannerHoverTime
    }

    return !isSelectedLogue && (
        <div className={cx(
            'SongBannerTimer',
            'fCC',
            'abF'
        )}>
            {getFormattedTime(time)}
        </div>
    )
}

export default SongBannerTimer
