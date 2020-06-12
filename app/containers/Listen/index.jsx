import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import AnnotationAccessListener from '../../handlers/AnnotationAccess/Listener'
import AnnotationListener from '../../handlers/Annotation/Listener'
import AppLoadListener from '../../listeners/AppLoad'
import AudioListener from '../../listeners/Audio'
import CarouselNavListener from '../../handlers/CarouselNav/Listener'
import DotsSlideListener from '../../handlers/DotsSlide/Listener'
import LogueListener from '../../listeners/Logue'
import LyricListener from '../../handlers/Lyric/Listener'
import LyricIndicesListener from '../../listeners/LyricIndices'
import OverviewListener from '../../handlers/Overview/Listener'
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
import WikiWormholeListener from '../../handlers/WikiWormhole/Listener'
import AudioPlayerManager from '../../managers/AudioPlayer'
import {
    mapCanScoreMount,
    mapCanSliderMount
} from '../../redux/viewport/selectors'

const ListenContainer = () => {
    const
        canScoreMount = useSelector(mapCanScoreMount),
        canSliderMount = useSelector(mapCanSliderMount)

    useEffect(() => {
        logMount('ListenContainer')
    }, [])

    return (
        <>
            <AnnotationAccessListener />
            <AnnotationListener />
            <AppLoadListener />
            <AudioListener />
            <CarouselNavListener />
            <DotsSlideListener />
            <LogueListener />
            <LyricListener />
            <LyricIndicesListener />
            <OverviewListener />
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
            <WikiWormholeListener />
            <AudioPlayerManager />
        </>
    )
}

export default ListenContainer
