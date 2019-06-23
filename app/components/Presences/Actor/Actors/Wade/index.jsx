import React, { memo } from 'react'
import { propTypes } from './instanceMap'

import LayerHoc from '../../../LayerHoc'
import { WADE } from '../../../../../constants/scene/actors'

const WadeLayer = memo(({ instanceKey }) => {
    return (
        <LayerHoc
            {...{
                actorKey: WADE,
                instanceKey
            }}
        />
    )
})

WadeLayer.propTypes = propTypes

export default WadeLayer
