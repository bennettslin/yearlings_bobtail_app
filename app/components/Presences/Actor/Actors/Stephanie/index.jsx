import React, { memo } from 'react'
import { propTypes } from './instanceMap'

import LayerHoc from '../../../LayerHoc'
import { STEPHANIE } from '../../../../../scene/actorKeys'

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
