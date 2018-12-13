import React, { memo } from 'react'
import { propTypes } from './presenceMap'

import PresenceLayer from '../PresenceLayer'
import { FURNITURES } from 'constants/scene'

const FurnitureLayer = memo((props) => {
    return (
        <PresenceLayer
            {...props}
            {...{ presenceType: FURNITURES }}
        />
    )
})

FurnitureLayer.propTypes = propTypes

export default FurnitureLayer
