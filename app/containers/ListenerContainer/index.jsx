import React, { PureComponent, Fragment as ___ } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateLoadStore } from 'flux/load/action'

import EventContainer from '../EventContainer'
import LogManager from '../../managers/LogManager'

import AudioManager from '../../managers/AudioManager'
import PlayerManager from '../../managers/PlayerManager'
import ScrollManager from '../../managers/ScrollManager'
import VerseBarManager from '../../managers/VerseBarManager'

import OverviewListener from '../../handlers/OverviewHandler/Listener'
import TipsListener from '../../handlers/TipsHandler/Listener'

import AnnotationListener from '../../handlers/AnnotationHandler/Listener'
import AnnotationAccessListener from '../../handlers/AnnotationAccessHandler/Listener'
import CarouselListener from '../../handlers/CarouselHandler/Listener'
import DidRenderListener from '../../listeners/DidRenderListener'
import LiveListener from '../../listeners/LiveListener'
import LyricListener from '../../handlers/LyricHandler/Listener'
import SceneListener from '../../handlers/SceneHandler/Listener'
import ScoreListener from '../../handlers/ScoreHandler/Listener'
import WikiListener from '../../handlers/WikiHandler/Listener'
import WikiWormholeListener from '../../handlers/WikiWormholeHandler/Listener'

// TODO: Eventually remove this one.
import SongDispatcher from '../../handlers/SongHandler/Dispatcher'
import SongListener from '../../handlers/SongHandler/Listener'
import TimeVerseHandler from '../../handlers/TimeVerseHandler'

import PopupAnnotationListener from '../../listeners/PopupAnnotationListener'
import RenderedListener from '../../listeners/RenderedListener'
import DoublespeakerListener from '../../listeners/DoublespeakerListener'
import LogueListener from '../../listeners/LogueListener'
import MainListener from '../../listeners/MainListener'
import RenderListener from '../../listeners/RenderListener'
import SliderListener from '../../listeners/SliderListener'
import WindowListener from '../../listeners/WindowListener'

class ListenerContainer extends PureComponent {

    componentDidMount() {
        logger.warn('Listener container rendered.')
        this.props.updateLoadStore({ appMounted: true })
    }

    /*********
     * AUDIO *
     *********/

    togglePlay = (payload) => {
        return this.audioManager.togglePlay(payload)
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

    /*********
     * VERSE *
     *********/

    determineVerseBars = (payload) => {
        return this.verseManager.determineVerseBars(payload)
    }

    /********
     * REFS *
     ********/

    _setAudioManagerRef = (node) => {
        this.audioManager = node
    }
    _setLyricManagerRef = (node) => {
        this.lyricManager = node
    }
    _setPlayerManagerRef = (node) => {
        this.playerManager = node
    }
    _setScrollManagerRef = (node) => {
        this.scrollManager = node
    }
    _setSongManagerRef = (node) => {
        this.songManager = node
    }
    _setTimeVerseManagerRef = (node) => {
        this.timeVerseManager = node
    }
    _setTitleManagerRef = (node) => {
        this.titleManager = node
    }
    _setVerseManagerRef = (node) => {
        this.verseManager = node
    }

    render() {
        return (
            <___>
                <EventContainer
                    // Event manager props.
                    setCarouselAnnotationRef={this.setCarouselAnnotationRef}
                    setLyricAnnotationRef={this.setLyricAnnotationRef}
                    setVerseRef={this.setVerseRef}
                    setLyricVerseParentRef={this.setLyricVerseParentRef}
                    setCarouselParentRef={this.setCarouselParentRef}
                    scrollElementIntoView={this.scrollElementIntoView}
                    determineVerseBars={this.determineVerseBars}
                    selectSong={this.selectSong}
                    selectVerse={this.selectVerse}
                    togglePlay={this.togglePlay}
                />
                <AudioManager
                    setRef={this._setAudioManagerRef}
                    selectSong={this.selectSong}
                    toggleSelectedPlayer={this.toggleSelectedPlayer}
                />
                <PlayerManager
                    setRef={this._setPlayerManagerRef}
                    updateTime={this.updateTime}
                    handleSongEnd={this.handleSongEnd}
                />
                <ScrollManager
                    setRef={this._setScrollManagerRef}
                />
                <VerseBarManager
                    setRef={this._setVerseManagerRef}
                    getVerseElement={this.getVerseElement}
                />
                <SongDispatcher
                    setRef={this._setSongManagerRef}
                    togglePlay={this.togglePlay}
                    selectVerse={this.selectVerse}
                    updateSelectedPlayer={this.updateSelectedPlayer}
                />
                <TimeVerseHandler
                    setRef={this._setTimeVerseManagerRef}
                    determineVerseBars={this.determineVerseBars}
                    scrollElementIntoView={this.scrollElementIntoView}
                    updateSelectedPlayer={this.updateSelectedPlayer}
                />
                <LogManager />
                <OverviewListener />
                <TipsListener />
                <RenderedListener />
                <AnnotationListener />
                <AnnotationAccessListener />
                <CarouselListener />
                <DoublespeakerListener />
                <DidRenderListener />
                <LiveListener />
                <LogueListener />
                <LyricListener />
                <MainListener />
                <PopupAnnotationListener />
                <RenderListener />
                <SceneListener />
                <ScoreListener />
                <SliderListener />
                <SongListener />
                <WikiListener />
                <WikiWormholeListener />
                <WindowListener />
            </___>
        )
    }
}

// Bind Redux action creators to component props.
const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
        updateLoadStore
    }, dispatch)
)

export default connect(null, bindDispatchToProps)(ListenerContainer)
