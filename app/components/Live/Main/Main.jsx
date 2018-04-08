/**
 * Column to show all sections, excluding lyrics and popups. Knows no state, so
 * should not update.
 */

import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Nav from '../../Nav/Nav'
import AnnotationPopup from '../../Popups/AnnotationPopup'
import CarouselToggle from '../../Carousel/CarouselToggle'
import Carousel from '../../Carousel/Carousel'
import Dots from '../../Dots/Dots'
import DotsOverview from './DotsOverview'
import LyricToggleExpand from '../../Lyric/LyricToggleExpand'
import Stage from '../../stage/Stage'
import OverviewPopup from '../../Popups/OverviewPopup'
import TipsPopup from '../../Popups/TipsPopup'
import ScoresTips from '../ScoresTips'

const mainColumnPropTypes = {
    // From parent.
    handleCarouselNavToggle: PropTypes.func.isRequired,
    handleLyricSectionExpand: PropTypes.func.isRequired,

    annotationPopupHandlers: PropTypes.object.isRequired,
    carouselSectionHandlers: PropTypes.object.isRequired,
    dotsOverviewToggleSectionHandlers: PropTypes.object.isRequired,
    dotsSectionHandlers: PropTypes.object.isRequired,
    navSectionHandlers: PropTypes.object.isRequired,
    overviewPopupHandlers: PropTypes.object.isRequired,
    tipsPopupHandlers: PropTypes.object.isRequired,
    scoresTipsHandlers: PropTypes.object.isRequired
},

Main = ({

    handleCarouselNavToggle,
    handleLyricSectionExpand,

    annotationPopupHandlers,
    carouselSectionHandlers,
    dotsOverviewToggleSectionHandlers,
    dotsSectionHandlers,
    navSectionHandlers,
    overviewPopupHandlers,
    scoresTipsHandlers,
    tipsPopupHandlers

}) => (
    <div className={cx(
        'Main',
        'width__mainColumn',
        'height__mainColumn'
    )}>

        <Stage />

        <AnnotationPopup {...annotationPopupHandlers}
            isOverlayAnnotation={false}
        />

        <Carousel {...carouselSectionHandlers} />

        <DotsOverview {...dotsOverviewToggleSectionHandlers}
            scoresTipsHandlers={scoresTipsHandlers}
        />

        <OverviewPopup {...overviewPopupHandlers}
            inMain
        />

        <div className="subfield dots-overview-subfield">
            <div className="OverviewPopup-container">
            </div>
        </div>

        <LyricToggleExpand
            handleLyricSectionExpand={handleLyricSectionExpand}
            inMain
        />

        <Dots {...dotsSectionHandlers} />

        <ScoresTips {...scoresTipsHandlers}
            inMain
        />

        <TipsPopup {...tipsPopupHandlers} />

        <CarouselToggle
            handleCarouselNavToggle={handleCarouselNavToggle}
        />

        <Nav {...navSectionHandlers} />
    </div>
)

Main.propTypes = mainColumnPropTypes

export default Main
