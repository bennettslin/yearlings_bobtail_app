import React, { memo } from 'react'
import { propTypes } from './instanceMap'

import LayerHoc from '../../../LayerHoc'
import { WADE } from '../../../../../scene/actors/keys'

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
