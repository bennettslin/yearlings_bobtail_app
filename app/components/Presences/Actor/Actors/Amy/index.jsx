import React, { memo } from 'react'
import { propTypes } from './instanceMap'

import Layer from '../../../Layer'
import { AMY } from '../../../../../constants/scene/actors'

const AmyLayer = memo(({ instanceKey }) => {
    return (
        <Layer
            {...{
                actorKey: AMY,
                instanceKey
            }}
        />
    )
})

AmyLayer.propTypes = propTypes

export default AmyLayer
