// These listeners take in no props from parent, so can live anywhere.

import React, { PureComponent, Fragment as ___ } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateLoadStore } from 'flux/load/action'

import EventContainer from '../EventContainer'
import LogManager from '../../managers/LogManager'

import AudioManager from '../../managers/AudioManager'
import PlayerManager from '../../managers/PlayerManager'

import AnnotationListener from '../../handlers/AnnotationHandler/Listener'
import AnnotationAccessListener from '../../handlers/AnnotationAccessHandler/Listener'
import AudioListener from '../../listeners/AudioListener'
import CarouselListener from '../../handlers/CarouselHandler/Listener'
import CloseListener from '../../listeners/CloseListener'
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

    /********
     * SONG *
     ********/

    handleSongEnd = () => {
        return this.audioManager.handleSongEnd()
    }

    /********
     * REFS *
     ********/

    _setAudioManagerRef = (node) => {
        this.audioManager = node
    }
    _setPlayerManagerRef = (node) => {
        this.playerManager = node
    }

    render() {
        return (
            <___>
                <EventContainer
                    // Event manager props.
                    togglePlay={this.togglePlay}
                />
                <AudioManager
                    setRef={this._setAudioManagerRef}
                    toggleSelectedPlayer={this.toggleSelectedPlayer}
                />
                <PlayerManager
                    setRef={this._setPlayerManagerRef}
                    handleSongEnd={this.handleSongEnd}
                />
                <LogManager />
                <AnnotationListener />
                <AnnotationAccessListener />
                <AudioListener />
                <CarouselListener />
                <CloseListener />
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
