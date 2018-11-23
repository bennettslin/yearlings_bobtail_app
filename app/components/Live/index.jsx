/**
 * Component that routes event handlers to their components. Knows no state, so
 * should not update.
 */

import React, {
    Component, Fragment
} from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { updateRenderStore } from 'flux/render/action'

import Main from '../Main'
import Lyric from '../Lyric'
import Theatre from '../Theatre'

import Menu from './Menu'
import OverlayPopups from './OverlayPopups'
import OverviewLogue from './OverviewLogue'

import { getOrganisedHandlersFromProps } from './helper'

const mapStateToProps = ({
    renderStore: {
        canVerseRender,
        canMainRender,
        canTheatreRender,
        canCarouselRender
    },
    renderableStore: {
        isSceneChangeRenderable,
        isSongChangeRenderable,
        isWindowResizeRenderable
    }
}) => ({
    canVerseRender,
    canMainRender,
    canTheatreRender,
    canCarouselRender,
    isSceneChangeRenderable,
    isSongChangeRenderable,
    isWindowResizeRenderable
})

class Live extends Component {

    componentDidMount() {
        this.unrenderedTime = Date.now()
    }

    componentDidUpdate(prevProps) {
        const {
                isSceneChangeRenderable,
                isSongChangeRenderable,
                isWindowResizeRenderable
            } = this.props,

            {
                isSceneChangeRenderable: wasSceneChangeRenderable,
                isSongChangeRenderable: wasSongChangeRenderable,
                isWindowResizeRenderable: wasWindowResizeRenderable
            } = prevProps

        // Is unrenderable after window resize.
        if (!isWindowResizeRenderable && wasWindowResizeRenderable) {
            this.unrenderedTime = Date.now()

            logger.warn('Live unrenderable from window resize.')
            this.props.updateRenderStore({
                canTheatreRender: false
            })

        /**
         * Is renderable after window resize timeout. Also called upon initial
         * render.
         */
        } else if (isWindowResizeRenderable && !wasWindowResizeRenderable) {
            logger.warn(`Live renderable after window resize, took ${
                ((Date.now() - this.unrenderedTime) / 1000).toFixed(2)
            } seconds.`)

            this.props.updateRenderStore({
                canTheatreRender: true
            })
        }

        // Is unrenderable after song change.
        if (!isSongChangeRenderable && wasSongChangeRenderable) {
            this.unrenderedTime = Date.now()

            logger.warn('Live unrenderable from song change.')
            this.props.updateRenderStore({
                canVerseRender: false,
                canSceneRender: false,
                canMainRender: false,
                canLyricRender: false,
                canCarouselRender: false
            })

        // Is renderable after song change timeout.
        } else if (isSongChangeRenderable && !wasSongChangeRenderable) {

            // Don't call this upon initial render.
            if (this.props.canTheatreRender) {
                logger.warn(`Live renderable after song change, took ${
                    ((Date.now() - this.unrenderedTime) / 1000).toFixed(2)
                } seconds.`)

                this.props.updateRenderStore({
                    canVerseRender: true
                })
            }
        }

        // Is unrenderable after scene change within same song.
        if (!isSceneChangeRenderable && wasSceneChangeRenderable) {
            this.unrenderedTime = Date.now()

            logger.warn('Live unrenderable from scene change.')
            this.props.updateRenderStore({
                canSceneRender: false
            })

        // Is renderable after scene change timeout.
        } else if (isSceneChangeRenderable && !wasSceneChangeRenderable) {

            // Don't call this upon initial render.
            if (this.props.canTheatreRender) {
                logger.warn(`Live renderable after scene change, took ${
                    ((Date.now() - this.unrenderedTime) / 1000).toFixed(2)
                } seconds.`)

                this.props.updateRenderStore({
                    canSceneRender: true
                })
            }
        }
    }

    theatreDidRender = () => {
        /**
         * If theatre is rendering for the first time upon load, verse will not
         * be rendered. If it is being rendered again after window resize,
         * verse will be rendered. Not the most elegant way to handle this...
         */
        if (!this.props.canVerseRender) {
            this.props.updateRenderStore({
                canVerseRender: true
            })
        }
    }

    verseDidRender = () => {
        this.props.updateRenderStore({
            canSceneRender: true
        })
    }

    sceneDidRender = () => {
        /**
         * If scene is rendering for the first time upon load, main will not
         * be rendered. If it is being rendered again after scene change, main
         * will be rendered. Again, not the most elegant way to handle this...
         */
        if (!this.props.canMainRender) {
            this.props.updateRenderStore({
                canMainRender: true
            })
        }
    }

    mainDidRender = () => {
        this.props.updateRenderStore({
            canLyricRender: true
        })
    }

    lyricDidRender = () => {
        this.props.updateRenderStore({
            canCarouselRender: true
        })
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
                    sceneDidRender={this.sceneDidRender}
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
                    verseDidRender={this.verseDidRender}
                />

                {/* Prevent popup interaction when slider is touched. */}
                <div className="TouchOverlay" />
            </Fragment>
        )
    }
}

Live.propTypes = {
    // Through Redux.
    canVerseRender: PropTypes.bool.isRequired,
    canMainRender: PropTypes.bool.isRequired,
    canTheatreRender: PropTypes.bool.isRequired,
    canCarouselRender: PropTypes.bool.isRequired,
    isSongChangeRenderable: PropTypes.bool.isRequired,
    isSceneChangeRenderable: PropTypes.bool.isRequired,
    isWindowResizeRenderable: PropTypes.bool.isRequired,
    updateRenderStore: PropTypes.func.isRequired,

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
    handleSliderTouchBegin: PropTypes.func.isRequired,
    handleCarouselNavToggle: PropTypes.func.isRequired,
    handleDotSelect: PropTypes.func.isRequired,
    handleNavSongSelect: PropTypes.func.isRequired,
    handleNavBookSelect: PropTypes.func.isRequired,
    handleLyricColumnSelect: PropTypes.func.isRequired,
    handleLyricAnnotationSelect: PropTypes.func.isRequired,
    handleLyricWheel: PropTypes.func.isRequired,
    handleLyricAutoScroll: PropTypes.func.isRequired,
    handleLyricVerseSelect: PropTypes.func.isRequired,
    handleOverviewToggle: PropTypes.func.isRequired,
    handlePopupContainerClick: PropTypes.func.isRequired,
    handleScrollUponLyricRender: PropTypes.func.isRequired,
    handleScrollUponCarouselRender: PropTypes.func.isRequired,
    handleTipsToggle: PropTypes.func.isRequired,
    handleVerseBarSelect: PropTypes.func.isRequired,
    handleVerseBarWheel: PropTypes.func.isRequired,
    // handleSetVerseElement: PropTypes.func.isRequired,
    handleVerseInteractivate: PropTypes.func.isRequired,
    handleWikiToggle: PropTypes.func.isRequired,
    stopPropagation: PropTypes.func.isRequired
}

const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
        updateRenderStore
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(Live)
