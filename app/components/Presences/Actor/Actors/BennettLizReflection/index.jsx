import React, { memo } from 'react'
import { propTypes } from './instanceMap'

import LayerHoc from '../../../LayerHoc'
import { BENNETT_LIZ_REFLECTION } from '../../../../../scene/actorKeys'

const BennettLizReflectionLayer = memo(({ instanceKey }) => {
    return (
        <LayerHoc
            {...{
                actorKey: BENNETT_LIZ_REFLECTION,
                instanceKey
            }}
        />
    )
})

BennettLizReflectionLayer.propTypes = propTypes

export default BennettLizReflectionLayer
