import React, { memo } from 'react'
import { propTypes } from './instanceMap'

import LayerHoc from '../../../LayerHoc'
import { KHARI_LIZ_REFLECTION } from '../../../../../constants/scene/actors'

const KhariLizReflection = memo(({ instanceKey }) => {
    return (
        <LayerHoc
            {...{
                actorKey: KHARI_LIZ_REFLECTION,
                instanceKey
            }}
        />
    )
})

KhariLizReflection.propTypes = propTypes

export default KhariLizReflection
