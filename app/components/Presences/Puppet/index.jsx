import React from 'react'
import { propTypes } from './presenceMap'

import PresenceLayer from '../PresenceLayer'
import { PUPPETS } from 'constants/scene'

const PuppetLayer = (props) => {
    return (
        <PresenceLayer
            {...props}
            {...{ presenceType: PUPPETS }}
        />
    )
}

PuppetLayer.propTypes = propTypes

export default PuppetLayer
