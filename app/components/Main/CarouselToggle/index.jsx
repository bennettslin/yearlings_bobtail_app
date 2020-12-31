// Toggle button to show and hide carousel nav.
import React, { useRef, memo } from 'react'
import { useSelector } from 'react-redux'
import cx from 'classnames'
import CarouselNavDispatcher from '../../../dispatchers/CarouselNav'
import Button from '../../Button'
import TipsHand from '../../Tips/Hand'
import { CAROUSEL_TOGGLE_KEY } from '../../../constants/access'
import { CAROUSEL_NAV_BUTTON_KEY } from '../../../constants/buttons'
import { CAROUSEL, NAV } from '../../../constants/tips'
import { mapCarouselNavIdentifier } from '../../../redux/carousel/selector'
import { mapCanCarouselNavMount } from '../../../redux/viewport/selector'
import './style'

const CarouselToggle = () => {
    const
        dispatchCarouselNav = useRef(),
        canCarouselNavMount = useSelector(mapCanCarouselNavMount),
        carouselNavIdentifier = useSelector(mapCarouselNavIdentifier)

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
                    buttonIdentifier: carouselNavIdentifier,
                    accessKey: CAROUSEL_TOGGLE_KEY,
                    handleButtonClick,
                }}
            />
            <TipsHand {...{ tipType: CAROUSEL }} />
            <TipsHand {...{ tipType: NAV }} />
            <CarouselNavDispatcher {...{ ref: dispatchCarouselNav }} />
        </div>
    )
}

export default memo(CarouselToggle)
