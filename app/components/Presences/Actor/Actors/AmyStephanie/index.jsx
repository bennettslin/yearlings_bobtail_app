import React, { memo } from 'react'
import { propTypes } from './instanceMap'

import Layer from '../../../Layer'
import { AMY_STEPHANIE } from '../../../../../constants/scene/actors'

const AmyStephanieLayer = memo(({ instanceKey }) => {
    return (
        <Layer
            {...{
                actorKey: AMY_STEPHANIE,
                instanceKey
            }}
        />
    )
})

AmyStephanieLayer.propTypes = propTypes

export default AmyStephanieLayer
