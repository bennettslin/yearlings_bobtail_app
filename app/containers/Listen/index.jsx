import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import {
    CAN_SCORE_MOUNT_SELECTOR,
    CAN_SLIDER_MOUNT_SELECTOR
} from '../../redux/mount/selectors'

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
import UrlListener from '../../listeners/Url'
import WikiListener from '../../handlers/Wiki/Listener'
import WikiWormholeListener from '../../handlers/WikiWormhole/Listener'

import AudioPlayerManager from '../../managers/AudioPlayer'
import FocusContainer from '../Focus'

const ListenContainer = () => {
    const
        canScoreMount = useSelector(CAN_SCORE_MOUNT_SELECTOR),
        canSliderMount = useSelector(CAN_SLIDER_MOUNT_SELECTOR)

    useEffect(() => {
        logMount('ListenContainer')
    }, [])

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
            <UrlListener />
            <WikiListener />
            <WikiWormholeListener />
            <AudioPlayerManager />
            <FocusContainer />
        </>
    )
}

export default ListenContainer
