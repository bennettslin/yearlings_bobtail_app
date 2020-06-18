import React, { useEffect } from 'react'
import AnnotationAccessListener from '../../handlers/AnnotationAccess/Listener'
import AnnotationListener from '../../handlers/Annotation/Listener'
import AppLoadListener from '../../listeners/AppLoad'
import LyricListener from '../../listeners/Lyric'
import LyricIndicesListener from '../../listeners/LyricIndices'
import OverviewTipsListener from '../../listeners/OverviewTips'
import SceneChangeExitListener from '../../listeners/SceneChange/Exit'
import SceneChangeEnterListener from '../../listeners/SceneChange/Enter'
import SongChangeExitListener from '../../listeners/SongChange/Exit'
import SongChangeUpdateListener from '../../listeners/SongChange/Update'
import SongChangeEnterListener from '../../listeners/SongChange/Enter'
import SongChangeDoneListener from '../../listeners/SongChange/Done'
import ScrollRenderListener from '../../listeners/ScrollRender'
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
            <LyricListener />
            <LyricIndicesListener />
            <OverviewTipsListener />
            <SceneChangeExitListener />
            <SceneChangeEnterListener />
            <ScrollRenderListener />
            <SongChangeExitListener />
            <SongChangeUpdateListener />
            <SongChangeEnterListener />
            <SongChangeDoneListener />
            <UrlListener />
            <WikiWormholeListener />
            <AudioPlayerManager />
        </>
    )
}

export default ListenContainer
