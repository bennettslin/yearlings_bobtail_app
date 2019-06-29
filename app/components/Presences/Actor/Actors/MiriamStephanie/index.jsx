import React, { memo } from 'react'
import { propTypes } from './instanceMap'

import Layer from '../../../Layer'
import { MIRIAM_STEPHANIE } from '../../../../../constants/scene/actors'

const MiriamStephanieLayer = memo(({ instanceKey }) => {
    return (
        <Layer
            {...{
                actorKey: MIRIAM_STEPHANIE,
                instanceKey
            }}
        />
    )
})

MiriamStephanieLayer.propTypes = propTypes

export default MiriamStephanieLayer
