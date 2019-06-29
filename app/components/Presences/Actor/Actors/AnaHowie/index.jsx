import React, { memo } from 'react'
import { propTypes } from './instanceMap'

import Layer from '../../../Layer'
import { ANA_HOWIE } from '../../../../../constants/scene/actors'

const AnaHowieLayer = memo(({ instanceKey }) => {
    return (
        <Layer
            {...{
                actorKey: ANA_HOWIE,
                instanceKey
            }}
        />
    )
})

AnaHowieLayer.propTypes = propTypes

export default AnaHowieLayer
