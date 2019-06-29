import React, { memo } from 'react'
import { propTypes } from './instanceMap'

import Layer from '../../../Layer'
import { JACOB } from '../../../../../constants/scene/actors'

const JacobLayer = memo(({ instanceKey }) => {
    return (
        <Layer
            {...{
                actorKey: JACOB,
                instanceKey
            }}
        />
    )
})

JacobLayer.propTypes = propTypes

export default JacobLayer
