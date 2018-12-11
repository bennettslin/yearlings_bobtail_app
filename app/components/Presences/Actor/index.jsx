import React from 'react'
import { propTypes } from './presenceMap'

import PresenceLayer from '../PresenceLayer'
import { ACTORS } from 'constants/scene'

const ActorLayer = (props) => {
    return (
        <PresenceLayer
            {...props}
            {...{ presenceType: ACTORS }}
        />
    )
}

ActorLayer.propTypes = propTypes

export default ActorLayer
