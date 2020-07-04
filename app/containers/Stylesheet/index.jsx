import React from 'react'

import AccessStylesheet from '../../components/Stylesheets/Access'
import PresenceZIndexStylesheet from '../../components/Stylesheets/PresenceZIndex'
import SceneCursorStylesheets from '../../components/Stylesheets/SceneCursor'
import VerseCursorStylesheets from '../../components/Stylesheets/VerseCursor'

const StylesheetContainer = () => (
    <>
        <AccessStylesheet />
        <PresenceZIndexStylesheet />
        <SceneCursorStylesheets />
        <VerseCursorStylesheets />
    </>
)

export default StylesheetContainer
