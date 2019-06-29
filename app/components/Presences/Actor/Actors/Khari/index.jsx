import React, { memo } from 'react'
import { propTypes } from './instanceMap'

import Layer from '../../../Layer'
import { KHARI } from '../../../../../constants/scene/actors'

const KhariLayer = memo(({ instanceKey }) => {
    return (
        <Layer
            {...{
                actorKey: KHARI,
                instanceKey
            }}
        />
    )
})

KhariLayer.propTypes = propTypes

export default KhariLayer
