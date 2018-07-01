// State manager.

import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { setAppMounted } from '../redux/actions/session'

import EventHandler from '../handlers/EventHandler'
import AccessManager from './AccessManager'
import AnnotationManager from './AnnotationManager'
import AudioManager from './AudioManager'
import CarouselManager from './CarouselManager'
import DebugManager from './DebugManager'
import DotsManager from './DotsManager'
import LyricManager from './LyricManager'
import NavManager from './NavManager'
import OverviewManager from './OverviewManager'
import RenderManager from './RenderManager'
import ScoreManager from './ScoreManager'
import SceneManager from './SceneManager'
import ScrollManager from './ScrollManager'
import SliderVerseManager from './SliderVerseManager'
import SongManager from './SongManager'
import TimeVerseManager from './TimeVerseManager'
import TipsManager from './TipsManager'
import TitleManager from './TitleManager'
import VerseManager from './VerseManager'
import WikiManager from './WikiManager'
import WindowManager from './WindowManager'

class StateManager extends Component {

    static propTypes = {
        updatePath: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props)

        this._bindEventHandlers()
    }

    componentDidMount() {
        console.warn('State manager rendered.')
        this.props.setAppMounted(true)
    }

    /**********
     * ACCESS *
     **********/

    toggleAccess(payload) {
        return this.accessManager.toggleAccess(payload)
    }

    /**************
     * ANNOTATION *
     **************/

    selectAnnotation(payload) {
        return this.annotationManager.selectAnnotation(payload)
    }

    deselectAnnotation(payload) {
        return this.annotationManager.deselectAnnotation(payload)
    }

    accessAnnotation(payload) {
        return this.annotationManager.accessAnnotation(payload)
    }

    accessAnnotationAnchor(payload) {
        return this.annotationManager.accessAnnotationAnchor(payload)
    }

    /*********
     * AUDIO *
     *********/

    togglePlay(payload) {
        return this.audioManager.togglePlay(payload)
    }

    resetUpdatedTimePlayed() {
        return this.audioManager.resetUpdatedTimePlayed()
    }

    selectAudioOption(payload) {
        return this.audioManager.selectAudioOption(payload)
    }

    /************
     * CAROUSEL *
     ************/

    selectCarouselNav(payload) {
        return this.carouselManager.selectCarouselNav(payload)
    }

    /*********
     * DEBUG *
     *********/

    toggleAdmin(payload) {
        return this.debugManager.toggleAdmin(payload)
    }

    /********
     * DOTS *
     ********/

    toggleDot(payload) {
        return this.dotsManager.toggleDot(payload)
    }

    selectDotsExpand(payload) {
        return this.dotsManager.selectDotsExpand(payload)
    }

    accessDot(payload) {
        return this.dotsManager.accessDot(payload)
    }

    /*********
     * LYRIC *
     *********/

    selectLyricExpand(payload) {
        return this.lyricManager.selectLyricExpand(payload)
    }

    selectLyricColumn(payload) {
        return this.lyricManager.selectLyricColumn(payload)
    }

    selectManualScroll(payload) {
        return this.lyricManager.selectManualScroll(payload)
    }

    /*******
     * NAV *
     *******/

    selectBookColumn(payload) {
        return this.navManager.selectBookColumn(payload)
    }

    accessNavSong(payload) {
        return this.navManager.accessNavSong(payload)
    }

    /************
     * OVERVIEW *
     ************/

    selectOverview(payload) {
        return this.overviewManager.selectOverview(payload)
    }

    /*********
     * SCENE *
     *********/

    selectScene(payload) {
        return this.sceneManager.selectScene(payload)
    }

    /*********
     * SCORE *
     *********/

    selectScore(payload) {
        return this.scoreManager.selectScore(payload)
    }

    /**********
     * SCROLL *
     **********/

    setCarouselAnnotationRef(payload) {
        return this.scrollManager.setCarouselAnnotationRef(payload)
    }

    setLyricAnnotationRef(payload) {
        return this.scrollManager.setLyricAnnotationRef(payload)
    }

    setVerseRef(payload) {
        return this.scrollManager.setVerseRef(payload)
    }

    scrollElementIntoView(payload) {
        return this.scrollManager.scrollElementIntoView(payload)
    }

    /****************
     * SLIDER/VERSE *
     ****************/

    touchSliderBegin(payload) {
        return this.sliderVerseManager.touchSliderBegin(payload)
    }

    touchBodyMove(payload) {
        return this.sliderVerseManager.touchBodyMove(payload)
    }

    touchBodyEnd() {
        return this.sliderVerseManager.touchBodyEnd()
    }

    setVerseElement(payload) {
        // FIXME: Avoid this conditional.
        return this.sliderVerseManager && this.sliderVerseManager.setVerseElement(payload)
    }

    /********
     * SONG *
     ********/

    advanceToNextSong() {
        return this.songManager.advanceToNextSong()
    }

    selectSong(payload) {
        return this.songManager.selectSong(payload)
    }

    /**************
     * TIME/VERSE *
     **************/

    selectTime(payload) {
        return this.timeVerseManager.selectTime(payload)
    }

    selectVerse(payload) {
        return this.timeVerseManager.selectVerse(payload)
    }

    /********
     * TIPS *
     ********/

    selectTips(payload) {
        return this.tipsManager.selectTips(payload)
    }

    /*********
     * TITLE *
     *********/

    selectTitle(payload) {
        return this.titleManager.selectTitle(payload)
    }

    /*********
     * VERSE *
     *********/

    interactivateVerse(payload) {
        return this.verseManager.interactivateVerse(payload)
    }

    interactivateVerseDirection(payload) {
        return this.verseManager.interactivateVerseDirection(payload)
    }

    determineVerseBars(payload) {
        return this.verseManager.determineVerseBars(payload)
    }

    resetVerseBars() {
        return this.verseManager.resetVerseBars()
    }

    /********
     * WIKI *
     ********/

    selectWiki(payload) {
        return this.wikiManager.selectWiki(payload)
    }

    _bindEventHandlers() {
        this.accessAnnotation = this.accessAnnotation.bind(this)
        this.accessDot = this.accessDot.bind(this)
        this.accessAnnotationAnchor = this.accessAnnotationAnchor.bind(this)
        this.accessNavSong = this.accessNavSong.bind(this)
        this.toggleAccess = this.toggleAccess.bind(this)
        this.toggleAdmin = this.toggleAdmin.bind(this)
        this.togglePlay = this.togglePlay.bind(this)
        this.selectScene = this.selectScene.bind(this)
        this.selectSong = this.selectSong.bind(this)
        this.selectOverview = this.selectOverview.bind(this)
        this.selectAudioOption = this.selectAudioOption.bind(this)
        this.selectAnnotation = this.selectAnnotation.bind(this)
        this.deselectAnnotation = this.deselectAnnotation.bind(this)
        this.selectVerse = this.selectVerse.bind(this)
        this.selectTime = this.selectTime.bind(this)
        this.resetUpdatedTimePlayed = this.resetUpdatedTimePlayed.bind(this)
        this.toggleDot = this.toggleDot.bind(this)
        this.selectWiki = this.selectWiki.bind(this)
        this.selectCarouselNav = this.selectCarouselNav.bind(this)
        this.selectScore = this.selectScore.bind(this)
        this.interactivateVerse = this.interactivateVerse.bind(this)
        this.interactivateVerseDirection = this.interactivateVerseDirection.bind(this)
        this.selectLyricColumn = this.selectLyricColumn.bind(this)
        this.selectLyricExpand = this.selectLyricExpand.bind(this)
        this.selectBookColumn = this.selectBookColumn.bind(this)
        this.selectDotsExpand = this.selectDotsExpand.bind(this)
        this.selectTips = this.selectTips.bind(this)
        this.selectTitle = this.selectTitle.bind(this)
        this.advanceToNextSong = this.advanceToNextSong.bind(this)
        this.setVerseElement = this.setVerseElement.bind(this)
        this.determineVerseBars = this.determineVerseBars.bind(this)
        this.resetVerseBars = this.resetVerseBars.bind(this)
        this.selectManualScroll = this.selectManualScroll.bind(this)
        this.touchSliderBegin = this.touchSliderBegin.bind(this)
        this.touchBodyMove = this.touchBodyMove.bind(this)
        this.touchBodyEnd = this.touchBodyEnd.bind(this)
        this.setCarouselAnnotationRef = this.setCarouselAnnotationRef.bind(this)
        this.setLyricAnnotationRef = this.setLyricAnnotationRef.bind(this)
        this.setVerseRef = this.setVerseRef.bind(this)
        this.scrollElementIntoView = this.scrollElementIntoView.bind(this)
    }

    render() {
        const { updatePath } = this.props

        return (
            <Fragment>
                <EventHandler
                    // Event manager props.
                    accessAnnotation={this.accessAnnotation}
                    accessAnnotationAnchor={this.accessAnnotationAnchor}
                    accessDot={this.accessDot}
                    accessNavSong={this.accessNavSong}
                    touchSliderBegin={this.touchSliderBegin}
                    touchBodyMove={this.touchBodyMove}
                    touchBodyEnd={this.touchBodyEnd}
                    setCarouselAnnotationRef={this.setCarouselAnnotationRef}
                    setLyricAnnotationRef={this.setLyricAnnotationRef}
                    setVerseRef={this.setVerseRef}
                    scrollElementIntoView={this.scrollElementIntoView}
                    selectAnnotation={this.selectAnnotation}
                    selectAudioOption={this.selectAudioOption}
                    selectBookColumn={this.selectBookColumn}
                    toggleDot={this.toggleDot}
                    selectDotsExpand={this.selectDotsExpand}
                    selectLyricColumn={this.selectLyricColumn}
                    selectLyricExpand={this.selectLyricExpand}
                    determineVerseBars={this.determineVerseBars}
                    resetVerseBars={this.resetVerseBars}
                    selectManualScroll={this.selectManualScroll}
                    selectOverview={this.selectOverview}
                    selectCarouselNav={this.selectCarouselNav}
                    selectScore={this.selectScore}
                    selectScene={this.selectScene}
                    selectSong={this.selectSong}
                    selectTime={this.selectTime}
                    selectTitle={this.selectTitle}
                    selectTips={this.selectTips}
                    selectVerse={this.selectVerse}
                    interactivateVerse={this.interactivateVerse}
                    interactivateVerseDirection={this.interactivateVerseDirection}
                    selectWiki={this.selectWiki}
                    toggleAccess={this.toggleAccess}
                    toggleAdmin={this.toggleAdmin}
                    togglePlay={this.togglePlay}
                    setVerseElement={this.setVerseElement}
                    advanceToNextSong={this.advanceToNextSong}
                    resetUpdatedTimePlayed={this.resetUpdatedTimePlayed}
                />
                <AccessManager
                    getRef={node => (this.accessManager = node)}
                />
                <AnnotationManager
                    getRef={node => (this.annotationManager = node)}
                    updatePath={updatePath}
                />
                <AudioManager
                    getRef={node => (this.audioManager = node)}
                    selectSong={this.selectSong}
                />
                <CarouselManager
                    getRef={node => (this.carouselManager = node)}
                    accessNavSong={this.accessNavSong}
                    selectBookColumn={this.selectBookColumn}
                />
                <DebugManager
                    getRef={node => (this.debugManager = node)}
                />
                <DotsManager
                    getRef={node => (this.dotsManager = node)}
                />
                <LyricManager
                    getRef={node => (this.lyricManager = node)}
                    deselectAnnotation={this.deselectAnnotation}
                />
                <NavManager
                    getRef={node => (this.navManager = node)}
                />
                <OverviewManager
                    getRef={node => (this.overviewManager = node)}
                    selectDotsExpand={this.selectDotsExpand}
                    selectLyricExpand={this.selectLyricExpand}
                />
                <RenderManager
                    getRef={node => (this.renderManager = node)}
                />
                <SceneManager
                    getRef={node => (this.sceneManager = node)}
                    selectVerse={this.selectVerse}
                />
                <ScoreManager
                    getRef={node => (this.scoreManager = node)}
                />
                <ScrollManager
                    getRef={node => (this.scrollManager = node)}
                />
                <SliderVerseManager
                    getRef={node => (this.sliderVerseManager = node)}
                    selectTime={this.selectTime}
                    determineVerseBars={this.determineVerseBars}
                    resetVerseBars={this.resetVerseBars}
                    scrollElementIntoView={this.scrollElementIntoView}
                />
                <SongManager
                    getRef={node => (this.songManager = node)}
                    togglePlay={this.togglePlay}
                    selectAnnotation={this.selectAnnotation}
                    selectVerse={this.selectVerse}
                    updatePath={updatePath}
                />
                <TimeVerseManager
                    getRef={node => (this.timeVerseManager = node)}
                    scrollElementIntoView={this.scrollElementIntoView}
                    updatePath={updatePath}
                />
                <TipsManager
                    getRef={node => (this.tipsManager = node)}
                    selectDotsExpand={this.selectDotsExpand}
                    selectLyricExpand={this.selectLyricExpand}
                />
                <TitleManager
                    getRef={node => (this.titleManager = node)}
                />
                <VerseManager
                    getRef={node => (this.verseManager = node)}
                />
                <WikiManager
                    getRef={node => (this.wikiManager = node)}
                />
                <WindowManager
                    deselectAnnotation={this.deselectAnnotation}
                    selectLyricExpand={this.selectLyricExpand}
                    selectScore={this.selectScore}
                />
            </Fragment>
        )
    }
}

const mapStateToProps = () => ({})

// Bind Redux action creators to component props.
const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
        setAppMounted
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(StateManager)
