import React, { memo } from 'react'
import { propTypes } from './instanceMap'

import Layer from '../../../Layer'
import { LIZ_REFLECTION } from '../../../../../constants/scene/actors'

const LizReflectionLayer = memo(({ instanceKey }) => {
    return (
        <Layer
            {...{
                actorKey: LIZ_REFLECTION,
                instanceKey
            }}
        />
    )
})

LizReflectionLayer.propTypes = propTypes

export default LizReflectionLayer
