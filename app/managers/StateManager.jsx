// State manager.

import React, {
    Component, Fragment
} from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { setAppMounted } from 'flux/actions/load'

import EventHandler from 'handlers/EventHandler'
import AnnotationManager from './AnnotationManager'
import AudioManager from './AudioManager'
import CarouselManager from './CarouselManager'
import DotsManager from './DotsManager'
import DotsSlideListener from '../listeners/DotsSlideListener'
import DoublespeakerListener from '../listeners/DoublespeakerListener'
import LogManager from './LogManager'
import LyricManager from './LyricManager'
import NavManager from './NavManager'
import OverlayListener from '../listeners/OverlayListener'
import OverviewManager from './OverviewManager'
import PlayerManager from './PlayerManager'
import RenderListener from '../listeners/RenderListener'
import RoutingManager from './RoutingManager'
import ScoreListener from '../listeners/ScoreListener'
import SceneManager from './SceneManager'
import ScrollManager from './ScrollManager'
import SliderVerseManager from './SliderVerseManager'
import SongManager from './SongManager'
import TimeVerseManager from './TimeVerseManager'
import TipsManager from './TipsManager'
import VerseManager from './VerseManager'
import WikiManager from './WikiManager'
import WindowListener from '../listeners/WindowListener'

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

    /**************
     * ANNOTATION *
     **************/

    selectAnnotation = (payload) => {
        return this.annotationManager.selectAnnotation(payload)
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

    /********
     * DOTS *
     ********/

    toggleDot = (payload) => {
        return this.dotsManager.toggleDot(payload)
    }

    accessDot = (payload) => {
        return this.dotsManager.accessDot(payload)
    }

    /*********
     * LYRIC *
     *********/

    selectLyricColumn = (payload) => {
        return this.lyricManager.selectLyricColumn(payload)
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

    updateSceneIfChanged = (payload) => {
        return this.sceneManager.updateSceneIfChanged(payload)
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

    handleSongEnd = () => {
        return this.songManager.handleSongEnd()
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

    _setAnnotationManagerRef = (node) => {
        this.annotationManager = node
    }
    _setAudioManagerRef = (node) => {
        this.audioManager = node
    }
    _setCarouselManagerRef = (node) => {
        this.carouselManager = node
    }
    _setDotsManagerRef = (node) => {
        this.dotsManager = node
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
                    selectLyricColumn={this.selectLyricColumn}
                    determineVerseBars={this.determineVerseBars}
                    resetVerseBars={this.resetVerseBars}
                    selectOverview={this.selectOverview}
                    selectCarouselNav={this.selectCarouselNav}
                    selectScene={this.selectScene}
                    selectSong={this.selectSong}
                    selectTitle={this.selectTitle}
                    selectTips={this.selectTips}
                    selectVerse={this.selectVerse}
                    interactivateVerse={this.interactivateVerse}
                    interactivateVerseDirection={this.interactivateVerseDirection}
                    selectWiki={this.selectWiki}
                    togglePlay={this.togglePlay}
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
                <DotsManager
                    setRef={this._setDotsManagerRef}
                />
                <LogManager />
                <LyricManager
                    setRef={this._setLyricManagerRef}
                    accessAnnotationIfCurrentInvalid={this.accessAnnotationIfCurrentInvalid}
                />
                <NavManager
                    setRef={this._setNavManagerRef}
                />
                <OverviewManager
                    setRef={this._setOverviewManagerRef}
                />
                <PlayerManager
                    setRef={this._setPlayerManagerRef}
                    updateTime={this.updateTime}
                    handleSongEnd={this.handleSongEnd}
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
                    updateSceneIfChanged={this.updateSceneIfChanged}
                    determineVerseBars={this.determineVerseBars}
                    scrollElementIntoView={this.scrollElementIntoView}
                    updateSelectedPlayer={this.updateSelectedPlayer}
                />
                <TipsManager
                    setRef={this._setTipsManagerRef}
                />
                <VerseManager
                    setRef={this._setVerseManagerRef}
                    getVerseElement={this.getVerseElement}
                />
                <WikiManager
                    setRef={this._setWikiManagerRef}
                />
                <DotsSlideListener />
                <DoublespeakerListener />
                <OverlayListener />
                <RenderListener />
                <ScoreListener />
                <WindowListener />
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
