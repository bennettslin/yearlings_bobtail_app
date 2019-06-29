import React, { memo } from 'react'
import { propTypes } from './instanceMap'

import Layer from '../../../Layer'
import { SASHA } from '../../../../../constants/scene/actors'

const SashaLayer = memo(({ instanceKey }) => {
    return (
        <Layer
            {...{
                actorKey: SASHA,
                instanceKey
            }}
        />
    )
})

SashaLayer.propTypes = propTypes

export default SashaLayer
