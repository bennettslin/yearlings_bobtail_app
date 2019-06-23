import React, { memo } from 'react'
import { propTypes } from './instanceMap'

import LayerHoc from '../../../LayerHoc'
import { BENNETT_STEPHANIE } from '../../../../../constants/scene/actors'

const BennettStephanieLayer = memo(({ instanceKey }) => {
    return (
        <LayerHoc
            {...{
                actorKey: BENNETT_STEPHANIE,
                instanceKey
            }}
        />
    )
})

BennettStephanieLayer.propTypes = propTypes

export default BennettStephanieLayer
