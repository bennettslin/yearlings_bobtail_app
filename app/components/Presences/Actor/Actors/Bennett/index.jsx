import React, { memo } from 'react'
import { propTypes } from './instanceMap'

import Layer from '../../../Layer'
import { BENNETT } from '../../../../../constants/scene/actors'

const BennettLayer = memo(({ instanceKey }) => {
    return (
        <Layer
            {...{
                actorKey: BENNETT,
                instanceKey
            }}
        />
    )
})

BennettLayer.propTypes = propTypes

export default BennettLayer
