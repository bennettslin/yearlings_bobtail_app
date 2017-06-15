// Column to show all sections, excluding lyrics and popups.

import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import MenuField from './menu-field'
import NavSection from '../nav/nav-section'
import AudioBanner from '../audio/audio-banner'
import CarouselToggle from '../carousel/carousel-toggle'
import CarouselSection from '../carousel/carousel-section'
import DotsSection from '../dots/dots-section'
import DotsOverviewToggleSection from './dots-overview-toggle-section'
import LyricToggle from '../lyric/lyric-toggle'
import { getIsPhone, getIsDesktop } from '../../helpers/responsive-helper'

const MainColumn = ({

    // From props.
    deviceIndex,
    isScoresTipsInMain,

    handleCarouselToggle,
    handleDotsSectionToggle,
    handleLyricSectionExpand,
    handleOverviewToggle,

    annotationPopupChild,
    audioBannerHandlers,
    audioSectionHandlers,
    dotsSectionHandlers,
    overviewPopupChild,
    scoresTipsSectionChild,
    titleToggleHandlers,

    carouselSectionHandlers,
    navSectionHandlers

}) => {
    const isPhone = getIsPhone(deviceIndex),
        isDesktop = getIsDesktop(deviceIndex),

        menuFieldProps = {
            audioSectionHandlers,
            scoresTipsSectionChild,
            titleToggleHandlers
        },
        dotsOverviewToggleSectionProps = {
            handleDotsSectionToggle,
            handleOverviewToggle
        }

    return (
        <div className="column main-column">
            <MenuField {...menuFieldProps} />
            <div className="field centre-field">

                <div className="field popup-field">
                    <div className="subfield annotation-subfield">
                        {annotationPopupChild}
                    </div>
                </div>

                <div className="subfield dots-overview-subfield">
                    <CarouselSection {...carouselSectionHandlers} />
                    <DotsOverviewToggleSection {...dotsOverviewToggleSectionProps}
                        scoresTipsSectionChild={
                            (isDesktop && isScoresTipsInMain) ? scoresTipsSectionChild : null
                        }
                    />
                    <div className="overview-popup-container">
                        {overviewPopupChild}
                    </div>

                    <LyricToggle
                        handleLyricSectionExpand={handleLyricSectionExpand}
                    />

                    <div className="dots-subfield">
                        <DotsSection {...dotsSectionHandlers} />
                    </div>
                    {(!isDesktop && isScoresTipsInMain) ? scoresTipsSectionChild : null}
                </div>

                {isPhone &&
                    <div className="audio-banner-custom-subfield">
                        <AudioBanner {...audioBannerHandlers} />
                    </div>
                }

                <CarouselToggle
                    handleCarouselToggle={handleCarouselToggle}
                />

                <NavSection {...navSectionHandlers} />
            </div>
        </div>
    )
}

MainColumn.propTypes = {
    // Through Redux.
    deviceIndex: PropTypes.number.isRequired,
    isScoresTipsInMain: PropTypes.bool.isRequired,

    // From parent.
    handleCarouselToggle: PropTypes.func.isRequired,
    handleDotsSectionToggle: PropTypes.func.isRequired,
    handleLyricSectionExpand: PropTypes.func.isRequired,
    handleOverviewToggle: PropTypes.func.isRequired,

    annotationPopupChild: PropTypes.element.isRequired,
    overviewPopupChild: PropTypes.element.isRequired,
    scoresTipsSectionChild: PropTypes.element.isRequired,

    audioBannerHandlers: PropTypes.object.isRequired,
    audioSectionHandlers: PropTypes.object.isRequired,
    carouselSectionHandlers: PropTypes.object.isRequired,
    dotsSectionHandlers: PropTypes.object.isRequired,
    navSectionHandlers: PropTypes.object.isRequired,
    titleToggleHandlers: PropTypes.object.isRequired
}

export default connect(({
    deviceIndex,
    isScoresTipsInMain
}) => ({
    deviceIndex,
    isScoresTipsInMain
}))(MainColumn)
