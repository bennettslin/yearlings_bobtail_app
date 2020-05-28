/**
 * Column to show all sections, excluding lyrics and popups. Knows no state, so
 * should not update.
 */
import React, { useEffect } from 'react'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import CarouselSelect from './CarouselSelect'
import CarouselToggle from './CarouselToggle'
import ShelfLeft from './ShelfLeft'
import Nav from '../Nav'
import Carousel from '../Carousel'
import DotsSlide from '../DotsSlide'
import LyricToggleExpand from '../Lyric/Toggles/Expand'
import AnnotationPopup from '../Popups/Annotation'
import OverviewPopup from '../Popups/Overview'
import TipsPopup from '../Popups/Tips'
import ShelfRight from './ShelfRight'
import { getMainHeight } from './helper'
import {
    CAN_CAROUSEL_MOUNT_SELECTOR,
    LYRIC_DYNAMIC_HEIGHT_SELECTOR
} from '../../redux/mount/selectors'
import {
    IS_HEIGHTLESS_LYRIC_SELECTOR,
    MENU_HEIGHT_SELECTOR
} from '../../redux/responsive/selectors'
import { IS_DESKTOP_WIDTH_SELECTOR } from '../../redux/viewport/selectors'
import './style'

const Main = () => {
    const
        canCarouselMount = useSelector(CAN_CAROUSEL_MOUNT_SELECTOR),
        isHeightlessLyric = useSelector(IS_HEIGHTLESS_LYRIC_SELECTOR),
        menuHeight = useSelector(MENU_HEIGHT_SELECTOR),
        isDesktopWidth = useSelector(IS_DESKTOP_WIDTH_SELECTOR),
        lyricDynamicHeight = useSelector(LYRIC_DYNAMIC_HEIGHT_SELECTOR),

        // TODO: Make this a selector.
        mainHeight = getMainHeight({
            canCarouselMount,
            lyricDynamicHeight,
            isHeightlessLyric,
            menuHeight,
            isDesktopWidth
        })

    useEffect(() => {
        logMount('Main')
    }, [])

    /**
     * In phone, flex container's children have absolute position.
     */
    return (
        <div
            {...{
                className: cx(
                    'Main',
                    'abF'
                ),
                style: {
                    top: `${menuHeight}px`,
                    height: mainHeight
                }
            }}
        >
            {canCarouselMount && (
                <Carousel />
            )}
            <div
                {...{
                    className: cx(
                        /**
                         * This column allows Main to take up the full
                         * viewport width and then have overflow hidden,
                         * which avoids screen jumpiness when zooming.
                         */
                        'width__mainColumn',
                        'abF'
                    )
                }}
            >
                {canCarouselMount && (
                    <Nav />
                )}
                <AnnotationPopup inMain />
                <div
                    {...{
                        className: cx(
                            'Main__flexContainer',
                            'Main__flexContainer__side',
                            'abF'
                        )
                    }}
                >
                    <ShelfLeft />
                    <OverviewPopup inMain />
                </div>
                <div
                    {...{
                        className: cx(
                            'Main__flexContainer',

                            /**
                             * In desktop, tips popup is centred. In mobile,
                             * it is on right, aligned either top or bottom.
                             */
                            isDesktopWidth ?
                                'fCC' :
                                [
                                    'Main__flexContainer__side',
                                    'Main__flexContainer__right'
                                ],
                            'abF'
                        )
                    }}
                >
                    {!isDesktopWidth && (
                        <ShelfRight />
                    )}
                    <TipsPopup />
                </div>
                <LyricToggleExpand inMain />
                <DotsSlide />
                {canCarouselMount && (
                    <>
                        <CarouselToggle />
                        <CarouselSelect />
                    </>
                )}
            </div>
        </div>
    )
}

export default Main
