import React, { memo } from 'react'
import { propTypes } from './instanceMap'

import Layer from '../../../Layer'
import { OLD_BENNETT } from '../../../../../constants/scene/actors'

const OldBennettLayer = memo(({ instanceKey }) => {
    return (
        <Layer
            {...{
                actorKey: OLD_BENNETT,
                instanceKey
            }}
        />
    )
})

OldBennettLayer.propTypes = propTypes

export default OldBennettLayer
