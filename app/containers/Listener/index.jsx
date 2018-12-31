import React, { PureComponent, Fragment as ___ } from 'react'

import AppLoadListener from '../../listeners/AppLoad'
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
import LyricIndicesListener from '../../listeners/LyricIndices'
import SceneChangeExitListener from '../../listeners/SceneChange/Exit'
import SceneChangeEnterListener from '../../listeners/SceneChange/Enter'
import ScoreListener from '../../handlers/Score/Listener'
import SongListener from '../../handlers/Song/Listener'
import SongChangeExitListener from '../../listeners/SongChange/Exit'
import SongChangeUpdateListener from '../../listeners/SongChange/Update'
import SongChangeEnterListener from '../../listeners/SongChange/Enter'
import ScrollRenderListener from '../../listeners/ScrollRender'
import SliderListener from '../../listeners/Slider'
import TipsListener from '../../handlers/Tips/Listener'
import WikiListener from '../../handlers/Wiki/Listener'
import WikiWormholeListener from '../../handlers/WikiWormhole/Listener'
import WindowResizeExitListener from '../../listeners/WindowResize/Exit'

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
                <AppLoadListener />
                <LyricIndicesListener />
                <SceneChangeExitListener />
                <SceneChangeEnterListener />
                <ScoreListener />
                <ScrollRenderListener />
                <SliderListener />
                <SongListener />
                <SongChangeExitListener />
                <SongChangeUpdateListener />
                <SongChangeEnterListener />
                <TipsListener />
                <WikiListener />
                <WikiWormholeListener />
                <WindowResizeExitListener />

                <AudioPlayerManager />
                <LogManager />

                <FocusContainer />
            </___>
        )
    }
}

export default ListenerContainer
