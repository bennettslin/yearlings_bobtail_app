// State manager.

import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { setAppMounted } from 'flux/actions/session'

import EventHandler from 'handlers/EventHandler'
import AccessManager from './AccessManager'
import AnnotationManager from './AnnotationManager/AnnotationManager'
import AudioManager from './AudioManager'
import CarouselManager from './CarouselManager'
import AdminManager from './AdminManager'
import DotsManager from './DotsManager'
import LogManager from './LogManager'
import LyricManager from './LyricManager'
import NavManager from './NavManager'
import OverviewManager from './OverviewManager'
import PlayerManager from './PlayerManager/PlayerManager'
import RenderManager from './RenderManager'
import RoutingManager from './RoutingManager'
import ScoreManager from './ScoreManager'
import SceneManager from './SceneManager'
import ScrollManager from './ScrollManager'
import SliderVerseManager from './SliderVerseManager/SliderVerseManager'
import SongManager from './SongManager'
import TimeVerseManager from './TimeVerseManager/TimeVerseManager'
import TipsManager from './TipsManager'
import TitleManager from './TitleManager'
import VerseManager from './VerseManager/VerseManager'
import WikiManager from './WikiManager'
import WindowManager from './WindowManager'

import { getPropsAreShallowEqual } from 'helpers/generalHelper'

class StateManager extends Component {

    static propTypes = {
        match: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
    }

    componentDidMount() {
        logger.warn('State manager rendered.')
        this.props.setAppMounted(true)
    }

    shouldComponentUpdate(nextProps) {
        return !getPropsAreShallowEqual({
            props: this.props,
            nextProps
        })
    }

    /**********
     * ACCESS *
     **********/

    toggleAccess = (payload) => {
        return this.accessManager.toggleAccess(payload)
    }

    /**************
     * ANNOTATION *
     **************/

    selectAnnotation = (payload) => {
        return this.annotationManager.selectAnnotation(payload)
    }

    deselectAnnotation = (payload) => {
        return this.annotationManager.deselectAnnotation(payload)
    }

    accessAnnotation = (payload) => {
        return this.annotationManager.accessAnnotation(payload)
    }

    accessAnnotationAnchor = (payload) => {
        return this.annotationManager.accessAnnotationAnchor(payload)
    }

    accessAnnotationIfCurrentInvalid = (payload) => {
        return this.annotationManager.accessAnnotationIfCurrentInvalid(payload)
    }

    /*********
     * AUDIO *
     *********/

    togglePlay = (payload) => {
        return this.audioManager.togglePlay(payload)
    }

    selectAudioOption = (payload) => {
        return this.audioManager.selectAudioOption(payload)
    }

    /************
     * CAROUSEL *
     ************/

    selectCarouselNav = (payload) => {
        return this.carouselManager.selectCarouselNav(payload)
    }

    /*********
     * DEBUG *
     *********/

    toggleAdmin = (payload) => {
        return this.adminManager.toggleAdmin(payload)
    }

    /********
     * DOTS *
     ********/

    toggleDot = (payload) => {
        return this.dotsManager.toggleDot(payload)
    }

    selectDotsExpand = (payload) => {
        return this.dotsManager.selectDotsExpand(payload)
    }

    accessDot = (payload) => {
        return this.dotsManager.accessDot(payload)
    }

    /*********
     * LYRIC *
     *********/

    selectLyricExpand = (payload) => {
        return this.lyricManager.selectLyricExpand(payload)
    }

    selectLyricColumn = (payload) => {
        return this.lyricManager.selectLyricColumn(payload)
    }

    selectManualScroll = (payload) => {
        return this.lyricManager.selectManualScroll(payload)
    }

    /*******
     * NAV *
     *******/

    selectBookColumn = (payload) => {
        return this.navManager.selectBookColumn(payload)
    }

    accessNavSong = (payload) => {
        return this.navManager.accessNavSong(payload)
    }

    /************
     * OVERVIEW *
     ************/

    selectOverview = (payload) => {
        return this.overviewManager.selectOverview(payload)
    }

    /***********
     * PLAYERS *
     ***********/

    toggleSelectedPlayer = (payload) => {
        return this.playerManager.toggleSelectedPlayer(payload)
    }

    updateSelectedPlayer = (payload) => {
        return this.playerManager.updateSelectedPlayer(payload)
    }

