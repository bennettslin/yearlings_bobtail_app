/**
 * Column to show all sections, excluding lyrics and popups. Knows no state, so
 * should not update.
 */

import React, { PureComponent, Fragment as ___ } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { connect } from 'react-redux'

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

const mapStateToProps = ({
    mountStore: {
        canCarouselMount,
        lyricDynamicHeight
    },
    responsiveStore: {
        isHeightlessLyric,
        menuHeight
    },
    viewportStore: { isDesktopWidth }
}) => ({
    canCarouselMount,
    lyricDynamicHeight,
    isHeightlessLyric,
    menuHeight,
    isDesktopWidth
})

class Main extends PureComponent {

    static propTypes = {
        // Through Redux.
        canCarouselMount: PropTypes.bool.isRequired,
        lyricDynamicHeight: PropTypes.number.isRequired,
        isHeightlessLyric: PropTypes.bool.isRequired,
        menuHeight: PropTypes.number.isRequired,
        isDesktopWidth: PropTypes.bool.isRequired
    }

    componentDidMount() {
        logMount(Main.name)
    }

    render() {
        const {
                canCarouselMount,
                lyricDynamicHeight,
                isHeightlessLyric,
                menuHeight,
                isDesktopWidth
            } = this.props,

            mainHeight = getMainHeight({
                canCarouselMount,
                lyricDynamicHeight,
                isHeightlessLyric,
                menuHeight,
                isDesktopWidth
            })

        /**
         * In phone, flex container's children have absolute position.
         */
        return (
            <div
                {...{
                    className: cx(
                        'Main',
                        'width__mainColumn',
                        'abF'
                    ),
                    style: {
                        top: `${menuHeight}px`,
                        height: mainHeight
                    }
                }}
            >
                <AnnotationPopup inMain />
                {canCarouselMount && (
                    <___>
                        <Nav />
                        <Carousel />
                    </___>
                )}
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
                             * In desktop, tips popup is centred. In mobile, it
                             * is on right, aligned either top or bottom.
                             */
                            isDesktopWidth ?
                                'flexCentreContainer' :
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
                    <___>
                        <CarouselToggle />
                        <CarouselSelect />
                    </___>
                )}
            </div>
        )
    }
}

export default connect(mapStateToProps)(Main)
