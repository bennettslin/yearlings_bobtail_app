import React, { memo } from 'react'
import { propTypes } from './instanceMap'

import LayerHoc from '../../../LayerHoc'
import { HOWIE_WILLY } from '../../../../../constants/scene/actors'

const HowieWillyLayer = memo(({ instanceKey }) => {
    return (
        <LayerHoc
            {...{
                actorKey: HOWIE_WILLY,
                instanceKey
            }}
        />
    )
})

HowieWillyLayer.propTypes = propTypes

export default HowieWillyLayer
