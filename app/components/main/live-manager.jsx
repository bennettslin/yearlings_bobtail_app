/**
 * Component that routes event handlers to their components. Knows no state, so
 * should not update.
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TheatreSection from '../theatre/theatre-section'
import MainColumn from './main-column'
import LyricColumn from '../lyric/lyric-column'
import AudioPopup from '../audio/audio-popup'
import OverviewPopup from '../overview/overview-popup'
import AnnotationPopup from '../annotation/annotation-popup'
import ScorePopup from '../score/score-popup'
import TitlePopup from '../title/title-popup'
import WikiPopup from '../wiki/wiki-popup'

class LiveManager extends Component {

    static propTypes = {
        // From parent.
        lyricSectionRef: PropTypes.func.isRequired,
        scoreSectionRef: PropTypes.func.isRequired,
        wikiSectionRef: PropTypes.func.isRequired,

        handleAnnotationPrevious: PropTypes.func.isRequired,
        handleAnnotationNext: PropTypes.func.isRequired,
        handleAnnotationWikiSelect: PropTypes.func.isRequired,
        handleAnnotationPortalSelect: PropTypes.func.isRequired,
        handleAudioPlay: PropTypes.func.isRequired,
        handleAudioPreviousSong: PropTypes.func.isRequired,
        handleAudioNextSong: PropTypes.func.isRequired,
        handleAudioOptionsToggle: PropTypes.func.isRequired,
        handleSliderTouchBegin: PropTypes.func.isRequired,
        handleCarouselNavToggle: PropTypes.func.isRequired,
        handleDotToggle: PropTypes.func.isRequired,
        handleDotsSectionToggle: PropTypes.func.isRequired,
        handleNavSongSelect: PropTypes.func.isRequired,
        handleNavBookSelect: PropTypes.func.isRequired,
        handleLyricColumnSelect: PropTypes.func.isRequired,
        handleLyricSectionExpand: PropTypes.func.isRequired,
        handleLyricAnnotationSelect: PropTypes.func.isRequired,
        handleLyricSectionScroll: PropTypes.func.isRequired,
        handleLyricPlay: PropTypes.func.isRequired,
        handleLyricVerseSelect: PropTypes.func.isRequired,
        handleOverviewToggle: PropTypes.func.isRequired,
        handlePopupContainerClick: PropTypes.func.isRequired,
        handleScoreToggle: PropTypes.func.isRequired,
        handleScrollAfterLyricRerender: PropTypes.func.isRequired,
        handleTipsToggle: PropTypes.func.isRequired,
        handleTitleToggle: PropTypes.func.isRequired,
        handleVerseBarSelect: PropTypes.func.isRequired,
        handleVerseBarWheel: PropTypes.func.isRequired,
        handleVerseElementSelect: PropTypes.func.isRequired,
        handleVerseElementSlide: PropTypes.func.isRequired,
        handleVerseInteractivate: PropTypes.func.isRequired,
        handleWikiToggle: PropTypes.func.isRequired,
        stopPropagation: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.focusBody()
    }

    shouldComponentUpdate() {
        // Not sure why clicking on dot or anchor calls this?
        return false
    }

    render() {
        const { lyricSectionRef,
                scoreSectionRef,
                wikiSectionRef,

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
                handleSliderTouchBegin,
                handleCarouselNavToggle,
                handleDotToggle,
                handleDotsSectionToggle,
                handleNavSongSelect,
                handleNavBookSelect,
                handleLyricColumnSelect,
                handleLyricSectionExpand,
                handleLyricAnnotationSelect,
                handleLyricSectionScroll,
                handleLyricPlay,
                handleLyricVerseSelect,
                handleOverviewToggle,
                handleScoreToggle,
                handleTipsToggle,
                handleTitleToggle,
                handleVerseBarSelect,
                handleVerseBarWheel,
                handleVerseElementSelect,
                handleVerseElementSlide,
                handleVerseInteractivate,
                handleWikiToggle,
                stopPropagation } = this.props,

            titleToggleHandlers = {
                handleTitleToggle
            },

            annotationPopupHandlers = {
                handleAnnotationPrevious,
                handleAnnotationNext,
                handlePopupContainerClick,
                handleAnnotationPortalSelect,
                handleAnnotationWikiSelect
            },

            audioBannerHandlers = {
                handleSliderTouchBegin
            },
            audioSectionHandlers = {
                handleAudioPlay,
                handleAudioPreviousSong,
                handleAudioNextSong,
                handleAudioOptionsToggle,
                handlePopupContainerClick,

                audioBannerHandlers,
                titleToggleHandlers
            },

            lyricColumnHandlers = {
                lyricSectionRef,
                handleLyricAnnotationSelect,
                handleLyricColumnSelect,
                handleLyricSectionExpand,
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

            overviewPopupHandlers = {
                handleOverviewToggle,
                handlePopupContainerClick
            },

            scoresTipsSectionHandlers = {
                handleScoreToggle,
                handleTipsToggle
            },

            scorePopupHandlers = {
                scoreSectionRef,
                handleScoreToggle
            },

            tipsPopupHandlers = {
                handleTipsToggle,
                handlePopupContainerClick
            },

            titlePopupHandlers = {
                handleTitleToggle,
                handlePopupContainerClick
            },

            wikiPopupHandlers = {
                wikiSectionRef,
                handleWikiToggle
            },

            mainColumnHandlers = {
                handleCarouselNavToggle,
                handleLyricSectionExpand,

                annotationPopupHandlers,
                audioBannerHandlers,
                overviewPopupHandlers,
                scoresTipsSectionHandlers,
                tipsPopupHandlers,

                carouselSectionHandlers: {
                    handleLyricAnnotationSelect,
                    handleAnnotationPrevious,
                    handleAnnotationNext,
                    handleAnnotationWikiSelect,
                    handleAnnotationPortalSelect,
                    handlePopupContainerClick
                },
                dotsOverviewToggleSectionHandlers: {
                    handleDotsSectionToggle,
                    handleOverviewToggle
                },
                dotsSectionHandlers: {
                    handlePopupContainerClick,
                    handleDotToggle,
                    stopPropagation
                },
                navSectionHandlers: {
                    handleNavSongSelect,
                    handleNavBookSelect
                },

                menuFieldHandlers: {
                    audioSectionHandlers,
                    scoresTipsSectionHandlers,
                    titleToggleHandlers
                }
            }

        return (
            <div className="live-manager">

                <TheatreSection />

                <MainColumn {...mainColumnHandlers} />

                <div className="column overview-logue-column">
                    <OverviewPopup {...overviewPopupHandlers}
                        inOverviewSubfield={false}
                    />
                </div>

                <LyricColumn {...lyricColumnHandlers} />

                <div className="overlay-popup-subfield">
                    <div className="overlay-popup-block audio-popup-block">
                        <AudioPopup {...audioSectionHandlers} />
                    </div>
                    <div className="overlay-popup-block main-popup-block">
                        <AnnotationPopup {...annotationPopupHandlers}
                            isOverlayAnnotation={true}
                        />
                        <TitlePopup {...titlePopupHandlers} />
                        <ScorePopup {...scorePopupHandlers} />
                        <WikiPopup {...wikiPopupHandlers} />
                    </div>
                </div>
            </div>
        )
    }
}

export default LiveManager
