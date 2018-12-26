import React, { memo } from 'react'
import { propTypes } from './instanceMap'

import LayerHoc from '../../../LayerHoc'
import { NESTOR } from '../../../../../scene/actorKeys'

const NestorLayer = memo(({ instanceKey }) => {
    return (
        <LayerHoc
            {...{
                actorKey: NESTOR,
                instanceKey
            }}
        />
    )
})

NestorLayer.propTypes = propTypes

export default NestorLayer
