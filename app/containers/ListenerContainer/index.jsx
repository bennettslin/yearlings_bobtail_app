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

// TODO: Eventually remove this one.
import SongDispatcher from '../../handlers/SongHandler/Dispatcher'

import AnnotationListener from '../../handlers/AnnotationHandler/Listener'
import AnnotationAccessListener from '../../handlers/AnnotationAccessHandler/Listener'
import AudioListener from '../../listeners/AudioListener'
import CarouselListener from '../../handlers/CarouselHandler/Listener'
import DidRenderListener from '../../listeners/DidRenderListener'
import DoublespeakerListener from '../../listeners/DoublespeakerListener'
import LiveListener from '../../listeners/LiveListener'
import LogueListener from '../../listeners/LogueListener'
import LyricListener from '../../handlers/LyricHandler/Listener'
import MainListener from '../../listeners/MainListener'
import OverviewListener from '../../handlers/OverviewHandler/Listener'
import PopupAnnotationListener from '../../listeners/PopupAnnotationListener'
import RenderListener from '../../listeners/RenderListener'
import RenderedListener from '../../listeners/RenderedListener'
import RenderedSongListener from '../../listeners/RenderedSongListener'
import SceneListener from '../../handlers/SceneHandler/Listener'
import ScoreListener from '../../handlers/ScoreHandler/Listener'
import SongListener from '../../handlers/SongHandler/Listener'
import SliderListener from '../../listeners/SliderListener'
import TipsListener from '../../handlers/TipsHandler/Listener'
import WikiListener from '../../handlers/WikiHandler/Listener'
import WikiWormholeListener from '../../handlers/WikiWormholeHandler/Listener'
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

    setLyricParentRef = (payload) => {
        return this.scrollManager.setLyricParentRef(payload)
    }

    setCarouselParentRef = (payload) => {
        return this.scrollManager.setCarouselParentRef(payload)
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
                    setLyricParentRef={this.setLyricParentRef}
                    setCarouselParentRef={this.setCarouselParentRef}
                    selectSong={this.selectSong}
                    togglePlay={this.togglePlay}
                />
                <AudioManager
                    setRef={this._setAudioManagerRef}
                    selectSong={this.selectSong}
                    toggleSelectedPlayer={this.toggleSelectedPlayer}
                />
                <PlayerManager
                    setRef={this._setPlayerManagerRef}
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
                />
                <LogManager />
                <AnnotationListener />
                <AnnotationAccessListener />
                <AudioListener />
                <CarouselListener />
                <DidRenderListener />
                <DoublespeakerListener />
                <LiveListener />
                <LogueListener />
                <LyricListener />
                <MainListener />
                <OverviewListener />
                <PopupAnnotationListener />
                <RenderListener />
                <RenderedListener />
                <RenderedSongListener />
                <SceneListener />
                <ScoreListener />
                <SliderListener />
                <SongListener />
                <TipsListener />
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
