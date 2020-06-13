import React, { useEffect } from 'react'
import AnnotationAccessListener from '../../handlers/AnnotationAccess/Listener'
import AnnotationListener from '../../handlers/Annotation/Listener'
import AppLoadListener from '../../listeners/AppLoad'
import DotsSlideListener from '../../handlers/DotsSlide/Listener'
import LyricListener from '../../handlers/Lyric/Listener'
import LyricIndicesListener from '../../listeners/LyricIndices'
import OverviewListener from '../../handlers/Overview/Listener'
import SceneChangeExitListener from '../../listeners/SceneChange/Exit'
import SceneChangeEnterListener from '../../listeners/SceneChange/Enter'
import SongListener from '../../handlers/Song/Listener'
import SongChangeExitListener from '../../listeners/SongChange/Exit'
import SongChangeUpdateListener from '../../listeners/SongChange/Update'
import SongChangeEnterListener from '../../listeners/SongChange/Enter'
import SongChangeDoneListener from '../../listeners/SongChange/Done'
import ScrollRenderListener from '../../listeners/ScrollRender'
import TipsListener from '../../handlers/Tips/Listener'
import UrlListener from '../../listeners/Url'
import WikiWormholeListener from '../../handlers/WikiWormhole/Listener'
import AudioPlayerManager from '../../managers/AudioPlayer'

const ListenContainer = () => {
    useEffect(() => {
        logMount('ListenContainer')
    }, [])

    return (
        <>
            <AnnotationAccessListener />
            <AnnotationListener />
            <AppLoadListener />
            <DotsSlideListener />
            <LyricListener />
            <LyricIndicesListener />
            <OverviewListener />
            <SceneChangeExitListener />
            <SceneChangeEnterListener />
            <ScrollRenderListener />
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
