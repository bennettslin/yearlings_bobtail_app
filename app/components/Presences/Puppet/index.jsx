import React, { memo } from 'react'
import { propTypes } from './presenceMap'

import PresenceLayer from '../PresenceLayer'
import { PUPPETS } from 'constants/scene'

const PuppetLayer = memo((props) => {
    return (
        <PresenceLayer
            {...props}
            {...{ presenceType: PUPPETS }}
        />
    )
})

PuppetLayer.propTypes = propTypes

export default PuppetLayer
