/**
 * Column to show all sections, excluding lyrics and popups. Knows no state, so
 * should not update.
 */
import React, { useEffect, memo } from 'react'
import cx from 'classnames'
import MainLayoutContainer from './LayoutContainer'
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
import './style'

const Main = () => {
    useEffect(() => {
        logMount('Main')
    }, [])

    return (
        <MainLayoutContainer
            alwaysRender
            {...{
                className: cx(
                    'Main',

                    /**
                     * This column allows Main to take up the full
                     * viewport width and then have overflow hidden,
                     * which avoids screen jumpiness when zooming.
                     */
                    'width__mainColumn'
                )
            }}
        >
            <Nav />
            <AnnotationPopup inMain />
            <MainFlexContainer>
                <ShelfLeft />
                <OverviewPopup inMain />
            </MainFlexContainer>
            <MainFlexContainer isRight>
                <ShelfRight />
                <TipsPopup />
            </MainFlexContainer>
            <LyricToggleExpand inMain />
            <DotsSlide />
            <CarouselToggle />
            <CarouselSelect />
        </MainLayoutContainer>
    )
}

export default memo(Main)
