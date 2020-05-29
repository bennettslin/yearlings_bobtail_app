import React from 'react'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import {
    CAN_CAROUSEL_MOUNT_SELECTOR,
    MAIN_HEIGHT_SELECTOR
} from '../../../redux/mount/selectors'
import { MENU_HEIGHT_SELECTOR } from '../../../redux/responsive/selectors'
import Carousel from '../'

const MainCarousel = () => {
    const
        canCarouselMount = useSelector(CAN_CAROUSEL_MOUNT_SELECTOR),
        mainHeight = useSelector(MAIN_HEIGHT_SELECTOR),
        menuHeight = useSelector(MENU_HEIGHT_SELECTOR)

    return canCarouselMount && (
        <div
            {...{
                className: cx(
                    'MainCarousel',
                    'abF'
                ),
                style: {
                    top: `${menuHeight}px`,
                    height: mainHeight
                }
            }}
        >
            <Carousel />
        </div>
    )
}

export default MainCarousel
