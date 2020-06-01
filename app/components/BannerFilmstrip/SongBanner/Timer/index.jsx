// Component to show the played audio time.
import React from 'react'
import { useSelector } from 'react-redux'
import cx from 'classnames'
import { getFormattedTime } from '../../../../helpers/format'
import {
    mapIsActivated,
    mapActivatedTime
} from '../../../../redux/activated/selectors'
import {
    mapIsBannerHovering,
    mapBannerHoverTime
} from '../../../../redux/banner/selectors'
import {
    mapIsSelectedLogue,
    mapSelectedTime
} from '../../../../redux/selected/selectors'
import {
    IS_SLIDER_MOVING_SELECTOR,
    SLIDER_TIME_SELECTOR
} from '../../../../redux/slider/selectors'
import './style'

const SongBannerTimer = () => {
    const
        isActivated = useSelector(mapIsActivated),
        activatedTime = useSelector(mapActivatedTime),
        isBannerHovering = useSelector(mapIsBannerHovering),
        bannerHoverTime = useSelector(mapBannerHoverTime),
        isSelectedLogue = useSelector(mapIsSelectedLogue),
        selectedTime = useSelector(mapSelectedTime),
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
