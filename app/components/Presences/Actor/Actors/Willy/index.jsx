import React, { memo } from 'react'
import { propTypes } from './instanceMap'

import Layer from '../../../Layer'
import { WILLY } from '../../../../../constants/scene/actors'

const WillyLayer = memo(({ instanceKey }) => {
    return (
        <Layer
            {...{
                actorKey: WILLY,
                instanceKey
            }}
        />
    )
})

WillyLayer.propTypes = propTypes

export default WillyLayer
