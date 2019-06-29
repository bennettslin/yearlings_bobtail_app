import React, { memo } from 'react'
import { propTypes } from './instanceMap'

import Layer from '../../../Layer'
import { BRAD_SASHA } from '../../../../../constants/scene/actors'

const BradSashaLayer = memo(({ instanceKey }) => {
    return (
        <Layer
            {...{
                actorKey: BRAD_SASHA,
                instanceKey
            }}
        />
    )
})

BradSashaLayer.propTypes = propTypes

export default BradSashaLayer
