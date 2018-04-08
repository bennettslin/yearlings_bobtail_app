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
import DotsOverviewToggleSection from '../DotsOverviewToggleSection'
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
    scoresTipsSectionHandlers: PropTypes.object.isRequired
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
    scoresTipsSectionHandlers,
    tipsPopupHandlers

}) => (
    <div className={cx(
        'Main',
        'width__mainColumn',
        'height__mainColumn'
    )}>

        <Stage />

        <div className="popup-field">
            <div className="subfield annotation-subfield">
                <AnnotationPopup {...annotationPopupHandlers}
                    isOverlayAnnotation={false}
                />
            </div>
        </div>

        <div className="subfield dots-overview-subfield">
            <Carousel {...carouselSectionHandlers} />
            <DotsOverviewToggleSection {...dotsOverviewToggleSectionHandlers}
                scoresTipsSectionHandlers={scoresTipsSectionHandlers}
            />

            <div className="OverviewPopup-container">
                <OverviewPopup {...overviewPopupHandlers}
                    inOverviewSubfield
                />
            </div>

            <LyricToggleExpand
                handleLyricSectionExpand={handleLyricSectionExpand}
                inMain
            />

            <div className="dots-subfield">
                <Dots {...dotsSectionHandlers} />
            </div>

            <ScoresTips {...scoresTipsSectionHandlers}
                inSubfield
            />

            <TipsPopup {...tipsPopupHandlers} />
        </div>

        <CarouselToggle
            handleCarouselNavToggle={handleCarouselNavToggle}
        />

        <Nav {...navSectionHandlers} />
    </div>
)

Main.propTypes = mainColumnPropTypes

export default Main
