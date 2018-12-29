import React, { PureComponent, Fragment as ___ } from 'react'

import AnnotationAccessListener from '../../handlers/AnnotationAccess/Listener'
import AnnotationListener from '../../handlers/Annotation/Listener'
import AudioListener from '../../listeners/AudioListener'
import CarouselListener from '../../handlers/Carousel/Listener'
import DoublespeakerListener from '../../listeners/DoublespeakerListener'
import LogueListener from '../../listeners/LogueListener'
import LyricListener from '../../handlers/Lyric/Listener'
import MainListener from '../../listeners/MainListener'
import OverviewListener from '../../handlers/Overview/Listener'
import PopupAnnotationListener from '../../listeners/PopupAnnotationListener'
import PresenceListener from '../../listeners/PresenceListener'
import RenderCanListener from '../../listeners/RenderCanListener'
import RenderDidListener from '../../listeners/RenderDidListener'
import RenderedListener from '../../listeners/RenderedListener'
import SceneChangeDispatcher from '../../handlers/SceneChange/Dispatcher'
import SceneChangeListener from '../../handlers/SceneChange/Listener'
import ScoreListener from '../../handlers/Score/Listener'
import SongListener from '../../handlers/Song/Listener'
import SongChangeListener from '../../handlers/SongChange/Listener'
import ScrollRenderListener from '../../listeners/ScrollRenderListener'
import SliderListener from '../../listeners/SliderListener'
import TipsListener from '../../handlers/Tips/Listener'
import WikiListener from '../../handlers/Wiki/Listener'
import WikiWormholeListener from '../../handlers/WikiWormhole/Listener'
import WindowResizeDispatcher from '../../handlers/WindowResize/Dispatcher'
import WindowResizeListener from '../../handlers/WindowResize/Listener'

import AudioPlayerManager from '../../managers/AudioPlayerManager'
import LogManager from '../../managers/LogManager'

import FocusContainer from '../FocusContainer'

class ListenerContainer extends PureComponent {

    componentDidMount() {
        logMount('ListenerContainer')
    }

    render() {
        return (
            <___>
                <AnnotationAccessListener />
                <AnnotationListener />
                <AudioListener />
                <CarouselListener />
                <DoublespeakerListener />
                <LogueListener />
                <LyricListener />
                <MainListener />
                <OverviewListener />
                <PopupAnnotationListener />
                <PresenceListener />
                <RenderCanListener />
                <RenderDidListener />
                <RenderedListener />
                <SceneChangeDispatcher />
                <SceneChangeListener />
                <ScoreListener />
                <ScrollRenderListener />
                <SliderListener />
                <SongListener />
                <SongChangeListener />
                <TipsListener />
                <WikiListener />
                <WikiWormholeListener />
                <WindowResizeDispatcher />
                <WindowResizeListener />

                <AudioPlayerManager />
                <LogManager />

                <FocusContainer />
            </___>
        )
    }
}

export default ListenerContainer
