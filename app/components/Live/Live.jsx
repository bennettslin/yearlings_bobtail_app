/**
 * Component that routes event handlers to their components. Knows no state, so
 * should not update.
 */

import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Theatre from '../Theatre/Theatre'

import Main from '../Main/Main'
import Menu from './Menu'
import OverlayPopups from './OverlayPopups'

import OverviewLogue from './OverviewLogue'
import LyricColumn from '../LyricColumn/LyricColumn'

import {
    getNextStateForRenderedLive,
    getNextStateForRenderedTheatre,
    getNextStateForRenderedMain,
    getNextStateForRenderedSlider,
    getNextStateForRenderedLyric,
    getNextStateForRenderedCarousel,
    getOrganisedHandlersFromProps
} from './liveHelper'

const mapStateToProps = ({
    isRenderable
}) => ({
    isRenderable
})

class Live extends Component {

    constructor(props) {
        super(props)

        this.state = {
            canTheatreRender: false,
            canMainRender: false,
            canSliderRender: false,
            canLyricRender: false,
            canCarouselRender: false,
            canSceneRender: false
        }

        this.theatreDidRender = this.theatreDidRender.bind(this)
        this.mainDidRender = this.mainDidRender.bind(this)
        this.sliderDidRender = this.sliderDidRender.bind(this)
        this.lyricDidRender = this.lyricDidRender.bind(this)
        this.carouselDidRender = this.carouselDidRender.bind(this)
        this.sceneDidRender = this.sceneDidRender.bind(this)
    }

    componentDidMount() {
        this.setState(getNextStateForRenderedLive())
    }

    componentDidUpdate(prevProps) {

        // Is unrenderable after song change.
        if (!this.props.isRenderable && prevProps.isRenderable) {
            console.warn('Live registering unrenderable.')
            this.setState({
                canMainRender: false,
                canSliderRender: false,
                canLyricRender: false,
                canCarouselRender: false,
                canSceneRender: false
            })
        }

        // Is renderable after timeout.
        if (this.props.isRenderable && !prevProps.isRenderable) {
            console.warn('Live registering renderable.')
            this.setState({
                canMainRender: true
            })
        }
    }

    theatreDidRender() {
        this.setState(getNextStateForRenderedTheatre())
    }

    mainDidRender() {
        this.setState(getNextStateForRenderedMain())
    }

    sliderDidRender() {
        this.setState(getNextStateForRenderedSlider())
    }

    lyricDidRender() {
        this.setState(getNextStateForRenderedLyric())
    }

    carouselDidRender() {
        this.setState(getNextStateForRenderedCarousel())
    }

    sceneDidRender() {
        console.warn('Sequenced rendering complete.')
    }

    render() {
        const {
            annotationPopupHandlers,
            lyricColumnHandlers,
            mainColumnHandlers,
            menuFieldHandlers,
            overviewPopupHandlers,
            scorePopupHandlers,
            theatreHandlers,
            titlePopupHandlers,
            wikiPopupHandlers
        } = getOrganisedHandlersFromProps(this.props)

        return (
            <Fragment>
                <div className="PopupOverlay" />

                <Theatre {...theatreHandlers}
                    canTheatreRender={this.state.canTheatreRender}
                    canSceneRender={this.state.canSceneRender}
                    theatreDidRender={this.theatreDidRender}
                    sceneDidRender={this.sceneDidRender}
                />

                <Main {...mainColumnHandlers}
                    canMainRender={this.state.canMainRender}
                    canCarouselRender={this.state.canCarouselRender}
                    mainDidRender={this.mainDidRender}
                    carouselDidRender={this.carouselDidRender}
                />

                <OverviewLogue
                    overviewPopupHandlers={overviewPopupHandlers}
                />

                <LyricColumn {...lyricColumnHandlers}
                    canLyricRender={this.state.canLyricRender}
                    lyricDidRender={this.lyricDidRender}
                />

                <OverlayPopups
                    annotationPopupHandlers={annotationPopupHandlers}
                    titlePopupHandlers={titlePopupHandlers}
                    scorePopupHandlers={scorePopupHandlers}
                    wikiPopupHandlers={wikiPopupHandlers}
                />

                <Menu {...menuFieldHandlers}
                    canSliderRender={this.state.canSliderRender}
                    sliderDidRender={this.sliderDidRender}
                />

                {/* Prevent popup interaction when slider is touched. */}
                <div className="TouchOverlay" />
            </Fragment>
        )
    }
}

// I'd rather have this at the bottom since it's so long.
Live.propTypes = {
    // Through Redux.
    isRenderable: PropTypes.bool.isRequired,

    // From parent.
    focusElementForAccess: PropTypes.func.isRequired,

    getLyricRef: PropTypes.func.isRequired,
    getScoreRef: PropTypes.func.isRequired,
    getWikiRef: PropTypes.func.isRequired,
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

export default connect(mapStateToProps)(Live)
