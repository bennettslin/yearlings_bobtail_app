/**
 * Column to show all sections, excluding lyrics and popups. Knows no state, so
 * should not update.
 */
import React, { memo, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import getMainHoc from '../MainHoc'
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

const Main = ({ className, style }) => {
    const [didMount, setDidMount] = useState(false)

    useEffect(() => {
        logMount('Main')
        setDidMount(true)
    }, [])

    return didMount && (
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
                    className
                ),
                style
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
        </div>
    )
}

Main.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object
}

export default memo(getMainHoc(Main))
