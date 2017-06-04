import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import MenuField from './menu-field'
import NavSection from '../nav/nav-section'
import CarouselToggle from '../carousel/carousel-toggle'
import DotsOverviewToggleSection from './dots-overview-toggle-section'
import { getIsPhone, getIsDesktop } from '../../helpers/responsive-helper'

const MainColumn = ({

    // From props.
    isOverlayingAnnotation,

    deviceIndex,
    isHiddenNav,
    isScoresTipsInMain,

    handleCarouselToggle,
    handleDotsSectionToggle,
    handleNavExpand,
    handleNavSongSelect,
    handleNavBookSelect,

    annotationPopupChild,
    audioBannerChild,
    audioSectionMenuChild,
    carouselChild,
    dotsSectionChild,
    lyricExpandButtonChild,
    overviewPopupChild,
    overviewButtonChild,
    scoresTipsSectionChild,
    titleToggleChild

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

            overviewButtonChild,
            dotsSectionChild
        },
        navSectionProps = {
            handleNavExpand,
            handleNavSongSelect,
            handleNavBookSelect
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
                    {carouselChild}
                    <DotsOverviewToggleSection {...dotsOverviewToggleSectionProps}
                        scoresTipsSectionChild={
                            (isDesktop && isScoresTipsInMain) ? scoresTipsSectionChild : null
                        }
                    />
                    <div className="overview-popup-container">
                        {overviewPopupChild}
                    </div>

                    {lyricExpandButtonChild}

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

                {!isHiddenNav &&
                    <CarouselToggle
                        handleCarouselToggle={handleCarouselToggle}
                    />
                }

                {!isHiddenNav &&
                    <div className="nav-custom-subfield">
                        <NavSection {...navSectionProps} />
                    </div>
                }
            </div>
        </div>
    )
}

MainColumn.propTypes = {
    // Through Redux.
    deviceIndex: PropTypes.number.isRequired,
    isHiddenNav: PropTypes.bool.isRequired,
    isScoresTipsInMain: PropTypes.bool.isRequired,

    // From parent.
    isOverlayingAnnotation: PropTypes.bool.isRequired,

    handleCarouselToggle: PropTypes.func.isRequired,
    handleDotsSectionToggle: PropTypes.func.isRequired,
    handleNavExpand: PropTypes.func.isRequired,
    handleNavSongSelect: PropTypes.func.isRequired,
    handleNavBookSelect: PropTypes.func.isRequired,

    annotationPopupChild: PropTypes.element.isRequired,
    audioBannerChild: PropTypes.element.isRequired,
    audioSectionMenuChild: PropTypes.element.isRequired,
    carouselChild: PropTypes.element.isRequired,
    dotsSectionChild: PropTypes.element.isRequired,
    lyricExpandButtonChild: PropTypes.element.isRequired,
    overviewPopupChild: PropTypes.element.isRequired,
    overviewButtonChild: PropTypes.element.isRequired,
    scoresTipsSectionChild: PropTypes.element.isRequired,
    titleToggleChild: PropTypes.element.isRequired
}

export default connect(({
    deviceIndex,
    isHiddenNav,
    isScoresTipsInMain
}) => ({
    deviceIndex,
    isHiddenNav,
    isScoresTipsInMain
}))(MainColumn)
