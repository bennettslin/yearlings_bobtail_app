import React, { memo } from 'react'
import { propTypes } from './instanceMap'

import LayerHoc from '../../../LayerHoc'
import { SASHA } from '../../../../../scene/actors/keys'

const SashaLayer = memo(({ instanceKey }) => {
    return (
        <LayerHoc
            {...{
                actorKey: SASHA,
                instanceKey
            }}
        />
    )
})

SashaLayer.propTypes = propTypes

export default SashaLayer