    /*********
     * SCENE *
     *********/

    selectScene = (payload) => {
        return this.sceneManager.selectScene(payload)
    }

    /*********
     * SCORE *
     *********/

    selectScore = (payload) => {
        return this.scoreManager.selectScore(payload)
    }

    /**********
     * SCROLL *
     **********/

    setCarouselAnnotationRef = (payload) => {
        return this.scrollManager.setCarouselAnnotationRef(payload)
    }

    setLyricAnnotationRef = (payload) => {
        return this.scrollManager.setLyricAnnotationRef(payload)
    }

    setVerseRef = (payload) => {
        return this.scrollManager.setVerseRef(payload)
    }

    setLyricVerseParentRef = (payload) => {
        return this.scrollManager.setLyricVerseParentRef(payload)
    }

    setCarouselParentRef = (payload) => {
        return this.scrollManager.setCarouselParentRef(payload)
    }

    scrollElementIntoView = (payload) => {
        return this.scrollManager.scrollElementIntoView(payload)
    }

    getVerseElement = (payload) => {
        return this.scrollManager.getVerseElement(payload)
    }

    /****************
     * SLIDER/VERSE *
     ****************/

    touchSliderBegin = (payload) => {
        return this.sliderVerseManager.touchSliderBegin(payload)
    }

    touchBodyMove = (payload) => {
        return this.sliderVerseManager.touchBodyMove(payload)
    }

    touchBodyEnd = () => {
        return this.sliderVerseManager.touchBodyEnd()
    }

    /********
     * SONG *
     ********/

    advanceToNextSong = () => {
        return this.songManager.advanceToNextSong()
    }

    selectSong = (payload) => {
        return this.songManager.selectSong(payload)
    }

    /**************
     * TIME/VERSE *
     **************/

    updateTime = (payload) => {
        return this.timeVerseManager.updateTime(payload)
    }

    selectVerse = (payload) => {
        return this.timeVerseManager.selectVerse(payload)
    }

    /********
     * TIPS *
     ********/

    selectTips = (payload) => {
        return this.tipsManager.selectTips(payload)
    }

    /*********
     * TITLE *
     *********/

    selectTitle = (payload) => {
        return this.titleManager.selectTitle(payload)
    }

    /*********
     * VERSE *
     *********/

    interactivateVerse = (payload) => {
        return this.verseManager.interactivateVerse(payload)
    }

    interactivateVerseDirection = (payload) => {
        return this.verseManager.interactivateVerseDirection(payload)
    }

    determineVerseBars = (payload) => {
        return this.verseManager.determineVerseBars(payload)
    }

    resetVerseBars = () => {
        return this.verseManager.resetVerseBars()
    }

    /********
     * WIKI *
     ********/

    selectWiki = (payload) => {
        return this.wikiManager.selectWiki(payload)
    }

    /********
     * REFS *
     ********/

    _setAccessManagerRef = (node) => {
        this.accessManager = node
    }
    _setAnnotationManagerRef = (node) => {
        this.annotationManager = node
    }
    _setAudioManagerRef = (node) => {
        this.audioManager = node
    }
    _setCarouselManagerRef = (node) => {
        this.carouselManager = node
    }
    _setAdminManagerRef = (node) => {
        this.adminManager = node
    }
    _setDotsManagerRef = (node) => {
        this.dotsManager = node
    }
    _setLogManagerRef = (node) => {
        this.logManager = node
    }
    _setLyricManagerRef = (node) => {
        this.lyricManager = node
    }
    _setNavManagerRef = (node) => {
        this.navManager = node
    }
    _setOverviewManagerRef = (node) => {
        this.overviewManager = node
    }
    _setPlayerManagerRef = (node) => {
        this.playerManager = node
    }
    _setRenderManagerRef = (node) => {
        this.renderManager = node
    }
    _setScoreManagerRef = (node) => {
        this.scoreManager = node
    }
    _setSceneManagerRef = (node) => {
        this.sceneManager = node
    }
    _setScrollManagerRef = (node) => {
        this.scrollManager = node
    }
    _setSliderVerseManagerRef = (node) => {
        this.sliderVerseManager = node
    }
    _setSongManagerRef = (node) => {
        this.songManager = node
    }
    _setTimeVerseManagerRef = (node) => {
        this.timeVerseManager = node
    }
    _setTipsManagerRef = (node) => {
        this.tipsManager = node
    }
    _setTitleManagerRef = (node) => {
        this.titleManager = node
    }
    _setVerseManagerRef = (node) => {
        this.verseManager = node
    }
    _setWikiManagerRef = (node) => {
        this.wikiManager = node
    }

