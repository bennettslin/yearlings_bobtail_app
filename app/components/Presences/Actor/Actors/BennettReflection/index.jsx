import React, { memo } from 'react'
import { propTypes } from './instanceMap'

import LayerHoc from '../../../LayerHoc'
import { BENNETT_REFLECTION } from '../../../../../constants/scene/actors'

const BennettReflectionLayer = memo(({ instanceKey }) => {
    return (
        <LayerHoc
            {...{
                actorKey: BENNETT_REFLECTION,
                instanceKey
            }}
        />
    )
})

BennettReflectionLayer.propTypes = propTypes

export default BennettReflectionLayer
