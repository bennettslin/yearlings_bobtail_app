import React, { useEffect } from 'react'
import AnnotationAccessListener from '../../handlers/AnnotationAccess/Listener'
import AnnotationListener from '../../handlers/Annotation/Listener'
import WikiWormholeListener from '../../handlers/WikiWormhole/Listener'
import SceneChangeManager from '../../managers/SceneChange'
import SongChangeManager from '../../managers/SongChange'
import ScrollManager from '../../managers/Scroll'
import UrlManager from '../../managers/Url'
import AudioManager from '../../managers/Audio'

const ListenContainer = () => {
    useEffect(() => {
        logMount('ListenContainer')
    }, [])

    return (
        <>
            <AnnotationAccessListener />
            <AnnotationListener />
            <WikiWormholeListener />
            <SceneChangeManager />
            <SongChangeManager />
            <ScrollManager />
            <UrlManager />
            <AudioManager />
        </>
    )
}

export default ListenContainer
