// Column to show all sections, excluding lyrics and popups.

import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import MenuField from './menu-field'
import NavSection from '../nav/nav-section'
import CarouselToggle from '../carousel/carousel-toggle'
import CarouselSection from '../carousel/carousel-section'
import DotsOverviewToggleSection from './dots-overview-toggle-section'
import LyricToggle from '../lyric/lyric-toggle'
import { getIsPhone, getIsDesktop } from '../../helpers/responsive-helper'

const MainColumn = ({

    // From props.
    isOverlayingAnnotation,

    deviceIndex,
    isScoresTipsInMain,

    handleCarouselToggle,
    handleDotsSectionToggle,
    handleLyricSectionExpand,
    handleOverviewToggle,

    annotationPopupChild,
    audioBannerChild,
    audioSectionMenuChild,
    dotsSectionChild,
    overviewPopupChild,
    scoresTipsSectionChild,
    titleToggleChild,

    carouselSectionProps,
    navSectionProps

}) => {
    const isPhone = getIsPhone(deviceIndex),
        isDesktop = getIsDesktop(deviceIndex),

        menuFieldProps = {
            audioSectionMenuChild,
            scoresTipsSectionChild,
            titleToggleChild
        },
        dotsOverviewToggleSectionProps = {
            handleDotsSectionToggle,
            handleOverviewToggle,

            dotsSectionChild
        }

    return (
        <div className="column main-column">
            <MenuField {...menuFieldProps} />
            <div className="field centre-field">

                {!isOverlayingAnnotation &&
                    <div className="field popup-field">
                        <div className="subfield annotation-subfield">
                            {annotationPopupChild}
                        </div>
                    </div>
                }

                <div className="subfield dots-overview-subfield">
                    <CarouselSection {...carouselSectionProps} />
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
                        {dotsSectionChild}
                    </div>
                    {(!isDesktop && isScoresTipsInMain) ? scoresTipsSectionChild : null}
                </div>

                {isPhone &&
                    <div className="audio-banner-custom-subfield">
                        {audioBannerChild}
                    </div>
                }

                <CarouselToggle
                    handleCarouselToggle={handleCarouselToggle}
                />

                <NavSection {...navSectionProps} />
            </div>
        </div>
    )
}

MainColumn.propTypes = {
    // Through Redux.
    deviceIndex: PropTypes.number.isRequired,
    isScoresTipsInMain: PropTypes.bool.isRequired,

    // From parent.
    isOverlayingAnnotation: PropTypes.bool.isRequired,

    handleCarouselToggle: PropTypes.func.isRequired,
    handleDotsSectionToggle: PropTypes.func.isRequired,
    handleLyricSectionExpand: PropTypes.func.isRequired,
    handleOverviewToggle: PropTypes.func.isRequired,

    annotationPopupChild: PropTypes.element.isRequired,
    audioBannerChild: PropTypes.element.isRequired,
    audioSectionMenuChild: PropTypes.element.isRequired,
    dotsSectionChild: PropTypes.element.isRequired,
    overviewPopupChild: PropTypes.element.isRequired,
    scoresTipsSectionChild: PropTypes.element.isRequired,
    titleToggleChild: PropTypes.element.isRequired,

    carouselSectionProps: PropTypes.object.isRequired,
    navSectionProps: PropTypes.object.isRequired
}

export default connect(({
    deviceIndex,
    isScoresTipsInMain
}) => ({
    deviceIndex,
    isScoresTipsInMain
}))(MainColumn)
