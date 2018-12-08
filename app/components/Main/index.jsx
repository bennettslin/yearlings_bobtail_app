/**
 * Column to show all sections, excluding lyrics and popups. Knows no state, so
 * should not update.
 */

import React, { PureComponent } from 'react'
import cx from 'classnames'

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

class Main extends PureComponent {

    render() {

        /**
         * In phone, flex container's children have absolute position.
         */

        return (
            <div className={cx(
                'Main',
                'position__mainColumn',
                'width__mainColumn'
            )}>

                <AnnotationPopup inMain />
                <Nav />
                <Carousel />
                <div className={cx(
                    'Main__flexContainer',
                    'absoluteFullContainer'
                )}>
                    <LeftShelf />
                    <OverviewPopup inMain />
                </div>
                <LyricToggleExpand inMain />
                <DotsSlide />
                <ScoresTips inMainRightSide />
                <TipsPopup />
                <CarouselToggle />
            </div>
        )
    }
}

export default Main
