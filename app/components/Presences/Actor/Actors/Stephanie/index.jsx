import React, { memo } from 'react'
import { propTypes } from './instanceMap'

import Layer from '../../../Layer'
import { STEPHANIE } from '../../../../../constants/scene/actors'

const StephanieLayer = memo(({ instanceKey }) => {
    return (
        <Layer
            {...{
                actorKey: STEPHANIE,
                instanceKey
            }}
        />
    )
})

StephanieLayer.propTypes = propTypes

export default StephanieLayer
