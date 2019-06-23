import React, { memo } from 'react'
import { propTypes } from './instanceMap'

import LayerHoc from '../../../LayerHoc'
import { KHARI } from '../../../../../constants/scene/actors'

const KhariLayer = memo(({ instanceKey }) => {
    return (
        <LayerHoc
            {...{
                actorKey: KHARI,
                instanceKey
            }}
        />
    )
})

KhariLayer.propTypes = propTypes

export default KhariLayer
