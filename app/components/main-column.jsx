import React from 'react'
import Button from './button/button'
import MenuField from './menu-field'
import NavSection from './nav/nav-section'
import DotsOverviewToggleSection from './dots-overview-toggle-section'
import { CAROUSEL_TOGGLE_KEY } from '../helpers/constants'

/*************
 * CONTAINER *
 *************/

const MainColumn = (props) => {

    return (
        <MainColumnView {...props} />
    )
}

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
    scoresTipsOutsideMenu,

    songs,
    title,
    bookStartingIndices,
    showSingleBookColumn,
    shrinkNavIcon,

    selectedDotsIndex,
    selectedNavIndex,
    selectedBookColumnIndex,
    selectedSongIndex,
    selectedCarouselIndex,

    accessedOn,
    accessedSongIndex,

    handleCarouselToggle,
    handleDotsSectionToggle,
    handleNavExpand,
    handleNavSongSelect,
    handleNavBookSelect,
    handleTitleSelect,

    annotationPopupChild,
    dotsSectionChild,
    overviewPopupChild,
    overviewButtonChild,
    lyricExpandButtonChild,
    scoresTipsSectionChild,
    audioBannerChild,
    audioSectionChild,
    carouselChild

}) => {
    const menuFieldProps = {
            title,
            titleInAudio,
            scoresTipsOutsideMenu,

            handleTitleSelect,

            audioSectionChild,
            scoresTipsSectionChild
        },
        dotsOverviewToggleSectionProps = {
            selectedDotsIndex,

            handleDotsSectionToggle,

            overviewButtonChild,
            dotsSectionChild
        },
        navSectionProps = {
            songs,
            bookStartingIndices,
            showSingleBookColumn,
            shrinkNavIcon,
            selectedSongIndex,
            selectedNavIndex,
            selectedBookColumnIndex,
            accessedOn,
            accessedSongIndex,

            handleNavExpand,
            handleNavSongSelect,
            handleNavBookSelect
        }

    return (
        <div className="column main-column no-scroll-into-view">
            <MenuField {...menuFieldProps} />
            <div className="field centre-field no-scroll-into-view">

                {!isOverlaidAnnotation &&
                    <div className="field popup-field">
                        <div className="subfield annotation-subfield">
                            {annotationPopupChild}
                        </div>
                    </div>
                }

                <div className="subfield dots-overview-subfield no-scroll-into-view">
                    {carouselChild}
                    <DotsOverviewToggleSection {...dotsOverviewToggleSectionProps}
                        scoresTipsSectionChild={
                            isDesktop && scoresTipsOutsideMenu &&
                                scoresTipsSectionChild
                        }
                    />
                    <div className="overview-popup-container">
                        {overviewPopupChild}
                    </div>

                    {lyricExpandButtonChild}

                    <div className="dots-subfield">
                        {dotsSectionChild}
                    </div>
                    {!isDesktop && scoresTipsOutsideMenu && scoresTipsSectionChild}
                </div>

                {isPhone &&
                    <div className="audio-banner-custom-subfield">
                        {audioBannerChild}
                    </div>
                }

                {!isHiddenNav &&
                    <div className="carousel-toggle-button-block">
                        <Button
                            buttonName="carousel-toggle"
                            iconText={selectedCarouselIndex}
                            accessKey={CAROUSEL_TOGGLE_KEY}
                            isLarge={true}
                            handleClick={handleCarouselToggle}
                        />
                    </div>
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

export default MainColumn
