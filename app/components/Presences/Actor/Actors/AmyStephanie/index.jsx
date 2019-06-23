import React, { memo } from 'react'
import { propTypes } from './instanceMap'

import LayerHoc from '../../../LayerHoc'
import { AMY_STEPHANIE } from '../../../../../constants/scene/actors'

const AmyStephanieLayer = memo(({ instanceKey }) => {
    return (
        <LayerHoc
            {...{
                actorKey: AMY_STEPHANIE,
                instanceKey
            }}
        />
    )
})

AmyStephanieLayer.propTypes = propTypes

export default AmyStephanieLayer
