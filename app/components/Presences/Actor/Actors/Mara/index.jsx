import React, { memo } from 'react'
import { propTypes } from './instanceMap'

import Layer from '../../../Layer'
import { MARA } from '../../../../../constants/scene/actors'

const MaraLayer = memo(({ instanceKey }) => {
    return (
        <Layer
            {...{
                actorKey: MARA,
                instanceKey
            }}
        />
    )
})

MaraLayer.propTypes = propTypes

export default MaraLayer
