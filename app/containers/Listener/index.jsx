import React, { useEffect } from 'react'
import AnnotationAccessListener from '../../handlers/AnnotationAccess/Listener'
import AnnotationListener from '../../handlers/Annotation/Listener'
import WikiWormholeListener from '../../handlers/WikiWormhole/Listener'
import SceneChangeManager from '../../managers/SceneChange'
import SongChangeManager from '../../managers/SongChange'
import ScrollManager from '../../managers/Scroll'
import UrlManager from '../../managers/Url'

const ListenerContainer = () => {
    useEffect(() => {
        logMount('ListenerContainer')
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
        </>
    )
}

export default ListenerContainer
