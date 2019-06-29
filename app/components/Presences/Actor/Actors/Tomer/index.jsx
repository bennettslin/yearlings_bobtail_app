import React, { memo } from 'react'
import { propTypes } from './instanceMap'

import Layer from '../../../Layer'
import { TOMER } from '../../../../../constants/scene/actors'

const TomerLayer = memo(({ instanceKey }) => {
    return (
        <Layer
            {...{
                actorKey: TOMER,
                instanceKey
            }}
        />
    )
})

TomerLayer.propTypes = propTypes

export default TomerLayer
