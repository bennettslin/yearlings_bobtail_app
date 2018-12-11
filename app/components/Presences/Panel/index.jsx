import React from 'react'
import { propTypes } from './presenceMap'

import PresenceLayer from '../PresenceLayer'
import { PANELS } from 'constants/scene'

const PanelLayer = (props) => {
    return (
        <PresenceLayer
            {...props}
            {...{ presenceType: PANELS }}
        />
    )
}

PanelLayer.propTypes = propTypes

export default PanelLayer
