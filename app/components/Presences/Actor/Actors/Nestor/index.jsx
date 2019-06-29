import React, { memo } from 'react'
import { propTypes } from './instanceMap'

import Layer from '../../../Layer'
import { NESTOR } from '../../../../../constants/scene/actors'

const NestorLayer = memo(({ instanceKey }) => {
    return (
        <Layer
            {...{
                actorKey: NESTOR,
                instanceKey
            }}
        />
    )
})

NestorLayer.propTypes = propTypes

export default NestorLayer
