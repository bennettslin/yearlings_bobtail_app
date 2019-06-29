import React, { memo } from 'react'
import { propTypes } from './instanceMap'

import Layer from '../../../Layer'
import { ANITA } from '../../../../../constants/scene/actors'

const AnitaLayer = memo(({ instanceKey }) => {
    return (
        <Layer
            {...{
                actorKey: ANITA,
                instanceKey
            }}
        />
    )
})

AnitaLayer.propTypes = propTypes

export default AnitaLayer
