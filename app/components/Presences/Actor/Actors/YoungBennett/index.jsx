import React, { memo } from 'react'
import { propTypes } from './instanceMap'

import Layer from '../../../Layer'
import { YOUNG_BENNETT } from '../../../../../constants/scene/actors'

const YoungBennettLayer = memo(({ instanceKey }) => {
    return (
        <Layer
            {...{
                actorKey: YOUNG_BENNETT,
                instanceKey
            }}
        />
    )
})

YoungBennettLayer.propTypes = propTypes

export default YoungBennettLayer
