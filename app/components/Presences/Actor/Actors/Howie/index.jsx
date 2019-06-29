import React, { memo } from 'react'
import { propTypes } from './instanceMap'

import Layer from '../../../Layer'
import { HOWIE } from '../../../../../constants/scene/actors'

const HowieLayer = memo(({ instanceKey }) => {
    return (
        <Layer
            {...{
                actorKey: HOWIE,
                instanceKey
            }}
        />
    )
})

HowieLayer.propTypes = propTypes

export default HowieLayer
