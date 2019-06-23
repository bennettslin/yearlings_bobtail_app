import React, { memo } from 'react'
import { propTypes } from './instanceMap'

import LayerHoc from '../../../LayerHoc'
import { WILLY } from '../../../../../constants/scene/actors'

const WillyLayer = memo(({ instanceKey }) => {
    return (
        <LayerHoc
            {...{
                actorKey: WILLY,
                instanceKey
            }}
        />
    )
})

WillyLayer.propTypes = propTypes

export default WillyLayer
