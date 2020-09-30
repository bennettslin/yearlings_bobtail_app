// Toggle button to show and hide carousel nav.
import React, { useRef, memo } from 'react'
import { useSelector } from 'react-redux'
import cx from 'classnames'
import CarouselNavDispatcher from '../../../dispatchers/CarouselNav'
import Button from '../../Button'
import TipsHand from '../../Tips/Hand'
import { CAROUSEL_TOGGLE_KEY } from '../../../constants/access'
import { CAROUSEL_NAV_BUTTON_KEY } from '../../../constants/buttons'
import { getCarouselNavIdentifier } from '../../../constants/options'
import { CAROUSEL, NAV } from '../../../constants/tips'
import {
    mapIsCarouselShown,
    mapIsNavExpanded
} from '../../../redux/toggle/selector'
import { mapCanCarouselNavMount } from '../../../redux/viewport/selector'
import './style'

const CarouselToggle = () => {
    const
        dispatchCarouselNav = useRef(),
        canCarouselNavMount = useSelector(mapCanCarouselNavMount),
        isCarouselShown = useSelector(mapIsCarouselShown),
        isNavExpanded = useSelector(mapIsNavExpanded)

    const handleButtonClick = () => {
        dispatchCarouselNav.current()
    }

    return canCarouselNavMount && (
        <div className={cx(
            'CarouselToggle'
        )}>
            <Button
                isLargeSize
                {...{
                    buttonName: CAROUSEL_NAV_BUTTON_KEY,
                    buttonIdentifier: getCarouselNavIdentifier({
                        isCarouselShown,
                        isNavExpanded
                    }),
                    accessKey: CAROUSEL_TOGGLE_KEY,
                    handleButtonClick
                }}
            />
            <TipsHand {...{ tipType: CAROUSEL }} />
            <TipsHand {...{ tipType: NAV }} />
            <CarouselNavDispatcher {...{ ref: dispatchCarouselNav }} />
        </div>
    )
}

export default memo(CarouselToggle)
