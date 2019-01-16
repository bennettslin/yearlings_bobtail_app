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

import LeftShelf from './LeftShelf'
import Nav from '../Nav'
import Carousel from '../Carousel'
import DotsSlide from '../DotsSlide'
import LyricToggleExpand from '../Lyric/Toggle/Expand'
import AnnotationPopup from '../Popups/Annotation'
import OverviewPopup from '../Popups/Overview'
import TipsPopup from '../Popups/Tips'
import ScoresTips from '../ScoresTips'

import { getMainDynamicHeight } from './helper'

const mapStateToProps = ({
    mountStore: {
        canCarouselMount,
        lyricHeightRatio
    },
    responsiveStore: { isTwoRowMenu },
    viewportStore: { isDesktopWidth }
}) => ({
    canCarouselMount,
    lyricHeightRatio,
    isTwoRowMenu,
    isDesktopWidth
})

class Main extends PureComponent {

    static propTypes = {
        // Through Redux.
        canCarouselMount: PropTypes.bool.isRequired,
        lyricHeightRatio: PropTypes.number.isRequired,
        isTwoRowMenu: PropTypes.bool.isRequired,
        isDesktopWidth: PropTypes.bool.isRequired
    }

    componentDidMount() {
        logMount('Main')
    }

    render() {
        const {
                canCarouselMount,
                lyricHeightRatio,
                isTwoRowMenu,
                isDesktopWidth
            } = this.props,

            mainDynamicHeight = getMainDynamicHeight({
                canCarouselMount,
                lyricHeightRatio,
                isTwoRowMenu,
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
                        'position__mainColumn',
                        'height__mainColumn',
                        'width__mainColumn'
                    )
                }}
                {...mainDynamicHeight && {
                    style: { height: mainDynamicHeight }
                }}
            >
                <AnnotationPopup inMain />
                {canCarouselMount && (
                    <___>
                        <Nav />
                        <Carousel />
                    </___>
                )}
                <LeftShelf />
                <OverviewPopup inMain />
                <LyricToggleExpand inMain />
                <DotsSlide />
                <ScoresTips />
                <TipsPopup />
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
