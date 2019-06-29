import React, { memo } from 'react'
import { propTypes } from './instanceMap'

import Layer from '../../../Layer'
import { FATHER } from '../../../../../constants/scene/actors'

const FatherLayer = memo(({ instanceKey }) => {
    return (
        <Layer
            {...{
                actorKey: FATHER,
                instanceKey
            }}
        />
    )
})

FatherLayer.propTypes = propTypes

export default FatherLayer
