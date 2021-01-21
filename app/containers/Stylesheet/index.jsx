import React from 'react'
import PropTypes from 'prop-types'
import getDidMountHoc from '../../components/DidMountHoc'
import AccessStylesheet from '../../components/Stylesheets/Access'
import PresenceTransitionStylesheets from '../../components/Stylesheets/PresenceTransition'
import PresenceZIndexStylesheet from '../../components/Stylesheets/PresenceZIndex'
import SceneCursorStylesheets from '../../components/Stylesheets/SceneCursor'
import VerseCursorStylesheets from '../../components/Stylesheets/VerseCursor'

const StylesheetContainer = ({ didMount }) => didMount && (
    <>
        <AccessStylesheet />
        <PresenceZIndexStylesheet />
        <PresenceTransitionStylesheets />
        <SceneCursorStylesheets />
        <VerseCursorStylesheets />
    </>
)

StylesheetContainer.propTypes = {
    didMount: PropTypes.bool.isRequired,
}

export default getDidMountHoc(StylesheetContainer)
