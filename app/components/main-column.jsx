import React from 'react'
import MenuField from './menu-field'
import NavSection from './nav/nav-section'
import DotsOverviewToggleSection from './dots-overview-toggle-section'

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

    accessedOn,
    accessedSectionKey,
    nextSectionKey,
    accessedSongIndex,

    onSongClick,
    onNavExpandClick,
    onBookColumnClick,
    onDotsExpandClick,

    annotationPopupChild,
    dotsSectionChild,
    overviewPopupChild,
    overviewButtonChild,
    lyricExpandButtonChild,
    scoresTipsSectionChild,
    audioBannerChild,
    audioSectionChild

}) => {
    const menuFieldProps = {
            titleInAudio,
            scoresTipsOutsideMenu,

            title,
            accessedSongIndex,
            accessedOn,
            accessedSectionKey,
            nextSectionKey,
            onSongClick,

            audioSectionChild,
            scoresTipsSectionChild
        },
        dotsOverviewToggleSectionProps = {
            selectedDotsIndex,
            onDotsExpandClick,
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
            accessedSectionKey,
            nextSectionKey,
            accessedSongIndex,
            onSongClick,
            onNavExpandClick,
            onBookColumnClick
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
                    <div className="nav-custom-subfield">
                        <NavSection {...navSectionProps} />
                    </div>
                }
            </div>
        </div>
    )
}

export default MainColumn
