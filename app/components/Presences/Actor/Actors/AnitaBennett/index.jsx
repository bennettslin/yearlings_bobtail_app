import React, { memo } from 'react'
import { propTypes } from './instanceMap'

import Layer from '../../../Layer'
import { ANITA_BENNETT } from '../../../../../constants/scene/actors'

const AnitaBennettLayer = memo(({ instanceKey }) => {
    return (
        <Layer
            {...{
                actorKey: ANITA_BENNETT,
                instanceKey
            }}
        />
    )
})

AnitaBennettLayer.propTypes = propTypes

export default AnitaBennettLayer
