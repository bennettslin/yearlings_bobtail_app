/**
 * Column to show all sections, excluding lyrics and popups. Knows no state, so
 * should not update.
 */
import React, { useEffect } from 'react'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import MainFlexContainer from './FlexContainer'
import CarouselSelect from './CarouselSelect'
import CarouselToggle from './CarouselToggle'
import ShelfLeft from './ShelfLeft'
import Nav from '../Nav'
import DotsSlide from '../DotsSlide'
import LyricToggleExpand from '../Lyric/Toggles/Expand'
import AnnotationPopup from '../Popups/Annotation'
import OverviewPopup from '../Popups/Overview'
import TipsPopup from '../Popups/Tips'
import ShelfRight from './ShelfRight'
import {
    CAN_CAROUSEL_MOUNT_SELECTOR,
    MAIN_HEIGHT_SELECTOR
} from '../../redux/mount/selectors'
import { MENU_HEIGHT_SELECTOR } from '../../redux/responsive/selectors'
import { IS_DESKTOP_WIDTH_SELECTOR } from '../../redux/viewport/selectors'
import './style'

const Main = () => {
    const
        canCarouselMount = useSelector(CAN_CAROUSEL_MOUNT_SELECTOR),
        mainHeight = useSelector(MAIN_HEIGHT_SELECTOR),
        menuHeight = useSelector(MENU_HEIGHT_SELECTOR),
        isDesktopWidth = useSelector(IS_DESKTOP_WIDTH_SELECTOR)

    useEffect(() => {
        logMount('Main')
    }, [])

    return (
        <div
            {...{
                className: cx(
                    'Main',

                    /**
                     * This column allows Main to take up the full
                     * viewport width and then have overflow hidden,
                     * which avoids screen jumpiness when zooming.
                     */
                    'width__mainColumn',

                    'abF',
                    'ovH'
                ),
                style: {
                    top: `${menuHeight}px`,
                    height: mainHeight
                }
            }}
        >
            {canCarouselMount && (
                <Nav />
            )}
            <AnnotationPopup inMain />
            <MainFlexContainer>
                <ShelfLeft />
                <OverviewPopup inMain />
            </MainFlexContainer>
            <MainFlexContainer isRight>
                {!isDesktopWidth && (
                    <ShelfRight />
                )}
                <TipsPopup />
            </MainFlexContainer>
            <LyricToggleExpand inMain />
            <DotsSlide />
            {canCarouselMount && (
                <>
                    <CarouselToggle />
                    <CarouselSelect />
                </>
            )}
        </div>
    )
}

export default Main
