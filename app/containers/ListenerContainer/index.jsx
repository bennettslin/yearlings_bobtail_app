import React, { PureComponent, Fragment as ___ } from 'react'

import AnnotationAccessListener from '../../handlers/AnnotationAccessHandler/Listener'
import AnnotationListener from '../../handlers/AnnotationHandler/Listener'
import AudioListener from '../../listeners/AudioListener'
import CarouselListener from '../../handlers/CarouselHandler/Listener'
import DoublespeakerListener from '../../listeners/DoublespeakerListener'
import LogueListener from '../../listeners/LogueListener'
import LyricListener from '../../handlers/LyricHandler/Listener'
import MainListener from '../../listeners/MainListener'
import OverviewListener from '../../handlers/OverviewHandler/Listener'
import PopupAnnotationListener from '../../listeners/PopupAnnotationListener'
import PresenceListener from '../../listeners/PresenceListener'
import RenderCanListener from '../../listeners/RenderCanListener'
import RenderDidListener from '../../listeners/RenderDidListener'
import RenderedListener from '../../listeners/RenderedListener'
import SceneChangeDispatcher from '../../handlers/SceneChangeHandler/Dispatcher'
import SceneChangeListener from '../../handlers/SceneChangeHandler/Listener'
import ScoreListener from '../../handlers/ScoreHandler/Listener'
import SongListener from '../../handlers/SongHandler/Listener'
import SongChangeListener from '../../handlers/SongChangeHandler/Listener'
import ScrollRenderListener from '../../listeners/ScrollRenderListener'
import SliderListener from '../../listeners/SliderListener'
import TipsListener from '../../handlers/TipsHandler/Listener'
import WikiListener from '../../handlers/WikiHandler/Listener'
import WikiWormholeListener from '../../handlers/WikiWormholeHandler/Listener'
import WindowResizeDispatcher from '../../handlers/WindowResizeHandler/Dispatcher'
import WindowResizeListener from '../../handlers/WindowResizeHandler/Listener'

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
