/**
 * Column to show all sections, excluding lyrics and popups. Knows no state, so
 * should not update.
 */

import React from 'react'
import PropTypes from 'prop-types'
import MenuField from './menu-field'
import NavToggle from '../nav/nav-toggle'
import NavSection from '../nav/nav-section'
import AnnotationPopup from '../annotation/annotation-popup'
import AudioBanner from '../audio/audio-banner'
import CarouselToggle from '../carousel/carousel-toggle'
import CarouselSection from '../carousel/carousel-section'
import DotsSection from '../dots/dots-section'
import DotsOverviewToggleSection from './dots-overview-toggle-section'
import LyricToggle from '../lyric/lyric-toggle'
import StageSection from '../stage/stage-section'
import OverviewPopup from '../overview/overview-popup'
import TipsPopup from '../tips/tips-popup'
import ScoresTipsSection from './scores-tips-section'

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
    <div className="column main-column">
        <MenuField {...menuFieldHandlers} />
        <div className="field centre-field">

            <StageSection />

            <div className="field popup-field">
                <div className="subfield annotation-subfield">
                    <AnnotationPopup {...annotationPopupHandlers}
                        isOverlayAnnotation={false}
                    />
                </div>
            </div>

            <div className="subfield dots-overview-subfield">
                <CarouselSection {...carouselSectionHandlers} />
                <DotsOverviewToggleSection {...dotsOverviewToggleSectionHandlers}
                    scoresTipsSectionHandlers={scoresTipsSectionHandlers}
                />

                <div className="overview-popup-container">
                    <OverviewPopup {...overviewPopupHandlers}
                        inOverviewSubfield={true}
                    />
                </div>

                <LyricToggle
                    handleLyricSectionExpand={handleLyricSectionExpand}
                    inMain={true}
                />

                <div className="dots-subfield">
                    <DotsSection {...dotsSectionHandlers} />
                </div>

                <ScoresTipsSection {...scoresTipsSectionHandlers}
                    inSubfield={true}
                />

                <TipsPopup {...tipsPopupHandlers} />
            </div>

            <div className="audio-banner-custom-subfield">
                <AudioBanner {...audioBannerHandlers}
                    inCustomSubfield={true}
                />
            </div>

            <CarouselToggle
                handleCarouselNavToggle={handleCarouselNavToggle}
            />

            <NavToggle
                inMain={true}
                handleCarouselNavToggle={handleCarouselNavToggle}
            />

            <NavSection {...navSectionHandlers} />
        </div>
    </div>
)

MainColumn.propTypes = mainColumnPropTypes

export default MainColumn
