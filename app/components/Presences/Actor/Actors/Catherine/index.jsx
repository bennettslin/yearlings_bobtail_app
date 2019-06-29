import React, { memo } from 'react'
import { propTypes } from './instanceMap'

import Layer from '../../../Layer'
import { CATHERINE } from '../../../../../constants/scene/actors'

const CatherineLayer = memo(({ instanceKey }) => {
    return (
        <Layer
            {...{
                actorKey: CATHERINE,
                instanceKey
            }}
        />
    )
})

CatherineLayer.propTypes = propTypes

export default CatherineLayer
