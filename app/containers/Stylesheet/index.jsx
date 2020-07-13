import React, { memo } from 'react'
import PropTypes from 'prop-types'
import getDidMountHoc from '../../components/DidMountHoc'
import AccessStylesheet from '../../components/Stylesheets/Access'
import PresenceStylesheet from '../../components/Stylesheets/Presence'
import SceneCursorStylesheets from '../../components/Stylesheets/SceneCursor'
import VerseCursorStylesheets from '../../components/Stylesheets/VerseCursor'

const StylesheetContainer = ({ didMount }) => didMount && (
    <>
        <AccessStylesheet />
        <PresenceStylesheet />
        <SceneCursorStylesheets />
        <VerseCursorStylesheets />
    </>
)

StylesheetContainer.propTypes = {
    didMount: PropTypes.bool.isRequired
}

export default memo(getDidMountHoc(StylesheetContainer))
