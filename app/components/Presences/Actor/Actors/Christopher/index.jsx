import React, { memo } from 'react'
import { propTypes } from './instanceMap'

import Layer from '../../../Layer'
import { CHRISTOPHER } from '../../../../../constants/scene/actors'

const ChristopherLayer = memo(({ instanceKey }) => {
    return (
        <Layer
            {...{
                actorKey: CHRISTOPHER,
                instanceKey
            }}
        />
    )
})

ChristopherLayer.propTypes = propTypes

export default ChristopherLayer
