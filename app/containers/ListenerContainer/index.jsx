import React, { PureComponent, Fragment as ___ } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateLoadStore } from 'flux/load/action'

import EventContainer from '../EventContainer'
import LogHandler from 'handlers/LogHandler'

import AudioManager from '../../managers/AudioManager'
import OverviewManager from '../../managers/OverviewManager'
import PlayerManager from '../../managers/PlayerManager'
import ScrollManager from '../../managers/ScrollManager'
import SongManager from '../../managers/SongManager'
import TimeVerseManager from '../../managers/TimeVerseManager'
import TipsManager from '../../managers/TipsManager'
import VerseManager from '../../managers/VerseManager'

import RenderedListener from '../../listeners/RenderedListener'
import AnnotationListener from '../../listeners/AnnotationListener'
import AnnotationAccessListener from '../../listeners/AnnotationAccessListener'
import CarouselNavListener from '../../listeners/CarouselNavListener'
import DoublespeakerListener from '../../listeners/DoublespeakerListener'
import LogueListener from '../../listeners/LogueListener'
import LyricExpandListener from '../../listeners/LyricExpandListener'
import OverlayListener from '../../listeners/OverlayListener'
import RenderListener from '../../listeners/RenderListener'
import SceneListener from '../../listeners/SceneListener'
import ScoreListener from '../../listeners/ScoreListener'
import SliderListener from '../../listeners/SliderListener'
import SongListener from '../../listeners/SongListener'
import WikiListener from '../../listeners/WikiListener'
import WikiWormholeListener from '../../listeners/WikiWormholeListener'
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

    /********
     * TIPS *
     ********/

    selectTips = (payload) => {
        return this.tipsManager.selectTips(payload)
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
    _setOverviewManagerRef = (node) => {
        this.overviewManager = node
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
    _setTipsManagerRef = (node) => {
        this.tipsManager = node
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
                    selectOverview={this.selectOverview}
                    selectSong={this.selectSong}
                    selectTips={this.selectTips}
                    selectVerse={this.selectVerse}
                    togglePlay={this.togglePlay}
                />
                <AudioManager
                    setRef={this._setAudioManagerRef}
                    selectSong={this.selectSong}
                    toggleSelectedPlayer={this.toggleSelectedPlayer}
                />
                <OverviewManager
                    setRef={this._setOverviewManagerRef}
                />
                <PlayerManager
                    setRef={this._setPlayerManagerRef}
                    updateTime={this.updateTime}
                    handleSongEnd={this.handleSongEnd}
                />
                <ScrollManager
                    setRef={this._setScrollManagerRef}
                />
                <SongManager
                    setRef={this._setSongManagerRef}
                    togglePlay={this.togglePlay}
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
                />
                <VerseManager
                    setRef={this._setVerseManagerRef}
                    getVerseElement={this.getVerseElement}
                />
                <LogHandler />
                <RenderedListener />
                <AnnotationListener />
                <AnnotationAccessListener />
                <CarouselNavListener />
                <DoublespeakerListener />
                <LyricExpandListener />
                <LogueListener />
                <OverlayListener />
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
