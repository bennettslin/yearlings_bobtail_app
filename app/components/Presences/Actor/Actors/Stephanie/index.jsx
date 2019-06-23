import React, { memo } from 'react'
import { propTypes } from './instanceMap'

import LayerHoc from '../../../LayerHoc'
import { STEPHANIE } from '../../../../../constants/scene/actors'

const StephanieLayer = memo(({ instanceKey }) => {
    return (
        <LayerHoc
            {...{
                actorKey: STEPHANIE,
                instanceKey
            }}
        />
    )
})

StephanieLayer.propTypes = propTypes

export default StephanieLayer
