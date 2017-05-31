import React from 'react'
import { connect } from 'react-redux'
import classnames from 'classnames'
import Button from './button/button'
import MainColumn from './main/main-column'
import LyricColumn from './lyric/lyric-column'
import AudioBanner from './audio/audio-banner'
import AudioTimer from './audio/audio-timer'
import AudioSection from './audio/audio-section'
import CarouselSection from './carousel/carousel-section'
import DotsSection from './dots/dots-section'
import ScoresTipsSection from './main/scores-tips-section'
import OverviewToggle from './overview/overview-toggle'
import TitleToggle from './title/title-toggle'
import AudioTransitionPopup from './audio/audio-transition-popup'
import OverviewTransitionPopup from './overview/overview-transition-popup'
import AnnotationTransitionPopup from './annotation/annotation-transition-popup'
import ScoreTransitionPopup from './score/score-transition-popup'
import TitleTransitionPopup from './title/title-transition-popup'
import WikiTransitionPopup from './wiki/wiki-transition-popup'
import { getWikiUrl } from '../helpers/logic-helper'
import { LYRIC_SECTION_EXPAND_KEY } from '../constants/access'

// Pass Redux state into component props.
const passReduxStateToProps = ({
    selectedAnnotationIndex, selectedCarouselIndex, selectedDotKeys, selectedDotsIndex, selectedLyricColumnIndex, selectedNavIndex, isHeightlessLyricColumn, isHiddenNav, isScoresTipsInMain, isTitleInAudio
}) => ({
    selectedAnnotationIndex, selectedCarouselIndex, selectedDotKeys, selectedDotsIndex, selectedLyricColumnIndex, selectedNavIndex, isHeightlessLyricColumn, isHiddenNav, isScoresTipsInMain, isTitleInAudio
})

/*************
 * CONTAINER *
 *************/

const Live = (props) => {

    const selectedWikiUrl = getWikiUrl(props)

    return (
        <LiveView {...props}
            selectedWikiUrl={selectedWikiUrl}
        />
    )
}

/****************
 * PRESENTATION *
 ****************/

