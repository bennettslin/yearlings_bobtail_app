import React, { memo } from 'react'
import { propTypes } from './instanceMap'

import Layer from '../../../Layer'
import { PRETEEN_BENNETT } from '../../../../../constants/scene/actors'

const PreteenBennettLayer = memo(({ instanceKey }) => {
    return (
        <Layer
            {...{
                actorKey: PRETEEN_BENNETT,
                instanceKey
            }}
        />
    )
})

PreteenBennettLayer.propTypes = propTypes

export default PreteenBennettLayer
