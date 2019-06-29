import React, { memo } from 'react'
import { propTypes } from './instanceMap'

import Layer from '../../../Layer'
import { BENNETT_STEPHANIE } from '../../../../../constants/scene/actors'

const BennettStephanieLayer = memo(({ instanceKey }) => {
    return (
        <Layer
            {...{
                actorKey: BENNETT_STEPHANIE,
                instanceKey
            }}
        />
    )
})

BennettStephanieLayer.propTypes = propTypes

export default BennettStephanieLayer
