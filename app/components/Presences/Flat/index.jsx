import React, { memo } from 'react'
import { propTypes } from './presenceMap'

import PresenceLayer from '../PresenceLayer'
import { FLATS } from 'constants/scene'

const FlatLayer = memo((props) => {
    return (
        <PresenceLayer
            {...props}
            {...{ presenceType: FLATS }}
        />
    )
})

FlatLayer.propTypes = propTypes

export default FlatLayer
