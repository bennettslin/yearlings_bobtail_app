import React, { PureComponent, Fragment as ___ } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import AccessListener from '../../listeners/Access'
import AnnotationAccessListener from '../../handlers/AnnotationAccess/Listener'
import AnnotationListener from '../../handlers/Annotation/Listener'
import AppLoadListener from '../../listeners/AppLoad'
import AudioListener from '../../listeners/Audio'
import CarouselListener from '../../handlers/Carousel/Listener'
import DotsSlideListener from '../../handlers/DotsSlide/Listener'
import DoublespeakerListener from '../../listeners/Doublespeaker'
import LogueListener from '../../listeners/Logue'
import LyricListener from '../../handlers/Lyric/Listener'
import LyricIndicesListener from '../../listeners/LyricIndices'
import MainListener from '../../listeners/Main'
import NavListener from '../../handlers/Nav/Listener'
import OverviewListener from '../../handlers/Overview/Listener'
import PopupAnnotationListener from '../../listeners/PopupAnnotation'
import SceneChangeExitListener from '../../listeners/SceneChange/Exit'
import SceneChangeEnterListener from '../../listeners/SceneChange/Enter'
import ScoreListener from '../../handlers/Score/Listener'
import SongListener from '../../handlers/Song/Listener'
import SongChangeExitListener from '../../listeners/SongChange/Exit'
import SongChangeUpdateListener from '../../listeners/SongChange/Update'
import SongChangeEnterListener from '../../listeners/SongChange/Enter'
import SongChangeDoneListener from '../../listeners/SongChange/Done'
import ScrollRenderListener from '../../listeners/ScrollRender'
import SliderListener from '../../listeners/Slider'
import TipsListener from '../../handlers/Tips/Listener'
import WikiListener from '../../handlers/Wiki/Listener'
import WikiWormholeListener from '../../handlers/WikiWormhole/Listener'
import WindowResizeExitListener from '../../listeners/WindowResize/Exit'

import AudioPlayerManager from '../../managers/AudioPlayer'
import LogManager from '../../managers/Log'

import FocusContainer from '../Focus'

const mapStateToProps = ({
    mountStore: {
        canScoreMount,
        canSliderMount
    },
    viewportStore: { isDesktopWidth }
}) => ({
    canScoreMount,
    canSliderMount,
    isDesktopWidth
})

class ListenContainer extends PureComponent {

    static propTypes = {
        // Through Redux.
        canScoreMount: PropTypes.bool.isRequired,
        canSliderMount: PropTypes.bool.isRequired,
        isDesktopWidth: PropTypes.bool.isRequired
    }

    componentDidMount() {
        logMount('ListenContainer')
    }

    render() {
        const {
            canScoreMount,
            canSliderMount
        } = this.props

        return (
            <___>
                <AccessListener />
                <AnnotationAccessListener />
                <AnnotationListener />
                <AppLoadListener />
                <AudioListener />
                <CarouselListener />
                <DotsSlideListener />
                <DoublespeakerListener />
                <LogueListener />
                <LyricListener />
                <LyricIndicesListener />
                <MainListener />
                <NavListener />
                <OverviewListener />
                <PopupAnnotationListener />
                <SceneChangeExitListener />
                <SceneChangeEnterListener />
                {canScoreMount && (
                    <ScoreListener />
                )}
                <ScrollRenderListener />
                {canSliderMount && (
                    <SliderListener />
                )}
                <SongListener />
                <SongChangeExitListener />
                <SongChangeUpdateListener />
                <SongChangeEnterListener />
                <SongChangeDoneListener />
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

export default connect(mapStateToProps)(ListenContainer)
