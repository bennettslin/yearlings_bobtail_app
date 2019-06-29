import React, { memo } from 'react'
import { propTypes } from './instanceMap'

import Layer from '../../../Layer'
import { ANDREW } from '../../../../../constants/scene/actors'

const AndrewLayer = memo(({ instanceKey }) => {
    return (
        <Layer
            {...{
                actorKey: ANDREW,
                instanceKey
            }}
        />
    )
})

AndrewLayer.propTypes = propTypes

export default AndrewLayer
