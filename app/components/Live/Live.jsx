/**
 * Component that routes event handlers to their components. Knows no state, so
 * should not update.
 */

import React, { Component, Fragment } from 'react'
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
        getVerseRef: PropTypes.func.isRequired,

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
        handleSetVerseElement: PropTypes.func.isRequired,
        handleVerseInteractivate: PropTypes.func.isRequired,
        handleWikiToggle: PropTypes.func.isRequired,
        stopPropagation: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props)

        this.state = {
            isLiveRendered: false,
            isTheatreRendered: false,
            isMainRendered: false,
            isSliderRendered: false,
            isLyricRendered: false,
            isCarouselRendered: false,
            isSceneRendered: false
        }

        this.theatreDidRender = this.theatreDidRender.bind(this)
        this.mainDidRender = this.mainDidRender.bind(this)
        this.sliderDidRender = this.sliderDidRender.bind(this)
        this.lyricDidRender = this.lyricDidRender.bind(this)
        this.carouselDidRender = this.carouselDidRender.bind(this)
        this.sceneDidRender = this.sceneDidRender.bind(this)
    }

    componentDidMount() {
        this.props.focusBody()

        this.setState({
            isLiveRendered: true
        })
    }

    shouldComponentUpdate(prevProps, prevState) {
        // Not sure why clicking on dot or anchor calls this?
        return (
            // TODO: Can this use lodash's isEqual?
            this.state.isLiveRendered !== prevState.isLiveRendered ||
            this.state.isTheatreRendered !== prevState.isTheatreRendered ||
            this.state.isMainRendered !== prevState.isMainRendered ||
            this.state.isSliderRendered !== prevState.isSliderRendered ||
            this.state.isLyricRendered !== prevState.isLyricRendered ||
            this.state.isCarouselRendered !== prevState.isCarouselRendered ||
            this.state.isSceneRendered !== prevState.isSceneRendered
        )
    }

    theatreDidRender() {
        this.setState({
            isTheatreRendered: true
        })
    }

    mainDidRender() {
        this.setState({
            isMainRendered: true
        })
    }

    sliderDidRender() {
        this.setState({
            isSliderRendered: true
        })
    }

    lyricDidRender() {
        this.setState({
            isLyricRendered: true
        })
    }

    carouselDidRender() {
        this.setState({
            isCarouselRendered: true
        })
    }

    sceneDidRender() {
        this.setState({
            isSceneRendered: true
        })
    }

    render() {
        const { lyricRef,
                scoreRef,
                wikiRef,
                getCarouselAnnotationRef,
                getVerseRef,

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
                handleSetVerseElement,
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
                handleSliderTouchBegin,
                sliderDidRender: this.sliderDidRender
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
                getVerseRef,
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
                handleSetVerseElement,
                handleScrollAfterLyricRerender,
                lyricDidRender: this.lyricDidRender
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
                    handlePopupContainerClick,
                    getCarouselAnnotationRef,
                    carouselDidRender: this.carouselDidRender
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
                },

                mainDidRender: this.mainDidRender
            },

            menuFieldHandlers = {
                titleToggleHandlers,
                audioHandlers,
                scoresTipsHandlers,
                audioBannerHandlers
            },

            theatreHandlers = {
                sceneDidRender: this.sceneDidRender,
                theatreDidRender: this.theatreDidRender
            },

            {
                isLiveRendered,
                isTheatreRendered,
                isMainRendered,
                isSliderRendered,
                isLyricRendered,
                isCarouselRendered
            } = this.state

        return (
            <Fragment>

                <div className="PopupOverlay" />

                <Theatre {...theatreHandlers}
                    canTheatreRender={isLiveRendered}
                    canSceneRender={isCarouselRendered}
                />

                <Main {...mainColumnHandlers}
                    canMainRender={isTheatreRendered}
                    canCarouselRender={isLyricRendered}
                />

                <OverviewLogue
                    overviewPopupHandlers={overviewPopupHandlers}
                />

                <LyricColumn {...lyricColumnHandlers}
                    canLyricRender={isSliderRendered}
                />

                <OverlayPopups
                    annotationPopupHandlers={annotationPopupHandlers}
                    titlePopupHandlers={titlePopupHandlers}
                    scorePopupHandlers={scorePopupHandlers}
                    wikiPopupHandlers={wikiPopupHandlers}
                />

                <Menu {...menuFieldHandlers}
                    canSliderRender={isMainRendered}
                />

                {/* Prevent popup interaction when slider is touched. */}
                <div className="TouchOverlay" />

            </Fragment>
        )
    }
}

export default Live