const LiveView = ({

    // From props.
    deviceIndex,
    windowHeight,
    windowWidth,
    appMounted,

    isPhone,
    isDesktop,
    annotationObject,
    popupLogueOverview,
    popupSongOverview,
    isPlaying,
    isLogue,
    selectedAnnotationIndex,
    selectedCarouselIndex,
    selectedDotKeys,
    selectedDotsIndex,
    selectedLyricColumnIndex,
    selectedNavIndex,
    selectedWikiUrl,
    shownBookColumnIndex,
    accessedAnnotationIndex,

    interactivatedVerseIndex,

    sliderMoving,
    sliderMousedOrTouched,
    sliderRatio,
    sliderVerseIndex,
    showOneOfTwoLyricColumns,
    isLyricExpanded,
    isLyricExpandable,
    isHeightlessLyricColumn,
    isHiddenNav,
    showSingleBookColumn,
    shrinkNavIcon,
    isScoresTipsInMain,
    isTitleInAudio,
    showOverlay,
    isOverviewShown,
    isOverlaidAnnotation,
    isSelectedVerseAbove,
    isSelectedVerseBelow,

    lyricSectionRef,
    scoreSectionRef,
    wikiSectionRef,

    handlePlayerTimeChange,

    handlePopupContainerClick,
    handleScrollAfterLyricRerender,

    handleAnnotationPrevious,
    handleAnnotationNext,
    handleAnnotationWikiSelect,
    handleAnnotationPortalSelect,
    handleAudioPlay,
    handleAudioPreviousSong,
    handleAudioNextSong,
    handleAudioOptionsToggle,
    handleAudioSliderTouchBegin,
    handleDotToggle,
    handleDotsSectionToggle,
    handleNavExpand,
    handleNavSongSelect,
    handleNavBookSelect,
    handleLyricColumnSelect,
    handleLyricSectionExpand,
    handleLyricAnnotationSelect,
    handleLyricSectionScroll,
    handleLyricPlay,
    handleLyricVerseSelect,
    handleOverviewToggle,
    handlePopupFocus,
    handleScoreToggle,
    handleTipsToggle,
    handleTitleToggle,
    handleVerseBarSelect,
    handleVerseBarWheel,
    handleVerseElementSelect,
    handleVerseElementSlide,
    handleVerseInteractivate,
    handleWikiToggle,
    handleCarouselToggle,
    stopPropagation

}) => {

    const timerInAudio = showOverlay && isPhone,

        titleToggleProps = {
            handleTitleToggle
        },
        titleToggleChild = (
            <TitleToggle {...titleToggleProps} />
        ),

        annotationPopupProps = {
            annotationObject,
            // accessedAnnotationAnchorIndex,
            handleAnnotationPrevious,
            handleAnnotationNext,
            handlePopupContainerClick,

            handleAnnotationPortalSelect,
            handleAnnotationWikiSelect
        },

        audioTimerProps = {
            isLogue
        },
        audioTimerChild = (
            <AudioTimer {...audioTimerProps} />
        ),
        audioBannerProps = {
            interactivatedVerseIndex,
            sliderVerseIndex,
            sliderRatio,
            sliderMousedOrTouched,
            handlePlayerTimeChange,
            handleAudioSliderTouchBegin,

            audioTimerChild
        },
        audioBannerChild = (
            <AudioBanner {...audioBannerProps} />
        ),
        audioSectionProps = {
            isPhone,
            isPlaying,

            handleAudioPlay,
            handleAudioPreviousSong,
            handleAudioNextSong,
            handleAudioOptionsToggle,
            handlePopupContainerClick,

            audioBannerProps,
            audioTimerChild,
            audioBannerChild,
            titleToggleChild
        },
        audioSectionChild = (
            <AudioSection {...audioSectionProps} />
        ),

        carouselSectionProps = {
            accessedAnnotationIndex,

            handleLyricAnnotationSelect,
            handleAnnotationPrevious,
            handleAnnotationNext,
            handleAnnotationWikiSelect,
            handleAnnotationPortalSelect
        },
        carouselChild = !isHiddenNav && (
            <CarouselSection {...carouselSectionProps} />
        ),

        dotsSectionProps = {
            // accessedDotIndex,
            handlePopupContainerClick,
            handleDotToggle,
            stopPropagation
        },

        lyricColumnProps = {
            deviceIndex,
            appMounted,

            // For lyrics line width reset.
            isPortrait: windowHeight > windowWidth,

            // For lyric expand button.
            isLyricExpanded,

            sliderMousedOrTouched,
            sliderVerseIndex,
            isLogue,
            showOneOfTwoLyricColumns,
            isPlaying,
            accessedAnnotationIndex,
            interactivatedVerseIndex,

            lyricSectionRef,

            handleLyricAnnotationSelect,
            handleLyricColumnSelect,
            handleLyricSectionScroll,
            handleLyricPlay,
            handleLyricVerseSelect,
            handleVerseBarSelect,
            handleVerseBarWheel,
            handleVerseInteractivate,
            handleVerseElementSelect,
            handleVerseElementSlide,
            handleScrollAfterLyricRerender
        },

        lyricExpandButtonChild = isLyricExpandable ? (
                <div className="lyric-button-block expand-button-block">
                    <Button
                        accessKey={LYRIC_SECTION_EXPAND_KEY}
                        iconText={isLyricExpanded ? '-' : '+'}
                        isLarge={true}
                        handleClick={handleLyricSectionExpand}
                    />
                </div>
            ) : null,

        mainColumnProps = {
            isOverlaidAnnotation,

            isPhone,
            isDesktop,

            showSingleBookColumn,
            shownBookColumnIndex,
            selectedWikiUrl,

            handleCarouselToggle,
            handleDotsSectionToggle,
            handleNavExpand,
            handleNavSongSelect,
            handleNavBookSelect,
            handleTipsToggle,

            audioBannerChild,
            audioSectionChild,
            titleToggleChild
        },

        overviewToggleProps = {
            handleOverviewToggle
        },

        overviewPopupProps = {
            isPhone,
            isLogue,
            handlePopupContainerClick,

            // For toggle in popup in phone.
            handleOverviewToggle
        },

        scoresTipsSectionProps = {
            isPhone,

            handleScoreToggle,
            handleTipsToggle
        },

        scorePopupProps = {
            isPhone,
            scoreSectionRef,
            handleScoreToggle,
            handlePopupFocus
        },

        titlePopupProps = {
            handleTitleToggle,
            handlePopupFocus
        },

        wikiPopupProps = {
            selectedWikiUrl,
            wikiSectionRef,
            handleWikiToggle,
            handlePopupFocus
        }

    return (
        <div className={classnames(
            'live-app',
            isLogue ? 'is-logue' : 'is-song',
            isLyricExpanded ? 'lyric-expanded' : 'lyric-collapsed',
            isOverlaidAnnotation ? 'overlaid-annotation' : 'side-annotation',
            sliderMoving ? 'slider-moving' : 'slider-not-moving',
            interactivatedVerseIndex < 0 ? 'is-not-verse-interactivated' : 'is-verse-interactivated',
            selectedAnnotationIndex ? 'annotation-shown' : 'annotation-hidden',
            selectedCarouselIndex ? 'carousel-expanded' : 'carousel-collapsed',
            selectedDotsIndex ? 'dots-section-shown' : 'dots-section-hidden',
            selectedNavIndex ? 'nav-expanded' : 'nav-collapsed',
            shrinkNavIcon ? 'shrink-nav-icon' : 'static-nav-icon',
            showOverlay ? 'overlay-shown' : 'overlay-hidden',
            { 'show-only-left': showOneOfTwoLyricColumns && selectedLyricColumnIndex === 0,
              'show-only-right': showOneOfTwoLyricColumns && selectedLyricColumnIndex === 1,
              'timer-in-audio': timerInAudio,
              'title-in-audio': isTitleInAudio,
              'heightless-lyric': isHeightlessLyricColumn,
              'overview-shown': isOverviewShown,
              'verse-above': isSelectedVerseAbove,
              'verse-below': isSelectedVerseBelow,
              'verse-bar-hidden': !isSelectedVerseAbove && !isSelectedVerseBelow,
              'scores-tips-in-main': isScoresTipsInMain },
            selectedDotKeys
        )}>
            {/* Ideal for song and logue to not be in separate overview subfields. */}
            <div className="column overview-logue-column">
                <OverviewTransitionPopup {...overviewPopupProps}
                    inOverviewSubfield={false}
                    overviewText={popupLogueOverview}
                />
            </div>
            <MainColumn {...mainColumnProps}
                annotationPopupChild={ <AnnotationTransitionPopup {...annotationPopupProps} /> }
                carouselChild={carouselChild}
                dotsSectionChild={ <DotsSection {...dotsSectionProps} /> }
                overviewPopupChild={
                    <OverviewTransitionPopup {...overviewPopupProps}
                        inOverviewSubfield={true}
                        overviewText={popupSongOverview}
                        overviewButtonChild={ <OverviewToggle {...overviewToggleProps} /> }
                    />
                }
                overviewButtonChild={ <OverviewToggle {...overviewToggleProps} /> }
                lyricExpandButtonChild={lyricExpandButtonChild}
                scoresTipsSectionChild={ <ScoresTipsSection {...scoresTipsSectionProps} /> }
            />

            <LyricColumn {...lyricColumnProps}
                lyricExpandButtonChild={lyricExpandButtonChild}
            />

            {
                <div className="overlay-popup-subfield">
                    <div className="overlay-popup-block audio-popup-block">
                        <AudioTransitionPopup {...audioSectionProps}
                            timerInAudio={timerInAudio}
                            isTitleInAudio={false}
                            showOverlay={showOverlay}
                        />
                    </div>
                    <div className="overlay-popup-block main-popup-block">
                        <TitleTransitionPopup {...titlePopupProps} />
                        <ScoreTransitionPopup {...scorePopupProps} />
                        <WikiTransitionPopup {...wikiPopupProps} />
                        {isOverlaidAnnotation &&
                            <AnnotationTransitionPopup {...annotationPopupProps} />
                        }
                    </div>
                </div>
            }
        </div>
    )
}

export default connect(passReduxStateToProps)(Live)
