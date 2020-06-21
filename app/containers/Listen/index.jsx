import React, { useEffect } from 'react'
import AnnotationAccessListener from '../../handlers/AnnotationAccess/Listener'
import AnnotationListener from '../../handlers/Annotation/Listener'
import LyricListener from '../../listeners/Lyric'
import LyricIndicesListener from '../../listeners/LyricIndices'
import OverviewTipsListener from '../../listeners/OverviewTips'
import SceneChangeExitListener from '../../listeners/SceneChange/Exit'
import SceneChangeEnterListener from '../../listeners/SceneChange/Enter'
import SongChangeExitListener from '../../listeners/SongChange'
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
            <LyricListener />
            <LyricIndicesListener />
            <OverviewTipsListener />
            <SceneChangeExitListener />
            <SceneChangeEnterListener />
            <ScrollRenderListener />
            <SongChangeExitListener />
            <UrlListener />
            <WikiWormholeListener />
            <AudioPlayerManager />
        </>
    )
}

export default ListenContainer
