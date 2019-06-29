import React, { memo } from 'react'
import { propTypes } from './instanceMap'

import Layer from '../../../Layer'
import { TRISTAN } from '../../../../../constants/scene/actors'

const TristanLayer = memo(({ instanceKey }) => {
    return (
        <Layer
            {...{
                actorKey: TRISTAN,
                instanceKey
            }}
        />
    )
})

TristanLayer.propTypes = propTypes

export default TristanLayer
