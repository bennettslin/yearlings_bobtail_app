import React from 'react'
import { connect } from 'react-redux'
import MenuField from './menu-field'
import NavSection from '../nav/nav-section'
import CarouselToggle from '../carousel/carousel-toggle'
import DotsOverviewToggleSection from './dots-overview-toggle-section'

/*************
 * CONTAINER *
 *************/

const MainColumn = (props) => (
    <MainColumnView {...props} />
)

/****************
 * PRESENTATION *
 ****************/

const MainColumnView = ({

    // From props.
    isOverlayingAnnotation,

    isPhone,
    isDesktop,
    isHiddenNav,
    isScoresTipsInMain,

    handleCarouselToggle,
    handleDotsSectionToggle,
    handleNavExpand,
    handleNavSongSelect,
    handleNavBookSelect,

    annotationPopupChild,
    dotsSectionChild,
    overviewPopupChild,
    overviewButtonChild,
    lyricExpandButtonChild,
    scoresTipsSectionChild,
    audioBannerChild,
    audioSectionMenuChild,
    carouselChild,
    titleToggleChild

}) => {
    const menuFieldProps = {
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

export default connect(({
    isHiddenNav,
    isScoresTipsInMain
}) => ({
    isHiddenNav,
    isScoresTipsInMain
}))(MainColumn)
