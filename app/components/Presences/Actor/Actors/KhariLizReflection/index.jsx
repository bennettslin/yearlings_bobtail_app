import React, { memo } from 'react'
import { propTypes } from './instanceMap'

import Layer from '../../../Layer'
import { KHARI_LIZ_REFLECTION } from '../../../../../constants/scene/actors'

const KhariLizReflection = memo(({ instanceKey }) => {
    return (
        <Layer
            {...{
                actorKey: KHARI_LIZ_REFLECTION,
                instanceKey
            }}
        />
    )
})

KhariLizReflection.propTypes = propTypes

export default KhariLizReflection
