import React, { memo } from 'react'
import { propTypes } from './instanceMap'

import Layer from '../../../Layer'
import { SASHA_BENNETT } from '../../../../../constants/scene/actors'

const SashaBennettLayer = memo(({ instanceKey }) => {
    return (
        <Layer
            {...{
                actorKey: SASHA_BENNETT,
                instanceKey
            }}
        />
    )
})

SashaBennettLayer.propTypes = propTypes

export default SashaBennettLayer
