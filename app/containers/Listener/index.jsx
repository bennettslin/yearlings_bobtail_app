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
import RenderDidListener from '../../listeners/RenderDid'
import RenderedListener from '../../listeners/Rendered'
import SceneChangeExitListener from '../../listeners/SceneChange/Exit'
import SceneChangeEnterListener from '../../listeners/SceneChange/Enter'
import ScoreListener from '../../handlers/Score/Listener'
import SongListener from '../../handlers/Song/Listener'
import SongChangeListener from '../../handlers/SongChange/Listener'
import ScrollRenderListener from '../../listeners/ScrollRender'
import SliderListener from '../../listeners/Slider'
import TipsListener from '../../handlers/Tips/Listener'
import WikiListener from '../../handlers/Wiki/Listener'
import WikiWormholeListener from '../../handlers/WikiWormhole/Listener'
import WindowResizeExitListener from '../../listeners/WindowResize/Exit'
import WindowResizeEnterListener from '../../listeners/WindowResize/Enter'

import AudioPlayerManager from '../../managers/AudioPlayer'
import LogManager from '../../managers/Log'

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
                <RenderDidListener />
                <RenderedListener />
                <SceneChangeExitListener />
                <SceneChangeEnterListener />
                <ScoreListener />
                <ScrollRenderListener />
                <SliderListener />
                <SongListener />
                <SongChangeListener />
                <TipsListener />
                <WikiListener />
                <WikiWormholeListener />
                <WindowResizeExitListener />
                <WindowResizeEnterListener />

                <AudioPlayerManager />
                <LogManager />

                <FocusContainer />
            </___>
        )
    }
}

export default ListenerContainer
