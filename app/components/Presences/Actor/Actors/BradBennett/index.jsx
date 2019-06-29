import React, { memo } from 'react'
import { propTypes } from './instanceMap'

import Layer from '../../../Layer'
import { BRAD_BENNETT } from '../../../../../constants/scene/actors'

const BradBennettLayer = memo(({ instanceKey }) => {
    return (
        <Layer
            {...{
                actorKey: BRAD_BENNETT,
                instanceKey
            }}
        />
    )
})

BradBennettLayer.propTypes = propTypes

export default BradBennettLayer
