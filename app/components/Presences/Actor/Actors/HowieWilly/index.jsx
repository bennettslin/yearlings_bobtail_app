import React, { memo } from 'react'
import { propTypes } from './instanceMap'

import Layer from '../../../Layer'
import { HOWIE_WILLY } from '../../../../../constants/scene/actors'

const HowieWillyLayer = memo(({ instanceKey }) => {
    return (
        <Layer
            {...{
                actorKey: HOWIE_WILLY,
                instanceKey
            }}
        />
    )
})

HowieWillyLayer.propTypes = propTypes

export default HowieWillyLayer
