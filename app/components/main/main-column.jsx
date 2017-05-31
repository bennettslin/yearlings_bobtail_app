import React from 'react'
import { connect } from 'react-redux'
import MenuField from './menu-field'
import NavSection from '../nav/nav-section'
import CarouselToggle from '../carousel/carousel-toggle'
import DotsOverviewToggleSection from './dots-overview-toggle-section'

// Pass Redux state into component props.
const passReduxStateToProps = ({
    isHiddenNav,
    isScoresTipsInMain
}) => ({
    isHiddenNav,
    isScoresTipsInMain
})

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
    isOverlaidAnnotation,

    isPhone,
    isDesktop,
    titleInAudio,
    isHiddenNav,
    isScoresTipsInMain,

    showSingleBookColumn,
    shownBookColumnIndex,

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
    audioSectionChild,
    carouselChild,
    titleToggleChild

}) => {
    const menuFieldProps = {
            titleInAudio,

            audioSectionChild,
            scoresTipsSectionChild,
            titleToggleChild
        },
        dotsOverviewToggleSectionProps = {
            handleDotsSectionToggle,

            overviewButtonChild,
            dotsSectionChild
        },
        navSectionProps = {
            showSingleBookColumn,
            shownBookColumnIndex,

            handleNavExpand,
            handleNavSongSelect,
            handleNavBookSelect
        }

    return (
        <div className="column main-column">
            <MenuField {...menuFieldProps} />
            <div className="field centre-field">

                {!isOverlaidAnnotation &&
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

export default connect(passReduxStateToProps)(MainColumn)
