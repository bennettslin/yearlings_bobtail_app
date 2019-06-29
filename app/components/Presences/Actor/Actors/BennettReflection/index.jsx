import React, { memo } from 'react'
import { propTypes } from './instanceMap'

import Layer from '../../../Layer'
import { BENNETT_REFLECTION } from '../../../../../constants/scene/actors'

const BennettReflectionLayer = memo(({ instanceKey }) => {
    return (
        <Layer
            {...{
                actorKey: BENNETT_REFLECTION,
                instanceKey
            }}
        />
    )
})

BennettReflectionLayer.propTypes = propTypes

export default BennettReflectionLayer
