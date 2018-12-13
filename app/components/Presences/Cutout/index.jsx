import React, { memo } from 'react'
import { propTypes } from './presenceMap'

import PresenceLayer from '../PresenceLayer'
import { CUTOUTS } from 'constants/scene'

const CutoutLayer = memo((props) => {
    return (
        <PresenceLayer
            {...props}
            {...{ presenceType: CUTOUTS }}
        />
    )
})

CutoutLayer.propTypes = propTypes

export default CutoutLayer
