import React, { useEffect } from 'react'
import AnnotationAccessListener from '../../handlers/AnnotationAccess/Listener'
import AnnotationListener from '../../handlers/Annotation/Listener'
import LyricListener from '../../listeners/Lyric'
import SceneChangeListener from '../../listeners/SceneChange'
import SongChangeListener from '../../listeners/SongChange'
import UrlListener from '../../listeners/Url'
import WikiWormholeListener from '../../handlers/WikiWormhole/Listener'
import AudioManager from '../../managers/Audio'

const ListenContainer = () => {
    useEffect(() => {
        logMount('ListenContainer')
    }, [])

    return (
        <>
            <AnnotationAccessListener />
            <AnnotationListener />
            <LyricListener />
            <SceneChangeListener />
            <SongChangeListener />
            <UrlListener />
            <WikiWormholeListener />
            <AudioManager />
        </>
    )
}

export default ListenContainer
