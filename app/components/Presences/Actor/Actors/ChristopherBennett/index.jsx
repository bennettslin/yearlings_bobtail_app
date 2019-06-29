import React, { memo } from 'react'
import { propTypes } from './instanceMap'

import Layer from '../../../Layer'
import { CHRISTOPHER_BENNETT } from '../../../../../constants/scene/actors'

const ChristopherBennettLayer = memo(({ instanceKey }) => {
    return (
        <Layer
            {...{
                actorKey: CHRISTOPHER_BENNETT,
                instanceKey
            }}
        />
    )
})

ChristopherBennettLayer.propTypes = propTypes

export default ChristopherBennettLayer
