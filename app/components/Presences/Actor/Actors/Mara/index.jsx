import React, { memo } from 'react'
import { propTypes } from './instanceMap'

import LayerHoc from '../../../LayerHoc'
import { MARA } from '../../../../../constants/scene/actors'

const MaraLayer = memo(({ instanceKey }) => {
    return (
        <LayerHoc
            {...{
                actorKey: MARA,
                instanceKey
            }}
        />
    )
})

MaraLayer.propTypes = propTypes

export default MaraLayer