    render() {

        const {
            match,
            history
        } = this.props

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
                    setLyricVerseParentRef={this.setLyricVerseParentRef}
                    setCarouselParentRef={this.setCarouselParentRef}
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
                    selectTitle={this.selectTitle}
                    selectTips={this.selectTips}
                    selectVerse={this.selectVerse}
                    interactivateVerse={this.interactivateVerse}
                    interactivateVerseDirection={this.interactivateVerseDirection}
                    selectWiki={this.selectWiki}
                    toggleAccess={this.toggleAccess}
                    toggleAdmin={this.toggleAdmin}
                    togglePlay={this.togglePlay}
                />
                <AccessManager
                    setRef={this._setAccessManagerRef}
                />
                <AnnotationManager
                    setRef={this._setAnnotationManagerRef}
                />
                <AudioManager
                    setRef={this._setAudioManagerRef}
                    selectSong={this.selectSong}
                    toggleSelectedPlayer={this.toggleSelectedPlayer}
                />
                <CarouselManager
                    setRef={this._setCarouselManagerRef}
                    accessNavSong={this.accessNavSong}
                    selectBookColumn={this.selectBookColumn}
                />
                <AdminManager
                    setRef={this._setAdminManagerRef}
                />
                <DotsManager
                    setRef={this._setDotsManagerRef}
                    accessAnnotationIfCurrentInvalid={this.accessAnnotationIfCurrentInvalid}
                />
                <LogManager
                    setRef={this._setLogManagerRef}
                />
                <LyricManager
                    setRef={this._setLyricManagerRef}
                    deselectAnnotation={this.deselectAnnotation}
                    accessAnnotationIfCurrentInvalid={this.accessAnnotationIfCurrentInvalid}
                />
                <NavManager
                    setRef={this._setNavManagerRef}
                />
                <OverviewManager
                    setRef={this._setOverviewManagerRef}
                    selectDotsExpand={this.selectDotsExpand}
                    selectLyricExpand={this.selectLyricExpand}
                />
                <PlayerManager
                    setRef={this._setPlayerManagerRef}
                    updateTime={this.updateTime}
                    advanceToNextSong={this.advanceToNextSong}
                />
                <RenderManager
                    setRef={this._setRenderManagerRef}
                />
                <RoutingManager
                    {...{
                        match,
                        history
                    }}
                />
                <SceneManager
                    setRef={this._setSceneManagerRef}
                    selectVerse={this.selectVerse}
                    resetVerseBars={this.resetVerseBars}
                />
                <ScoreManager
                    setRef={this._setScoreManagerRef}
                />
                <ScrollManager
                    setRef={this._setScrollManagerRef}
                />
                <SliderVerseManager
                    setRef={this._setSliderVerseManagerRef}
                    selectVerse={this.selectVerse}
                    resetVerseBars={this.resetVerseBars}
                />
                <SongManager
                    setRef={this._setSongManagerRef}
                    togglePlay={this.togglePlay}
                    selectAnnotation={this.selectAnnotation}
                    selectVerse={this.selectVerse}
                    updateSelectedPlayer={this.updateSelectedPlayer}
                />
                <TimeVerseManager
                    setRef={this._setTimeVerseManagerRef}
                    determineVerseBars={this.determineVerseBars}
                    scrollElementIntoView={this.scrollElementIntoView}
                    updateSelectedPlayer={this.updateSelectedPlayer}
                />
                <TipsManager
                    setRef={this._setTipsManagerRef}
                    selectDotsExpand={this.selectDotsExpand}
                    selectLyricExpand={this.selectLyricExpand}
                />
                <TitleManager
                    setRef={this._setTitleManagerRef}
                />
                <VerseManager
                    setRef={this._setVerseManagerRef}
                    getVerseElement={this.getVerseElement}
                />
                <WikiManager
                    setRef={this._setWikiManagerRef}
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

// Bind Redux action creators to component props.
const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
        setAppMounted
    }, dispatch)
)

export default connect(null, bindDispatchToProps)(StateManager)
