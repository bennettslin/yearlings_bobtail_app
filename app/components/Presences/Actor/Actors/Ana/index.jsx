import React, { memo } from 'react'
import { propTypes } from './instanceMap'

import Layer from '../../../Layer'
import { ANA } from '../../../../../constants/scene/actors'

const AnaLayer = memo(({ instanceKey }) => {
    return (
        <Layer
            {...{
                actorKey: ANA,
                instanceKey
            }}
        />
    )
})

AnaLayer.propTypes = propTypes

export default AnaLayer
