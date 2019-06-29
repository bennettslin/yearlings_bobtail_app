import React, { memo } from 'react'
import { propTypes } from './instanceMap'

import Layer from '../../../Layer'
import { MIRIAM } from '../../../../../constants/scene/actors'

const MiriamLayer = memo(({ instanceKey }) => {
    return (
        <Layer
            {...{
                actorKey: MIRIAM,
                instanceKey
            }}
        />
    )
})

MiriamLayer.propTypes = propTypes

export default MiriamLayer
