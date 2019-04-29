import React, { memo } from 'react'
import { propTypes } from './instanceMap'

import LayerHoc from '../../../LayerHoc'
import { MARA } from '../../../../../scene/actors/keys'

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
