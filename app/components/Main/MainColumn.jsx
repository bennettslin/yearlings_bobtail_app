/**
 * Column to show all sections, excluding lyrics and popups. Knows no state, so
 * should not update.
 */

import React from 'react'
import PropTypes from 'prop-types'
import MenuField from './MenuField'
import Nav from '../Nav/Nav'
import AnnotationPopup from '../Popups/AnnotationPopup'
import AudioBanner from '../Audio/AudioBanner'
import CarouselToggle from '../Carousel/CarouselToggle'
import Carousel from '../Carousel/Carousel'
import Dots from '../Dots/Dots'
import DotsOverviewToggleSection from './DotsOverviewToggleSection'
import LyricToggle from '../Lyric/LyricToggle'
import Stage from '../stage/Stage'
import OverviewPopup from '../Popups/OverviewPopup'
import TipsPopup from '../Popups/TipsPopup'
import ScoresTipsSection from './ScoresTipsSection'

const mainColumnPropTypes = {
    // From parent.
    handleCarouselNavToggle: PropTypes.func.isRequired,
    handleLyricSectionExpand: PropTypes.func.isRequired,

    annotationPopupHandlers: PropTypes.object.isRequired,
    audioBannerHandlers: PropTypes.object.isRequired,
    carouselSectionHandlers: PropTypes.object.isRequired,
    dotsOverviewToggleSectionHandlers: PropTypes.object.isRequired,
    dotsSectionHandlers: PropTypes.object.isRequired,
    menuFieldHandlers: PropTypes.object.isRequired,
    navSectionHandlers: PropTypes.object.isRequired,
    overviewPopupHandlers: PropTypes.object.isRequired,
    tipsPopupHandlers: PropTypes.object.isRequired,
    scoresTipsSectionHandlers: PropTypes.object.isRequired
},

MainColumn = ({

    handleCarouselNavToggle,
    handleLyricSectionExpand,

    annotationPopupHandlers,
    audioBannerHandlers,
    carouselSectionHandlers,
    dotsOverviewToggleSectionHandlers,
    dotsSectionHandlers,
    navSectionHandlers,
    overviewPopupHandlers,
    scoresTipsSectionHandlers,
    tipsPopupHandlers,

    menuFieldHandlers

}) => (
    <div className="column MainColumn">
        <MenuField {...menuFieldHandlers} />
        <div className="field centre-field">

            <Stage />

            <div className="field popup-field">
                <div className="subfield annotation-subfield">
                    <AnnotationPopup {...annotationPopupHandlers}
                        isOverlayAnnotation={false}
                    />
                </div>
            </div>

            <div className="subfield dots-overview-subfield access-keys-shown">
                <Carousel {...carouselSectionHandlers} />
                <DotsOverviewToggleSection {...dotsOverviewToggleSectionHandlers}
                    scoresTipsSectionHandlers={scoresTipsSectionHandlers}
                />

                <div className="OverviewPopup-container">
                    <OverviewPopup {...overviewPopupHandlers}
                        inOverviewSubfield={true}
                    />
                </div>

                <LyricToggle
                    handleLyricSectionExpand={handleLyricSectionExpand}
                    inMain={true}
                />

                <div className="dots-subfield">
                    <Dots {...dotsSectionHandlers} />
                </div>

                <ScoresTipsSection {...scoresTipsSectionHandlers}
                    inSubfield={true}
                />

                <TipsPopup {...tipsPopupHandlers} />
            </div>

            <AudioBanner {...audioBannerHandlers}
                inCustomSubfield={true}
            />

            <CarouselToggle
                handleCarouselNavToggle={handleCarouselNavToggle}
            />

            <Nav {...navSectionHandlers} />
        </div>
    </div>
)

MainColumn.propTypes = mainColumnPropTypes

export default MainColumn
