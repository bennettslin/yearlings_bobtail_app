import React, { useEffect, useState, memo } from 'react'
import AccessStylesheet from '../../components/Stylesheets/Access'
import PresenceStylesheet from '../../components/Stylesheets/Presence'
import SceneCursorStylesheets from '../../components/Stylesheets/SceneCursor'
import VerseCursorStylesheets from '../../components/Stylesheets/VerseCursor'

const StylesheetContainer = () => {
    const [didMount, setDidMount] = useState(false)

    useEffect(() => {
        setDidMount(true)
    }, [])

    return didMount && (
        <>
            <AccessStylesheet />
            <PresenceStylesheet />
            <SceneCursorStylesheets />
            <VerseCursorStylesheets />
        </>
    )
}

export default memo(StylesheetContainer)
