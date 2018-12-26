import React, { memo } from 'react'
import { propTypes } from './instanceMap'

import LayerHoc from '../../../LayerHoc'
import { TRISTAN } from '../../../../../scene/actorKeys'

const TristanLayer = memo(({ instanceKey }) => {
    return (
        <LayerHoc
            {...{
                actorKey: TRISTAN,
                instanceKey
            }}
        />
    )
})

TristanLayer.propTypes = propTypes

export default TristanLayer
