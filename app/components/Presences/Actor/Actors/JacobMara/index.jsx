import React, { memo } from 'react'
import { propTypes } from './instanceMap'

import LayerHoc from '../../../LayerHoc'
import { JACOB_MARA } from '../../../../../constants/scene/actors'

const JacobMaraLayer = memo(({ instanceKey }) => {
    return (
        <LayerHoc
            {...{
                actorKey: JACOB_MARA,
                instanceKey
            }}
        />
    )
})

JacobMaraLayer.propTypes = propTypes

export default JacobMaraLayer
