import React, { memo } from 'react'
import { propTypes } from './instanceMap'

import LayerHoc from '../../../LayerHoc'
import { AMY } from '../../../../../scene/actorKeys'

const AmyLayer = memo(({ instanceKey }) => {
    return (
        <LayerHoc
            {...{
                actorKey: AMY,
                instanceKey
            }}
        />
    )
})

AmyLayer.propTypes = propTypes

export default AmyLayer
