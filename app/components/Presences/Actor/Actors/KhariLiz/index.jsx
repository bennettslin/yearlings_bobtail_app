import React, { memo } from 'react'
import { propTypes } from './instanceMap'

import Layer from '../../../Layer'
import { KHARI_LIZ } from '../../../../../constants/scene/actors'

const KhariLizLayer = memo(({ instanceKey }) => {
    return (
        <Layer
            {...{
                actorKey: KHARI_LIZ,
                instanceKey
            }}
        />
    )
})

KhariLizLayer.propTypes = propTypes

export default KhariLizLayer
