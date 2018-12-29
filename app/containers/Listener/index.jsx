import React, { PureComponent, Fragment as ___ } from 'react'

import AnnotationAccessListener from '../../handlers/AnnotationAccess/Listener'
import AnnotationListener from '../../handlers/Annotation/Listener'
import AudioListener from '../../listeners/Audio'
import CarouselListener from '../../handlers/Carousel/Listener'
import DoublespeakerListener from '../../listeners/Doublespeaker'
import LogueListener from '../../listeners/Logue'
import LyricListener from '../../handlers/Lyric/Listener'
import MainListener from '../../listeners/Main'
import OverviewListener from '../../handlers/Overview/Listener'
import PopupAnnotationListener from '../../listeners/PopupAnnotation'
import PresenceListener from '../../listeners/Presence'
import RenderCanListener from '../../listeners/RenderCan'
import RenderDidListener from '../../listeners/RenderDid'
import RenderedListener from '../../listeners/Rendered'
import SceneChangeDispatcher from '../../handlers/SceneChange/Dispatcher'
import SceneChangeListener from '../../handlers/SceneChange/Listener'
import ScoreListener from '../../handlers/Score/Listener'
import SongListener from '../../handlers/Song/Listener'
import SongChangeListener from '../../handlers/SongChange/Listener'
import ScrollRenderListener from '../../listeners/ScrollRender'
import SliderListener from '../../listeners/Slider'
import TipsListener from '../../handlers/Tips/Listener'
import WikiListener from '../../handlers/Wiki/Listener'
import WikiWormholeListener from '../../handlers/WikiWormhole/Listener'
import WindowResizeDispatcher from '../../handlers/WindowResize/Dispatcher'
import WindowResizeListener from '../../handlers/WindowResize/Listener'

import AudioPlayerManager from '../../managers/AudioPlayerManager'
import LogManager from '../../managers/LogManager'

import FocusContainer from '../Focus'

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
