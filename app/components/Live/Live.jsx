/**
 * Component that routes event handlers to their components. Knows no state, so
 * should not update.
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import {
    setCanRenderTheatre,
    setCanRenderMain,
    setCanRenderSlider,
    setCanRenderLyric,
    setCanRenderCarousel,
    setCanRenderScene
} from '../../redux/actions/render'

import Theatre from '../Theatre/Theatre'

import Main from '../Main/Main'
import Menu from './Menu'
import OverlayPopups from './OverlayPopups'

import OverviewLogue from './OverviewLogue'
import LyricColumn from '../LyricColumn/LyricColumn'

import {
    getOrganisedHandlersFromProps
} from './liveHelper'

const mapStateToProps = ({
    isRenderable,
    canTheatreRender,
    canMainRender,
    canSliderRender,
    canLyricRender,
    canCarouselRender,
    canSceneRender
}) => ({
    isRenderable,
    canTheatreRender,
    canMainRender,
    canSliderRender,
    canLyricRender,
    canCarouselRender,
    canSceneRender
})

class Live extends Component {

    // Prop types are on the bottom because the list is too long.

    constructor(props) {
        super(props)

        this.theatreDidRender = this.theatreDidRender.bind(this)
        this.mainDidRender = this.mainDidRender.bind(this)
        this.sliderDidRender = this.sliderDidRender.bind(this)
        this.lyricDidRender = this.lyricDidRender.bind(this)
        this.carouselDidRender = this.carouselDidRender.bind(this)
        this.sceneDidRender = this.sceneDidRender.bind(this)
    }

    componentDidMount() {
        this.props.setCanRenderTheatre(true)
        this.unrenderedTime = Date.now()
    }

    componentDidUpdate(prevProps) {

        // Is unrenderable after song change.
        if (!this.props.isRenderable && prevProps.isRenderable) {
            this.unrenderedTime = Date.now()

            console.warn('Live unrenderable.')
            this.props.setCanRenderMain(false)
            this.props.setCanRenderSlider(false)
            this.props.setCanRenderLyric(false)
            this.props.setCanRenderCarousel(false)
            this.props.setCanRenderScene(false)
        }

        // Is renderable after timeout.
        if (this.props.isRenderable && !prevProps.isRenderable) {
            console.warn(`Live renderable after ${
                ((Date.now() - this.unrenderedTime) / 1000).toFixed(2)
            } seconds.`)

            this.props.setCanRenderMain(true)
        }
    }

    theatreDidRender() {
        this.props.setCanRenderMain(true)
    }

    mainDidRender() {
        this.props.setCanRenderSlider(true)
    }

    sliderDidRender() {
        this.props.setCanRenderLyric(true)
    }

    lyricDidRender() {
        this.props.setCanRenderCarousel(true)
    }

    carouselDidRender() {
        this.props.setCanRenderScene(true)
    }

    sceneDidRender() {
        console.warn('Sequenced rendering complete.')
    }

    render() {
        const {
                canTheatreRender,
                canMainRender,
                canSliderRender,
                canLyricRender,
                canCarouselRender,
                canSceneRender
            } = this.props,

            {
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
            <div
                className={cx(
                    'Live',
                    canTheatreRender && 'LM__theatreCanRender',
                    canMainRender && 'LM__mainCanRender',
                    canSliderRender && 'LM__sliderCanRender',
                    canLyricRender && 'LM__lyricCanRender',
                    canCarouselRender && 'LM__carouselCanRender',
                    canSceneRender && 'LM__sceneCanRender'
                )}
            >
                <div className="PopupOverlay" />

                <Theatre {...theatreHandlers}
                    theatreDidRender={this.theatreDidRender}
                    sceneDidRender={this.sceneDidRender}
                />

                <Main {...mainColumnHandlers}
                    mainDidRender={this.mainDidRender}
                    carouselDidRender={this.carouselDidRender}
                />

                <OverviewLogue
                    overviewPopupHandlers={overviewPopupHandlers}
                />

                <LyricColumn {...lyricColumnHandlers}
                    lyricDidRender={this.lyricDidRender}
                />

                <OverlayPopups
                    annotationPopupHandlers={annotationPopupHandlers}
                    titlePopupHandlers={titlePopupHandlers}
                    scorePopupHandlers={scorePopupHandlers}
                    wikiPopupHandlers={wikiPopupHandlers}
                />

                <Menu {...menuFieldHandlers}
                    sliderDidRender={this.sliderDidRender}
                />

                {/* Prevent popup interaction when slider is touched. */}
                <div className="TouchOverlay" />
            </div>
        )
    }
}

Live.propTypes = {
    // Through Redux.
    isRenderable: PropTypes.bool.isRequired,
    canTheatreRender: PropTypes.bool.isRequired,
    canMainRender: PropTypes.bool.isRequired,
    canSliderRender: PropTypes.bool.isRequired,
    canLyricRender: PropTypes.bool.isRequired,
    canCarouselRender: PropTypes.bool.isRequired,
    canSceneRender: PropTypes.bool.isRequired,

    setCanRenderTheatre: PropTypes.func.isRequired,
    setCanRenderMain: PropTypes.func.isRequired,
    setCanRenderSlider: PropTypes.func.isRequired,
    setCanRenderLyric: PropTypes.func.isRequired,
    setCanRenderCarousel: PropTypes.func.isRequired,
    setCanRenderScene: PropTypes.func.isRequired,

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

const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
        setCanRenderTheatre,
        setCanRenderMain,
        setCanRenderSlider,
        setCanRenderLyric,
        setCanRenderCarousel,
        setCanRenderScene
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(Live)
