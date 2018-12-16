import React, { memo } from 'react'
import { propTypes } from './presenceMap'

import LayerHoc from '../LayerHoc'
import { ACTORS } from 'constants/scene'

const ActorLayer = memo((props) => {
    return (
        <LayerHoc
            {...props}
            {...{ presenceType: ACTORS }}
        />
    )
})

ActorLayer.propTypes = propTypes

export default ActorLayer
