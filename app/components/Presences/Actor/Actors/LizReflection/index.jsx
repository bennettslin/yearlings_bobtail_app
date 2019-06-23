import React, { memo } from 'react'
import { propTypes } from './instanceMap'

import LayerHoc from '../../../LayerHoc'
import { LIZ_REFLECTION } from '../../../../../constants/scene/actors'

const LizReflectionLayer = memo(({ instanceKey }) => {
    return (
        <LayerHoc
            {...{
                actorKey: LIZ_REFLECTION,
                instanceKey
            }}
        />
    )
})

LizReflectionLayer.propTypes = propTypes

export default LizReflectionLayer
