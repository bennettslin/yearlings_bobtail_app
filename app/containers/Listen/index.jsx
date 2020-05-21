import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import AccessListener from '../../listeners/Access'
import AnnotationAccessListener from '../../handlers/AnnotationAccess/Listener'
import AnnotationListener from '../../handlers/Annotation/Listener'
import AppLoadListener from '../../listeners/AppLoad'
import AudioListener from '../../listeners/Audio'
import CarouselNavListener from '../../handlers/CarouselNav/Listener'
import DotsSlideListener from '../../handlers/DotsSlide/Listener'
import DoublespeakerListener from '../../listeners/Doublespeaker'
import LogueListener from '../../listeners/Logue'
import LyricListener from '../../handlers/Lyric/Listener'
import LyricIndicesListener from '../../listeners/LyricIndices'
import MainListener from '../../listeners/Main'
import OverviewListener from '../../handlers/Overview/Listener'
import PopupAnnotationListener from '../../listeners/PopupAnnotation'
import RoutingListener from '../../listeners/Routing'
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

import AudioPlayerManager from '../../managers/AudioPlayer'

import FocusContainer from '../Focus'

const mapStateToProps = ({
    mountStore: {
        canScoreMount,
        canSliderMount
    }
}) => ({
    canScoreMount,
    canSliderMount
})

class ListenContainer extends PureComponent {

    static propTypes = {
        // Through Redux.
        canScoreMount: PropTypes.bool.isRequired,
        canSliderMount: PropTypes.bool.isRequired
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
            <>
                <AccessListener />
                <AnnotationAccessListener />
                <AnnotationListener />
                <AppLoadListener />
                <AudioListener />
                <CarouselNavListener />
                <DotsSlideListener />
                <DoublespeakerListener />
                <LogueListener />
                <LyricListener />
                <LyricIndicesListener />
                <MainListener />
                <OverviewListener />
                <PopupAnnotationListener />
                <RoutingListener />
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

                <AudioPlayerManager />
                <FocusContainer />
            </>
        )
    }
}

export default connect(mapStateToProps)(ListenContainer)
