import React, { memo } from 'react'
import { propTypes } from './presenceMap'

import PresenceLayer from '../PresenceLayer'
import { BACKDROPS } from 'constants/scene'

const BackdropLayer = memo((props) => {
    return (
        <PresenceLayer
            {...props}
            {...{ presenceType: BACKDROPS }}
        />
    )
})

BackdropLayer.propTypes = propTypes

export default BackdropLayer
