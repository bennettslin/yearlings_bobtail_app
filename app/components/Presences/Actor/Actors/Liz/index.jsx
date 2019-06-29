import React, { memo } from 'react'
import { propTypes } from './instanceMap'

import Layer from '../../../Layer'
import { LIZ } from '../../../../../constants/scene/actors'

const LizLayer = memo(({ instanceKey }) => {
    return (
        <Layer
            {...{
                actorKey: LIZ,
                instanceKey
            }}
        />
    )
})

LizLayer.propTypes = propTypes

export default LizLayer
