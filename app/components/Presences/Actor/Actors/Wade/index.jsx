import React, { memo } from 'react'
import { propTypes } from './instanceMap'

import Layer from '../../../Layer'
import { WADE } from '../../../../../constants/scene/actors'

const WadeLayer = memo(({ instanceKey }) => {
    return (
        <Layer
            {...{
                actorKey: WADE,
                instanceKey
            }}
        />
    )
})

WadeLayer.propTypes = propTypes

export default WadeLayer
