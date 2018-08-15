/**
 * Component that routes event handlers to their components. Knows no state, so
 * should not update.
 */

import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import {
    setCanRenderTheatre,
    setCanRenderMain,
    setCanRenderSlider,
    setCanRenderLyric,
    setCanRenderCarousel
} from '../../redux/actions/render'

import Theatre from '../Theatre/Theatre'

import Main from '../Main/Main'
import Menu from './Menu'
import OverlayPopups from './OverlayPopups'

import OverviewLogue from './OverviewLogue'
import Lyric from '../Lyric/Lyric'

import {
    getOrganisedHandlersFromProps
} from './liveHelper'

const mapStateToProps = ({
    canTheatreRender,
    canMainRender,
    canCarouselRender,
    isWindowResizeRenderable,
    isSongChangeRenderable,
}) => ({
    canTheatreRender,
    canMainRender,
    canCarouselRender,
    isWindowResizeRenderable,
    isSongChangeRenderable
})

class Live extends Component {

    componentDidMount() {
        this.unrenderedTime = Date.now()
    }

    componentDidUpdate(prevProps) {
        const {
                isSongChangeRenderable,
                isWindowResizeRenderable
            } = this.props,

            {
                isSongChangeRenderable: wasSongChangeRenderable,
                isWindowResizeRenderable: wasWindowResizeRenderable
            } = prevProps

        // Is unrenderable after song change.
        if (!isSongChangeRenderable && wasSongChangeRenderable) {
            this.unrenderedTime = Date.now()

            logger.warn('Live unrenderable from song change.')
            this.props.setCanRenderMain(false)
            this.props.setCanRenderSlider(false)
            this.props.setCanRenderLyric(false)
            this.props.setCanRenderCarousel(false)
        }

        // Is renderable after song change timeout.
        if (isSongChangeRenderable && !wasSongChangeRenderable) {

            // Don't call this upon initial render.
            if (this.props.canTheatreRender) {
                logger.warn(`Live renderable after song change, took ${
                    ((Date.now() - this.unrenderedTime) / 1000).toFixed(2)
                } seconds.`)

                this.props.setCanRenderMain(true)
            }
        }

        // Is unrenderable after window resize.
        if (!isWindowResizeRenderable && wasWindowResizeRenderable) {
            this.unrenderedTime = Date.now()

            logger.warn('Live unrenderable from window resize.')
            this.props.setCanRenderTheatre(false)
        }

        /**
         * Is renderable after window resize timeout. Also called upon initial
         * render.
         */
        if (isWindowResizeRenderable && !wasWindowResizeRenderable) {
            logger.warn(`Live renderable after window resize, took ${
                ((Date.now() - this.unrenderedTime) / 1000).toFixed(2)
            } seconds.`)

            this.props.setCanRenderTheatre(true)
        }
    }

    theatreDidRender = () => {
        /**
         * This isn't the most elegant way to tell whether we're rendering
         * after song change or after window resize. But it will do for now.
         */
        if (!this.props.canMainRender) {
            this.props.setCanRenderMain(true)
        }
    }

    mainDidRender = () => {
        this.props.setCanRenderSlider(true)
    }

    sliderDidRender = () => {
        this.props.setCanRenderLyric(true)
    }

    lyricDidRender = () => {
        this.props.setCanRenderCarousel(true)
    }

    carouselDidRender = () => {
        logger.warn('Live rendered.')
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
                    theatreDidRender={this.theatreDidRender}
                />

                <Main {...mainColumnHandlers}
                    mainDidRender={this.mainDidRender}
                    carouselDidRender={this.carouselDidRender}
                />

                <OverviewLogue
                    overviewPopupHandlers={overviewPopupHandlers}
                />

                <Lyric {...lyricColumnHandlers}
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
            </Fragment>
        )
    }
}

Live.propTypes = {
    // Through Redux.
    canMainRender: PropTypes.bool.isRequired,
    canTheatreRender: PropTypes.bool.isRequired,
    canCarouselRender: PropTypes.bool.isRequired,
    isWindowResizeRenderable: PropTypes.bool.isRequired,
    isSongChangeRenderable: PropTypes.bool.isRequired,

    setCanRenderTheatre: PropTypes.func.isRequired,
    setCanRenderMain: PropTypes.func.isRequired,
    setCanRenderSlider: PropTypes.func.isRequired,
    setCanRenderLyric: PropTypes.func.isRequired,
    setCanRenderCarousel: PropTypes.func.isRequired,

    // From parent.
    setLyricRef: PropTypes.func.isRequired,
    setScoreRef: PropTypes.func.isRequired,
    setWikiRef: PropTypes.func.isRequired,
    setCarouselAnnotationRef: PropTypes.func.isRequired,
    setLyricAnnotationRef: PropTypes.func.isRequired,
    setVerseRef: PropTypes.func.isRequired,
    setLyricVerseParentRef: PropTypes.func.isRequired,
    setCarouselParentRef: PropTypes.func.isRequired,

    focusElementForAccess: PropTypes.func.isRequired,

    handleAnnotationPrevious: PropTypes.func.isRequired,
    handleAnnotationNext: PropTypes.func.isRequired,
    handleAnnotationWikiSelect: PropTypes.func.isRequired,
    handleAnnotationWormholeSelect: PropTypes.func.isRequired,
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
    handleLyricVerseSelect: PropTypes.func.isRequired,
    handleOverviewToggle: PropTypes.func.isRequired,
    handlePopupContainerClick: PropTypes.func.isRequired,
    handleScoreToggle: PropTypes.func.isRequired,
    handleScrollUponLyricRender: PropTypes.func.isRequired,
    handleScrollUponCarouselRender: PropTypes.func.isRequired,
    handleTipsToggle: PropTypes.func.isRequired,
    handleTitleToggle: PropTypes.func.isRequired,
    handleVerseBarSelect: PropTypes.func.isRequired,
    handleVerseBarWheel: PropTypes.func.isRequired,
    // handleSetVerseElement: PropTypes.func.isRequired,
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
        setCanRenderCarousel
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(Live)
