// Toggle button to show and hide carousel nav.
import React, { useRef } from 'react'
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
    mapIsNavShown
} from '../../../redux/toggle/selectors'
import { mapCanCarouselMount } from '../../../redux/viewport/selectors'
import './style'

const CarouselToggle = () => {
    const
        dispatchCarouselNav = useRef(),
        canCarouselMount = useSelector(mapCanCarouselMount),
        isCarouselShown = useSelector(mapIsCarouselShown),
        isNavShown = useSelector(mapIsNavShown)

    const handleButtonClick = () => {
        dispatchCarouselNav.current()
    }

    return canCarouselMount && (
        <div className={cx(
            'CarouselToggle'
        )}>
            <Button
                isLargeSize
                {...{
                    buttonName: CAROUSEL_NAV_BUTTON_KEY,
                    buttonIdentifier: getCarouselNavIdentifier({
                        isCarouselShown,
                        isNavShown
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

export default CarouselToggle
