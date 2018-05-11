/**
 * Component that routes event handlers to their components. Knows no state, so
 * should not update.
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Theatre from '../Theatre/Theatre'
import Main from '../Main/Main'
import Menu from './Menu'
import OverlayPopups from './OverlayPopups'

import OverviewLogue from './OverviewLogue'
import LyricColumn from '../LyricColumn/LyricColumn'

class Live extends Component {

    static propTypes = {
        // From parent.
        lyricRef: PropTypes.func.isRequired,
        scoreRef: PropTypes.func.isRequired,
        wikiRef: PropTypes.func.isRequired,

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
        handleDotSelect: PropTypes.func.isRequired,
        handleDotsSectionToggle: PropTypes.func.isRequired,
        handleNavSongSelect: PropTypes.func.isRequired,
        handleNavBookSelect: PropTypes.func.isRequired,
        handleLyricColumnSelect: PropTypes.func.isRequired,
        handleLyricSectionExpand: PropTypes.func.isRequired,
        handleLyricAnnotationSelect: PropTypes.func.isRequired,
        handleLyricWheel: PropTypes.func.isRequired,
        handleLyricAutoScroll: PropTypes.func.isRequired,
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
        handleVerseElementSelectOrSlide: PropTypes.func.isRequired,
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
        const { lyricRef,
                scoreRef,
                wikiRef,

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
                handleDotSelect,
                handleDotsSectionToggle,
                handleNavSongSelect,
                handleNavBookSelect,
                handleLyricColumnSelect,
                handleLyricSectionExpand,
                handleLyricAnnotationSelect,
                handleLyricWheel,
                handleLyricAutoScroll,
                handleLyricPlay,
                handleLyricVerseSelect,
                handleOverviewToggle,
                handleScoreToggle,
                handleTipsToggle,
                handleTitleToggle,
                handleVerseBarSelect,
                handleVerseBarWheel,
                handleVerseElementSelectOrSlide,
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
            audioHandlers = {
                handleAudioPlay,
                handleAudioPreviousSong,
                handleAudioNextSong,
                handleAudioOptionsToggle,
                handlePopupContainerClick,

                audioBannerHandlers,
                titleToggleHandlers
            },

            lyricColumnHandlers = {
                lyricRef,
                handleLyricAnnotationSelect,
                handleLyricColumnSelect,
                handleLyricSectionExpand,
                handleLyricWheel,
                handleLyricAutoScroll,
                handleLyricPlay,
                handleLyricVerseSelect,
                handleVerseBarSelect,
                handleVerseBarWheel,
                handleVerseInteractivate,
                handleVerseElementSelectOrSlide,
                handleScrollAfterLyricRerender
            },

            overviewPopupHandlers = {
                handleOverviewToggle,
                handlePopupContainerClick
            },

            scoresTipsHandlers = {
                handleScoreToggle,
                handleTipsToggle
            },

            scorePopupHandlers = {
                scoreRef,
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
                wikiRef,
                handleWikiToggle
            },

            mainColumnHandlers = {
                handleCarouselNavToggle,
                handleLyricSectionExpand,

                annotationPopupHandlers,
                overviewPopupHandlers,
                scoresTipsHandlers,
                tipsPopupHandlers,

                carouselSectionHandlers: {
                    handleLyricAnnotationSelect,
                    handleAnnotationPrevious,
                    handleAnnotationNext,
                    handleAnnotationWikiSelect,
                    handleAnnotationPortalSelect,
                    handlePopupContainerClick
                },
                leftShelfToggleSectionHandlers: {
                    handleDotsSectionToggle,
                    handleOverviewToggle
                },
                dotsSectionHandlers: {
                    handlePopupContainerClick,
                    handleDotSelect,
                    stopPropagation
                },
                navSectionHandlers: {
                    handleNavSongSelect,
                    handleNavBookSelect
                }
            },

            menuFieldHandlers = {
                titleToggleHandlers,
                audioHandlers,
                scoresTipsHandlers,
                audioBannerHandlers
            }

        return (
            <div className="Live">

                <div className="PopupOverlay" />

                <Theatre />

                <Main {...mainColumnHandlers} />

                <OverviewLogue
                    overviewPopupHandlers={overviewPopupHandlers}
                />

                <LyricColumn {...lyricColumnHandlers} />

                <OverlayPopups
                    annotationPopupHandlers={annotationPopupHandlers}
                    titlePopupHandlers={titlePopupHandlers}
                    scorePopupHandlers={scorePopupHandlers}
                    wikiPopupHandlers={wikiPopupHandlers}
                />

                <Menu {...menuFieldHandlers} />

                {/* Prevent popup interaction when slider is touched. */}
                <div className="TouchOverlay" />

            </div>
        )
    }
}

export default Live
