import React, { PureComponent, Fragment as ___ } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateLoadStore } from 'flux/load/action'

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
import RenderableListener from '../../listeners/RenderableListener'
import RenderCanListener from '../../listeners/RenderCanListener'
import RenderDidListener from '../../listeners/RenderDidListener'
import RenderedListener from '../../listeners/RenderedListener'
import SceneListener from '../../handlers/SceneHandler/Listener'
import ScoreListener from '../../handlers/ScoreHandler/Listener'
import SongListener from '../../handlers/SongHandler/Listener'
import ScrollRenderListener from '../../listeners/ScrollRenderListener'
import SliderListener from '../../listeners/SliderListener'
import TipsListener from '../../handlers/TipsHandler/Listener'
import WikiListener from '../../handlers/WikiHandler/Listener'
import WikiWormholeListener from '../../handlers/WikiWormholeHandler/Listener'
import WindowListener from '../../listeners/WindowListener'

import AudioPlayerManager from '../../managers/AudioPlayerManager'
import LogManager from '../../managers/LogManager'

import FocusContainer from '../FocusContainer'

class ListenerContainer extends PureComponent {

    componentDidMount() {
        logMount('ListenerContainer')

        this.props.updateLoadStore({ appMounted: true })
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
                <RenderableListener />
                <RenderCanListener />
                <RenderDidListener />
                <RenderedListener />
                <SceneListener />
                <ScoreListener />
                <ScrollRenderListener />
                <SliderListener />
                <SongListener />
                <TipsListener />
                <WikiListener />
                <WikiWormholeListener />
                <WindowListener />

                <AudioPlayerManager />
                <LogManager />

                <FocusContainer />
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
