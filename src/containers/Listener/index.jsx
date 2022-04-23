import React, { useEffect } from 'react'
import AnnotationAccessListener from '../../handlers/AnnotationAccess/Listener'
import AnnotationListener from '../../handlers/Annotation/Listener'
import WikiWormholeListener from '../../handlers/WikiWormhole/Listener'
import SceneChangeManager from '../../managers/SceneChange'
import SongChangeManager from '../../managers/SongChange'
import ScrollManager from '../../managers/Scroll'
import BrowserNavManager from '../../managers/BrowserNav'

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
            <BrowserNavManager />
        </>
    )
}

export default ListenerContainer
