import React, { memo } from 'react'
import { propTypes } from './instanceMap'

import LayerHoc from '../../../LayerHoc'
import { KHARI_LIZ } from '../../../../../constants/scene/actors'

const KhariLizLayer = memo(({ instanceKey }) => {
    return (
        <LayerHoc
            {...{
                actorKey: KHARI_LIZ,
                instanceKey
            }}
        />
    )
})

KhariLizLayer.propTypes = propTypes

export default KhariLizLayer
