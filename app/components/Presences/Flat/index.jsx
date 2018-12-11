import React from 'react'
import { propTypes } from './presenceMap'

import PresenceLayer from '../PresenceLayer'
import { FLATS } from 'constants/scene'

const FlatLayer = (props) => {
    return (
        <PresenceLayer
            {...props}
            {...{ presenceType: FLATS }}
        />
    )
}

FlatLayer.propTypes = propTypes

export default FlatLayer
