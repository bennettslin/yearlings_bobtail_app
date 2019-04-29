import React, { memo } from 'react'
import { propTypes } from './instanceMap'

import LayerHoc from '../../../LayerHoc'
import { BRAD_SASHA } from '../../../../../scene/actors/keys'

const BradSashaLayer = memo(({ instanceKey }) => {
    return (
        <LayerHoc
            {...{
                actorKey: BRAD_SASHA,
                instanceKey
            }}
        />
    )
})

BradSashaLayer.propTypes = propTypes

export default BradSashaLayer
