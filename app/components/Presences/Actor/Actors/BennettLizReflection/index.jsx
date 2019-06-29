import React, { memo } from 'react'
import { propTypes } from './instanceMap'

import Layer from '../../../Layer'
import { BENNETT_LIZ_REFLECTION } from '../../../../../constants/scene/actors'

const BennettLizReflectionLayer = memo(({ instanceKey }) => {
    return (
        <Layer
            {...{
                actorKey: BENNETT_LIZ_REFLECTION,
                instanceKey
            }}
        />
    )
})

BennettLizReflectionLayer.propTypes = propTypes

export default BennettLizReflectionLayer
