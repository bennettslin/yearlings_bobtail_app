import React from 'react'
import { propTypes } from './presenceMap'

import PresenceLayer from '../PresenceLayer'
import { CUTOUTS } from 'constants/scene'

const CutoutLayer = (props) => {
    return (
        <PresenceLayer
            {...props}
            {...{ presenceType: CUTOUTS }}
        />
    )
}

CutoutLayer.propTypes = propTypes

export default CutoutLayer
