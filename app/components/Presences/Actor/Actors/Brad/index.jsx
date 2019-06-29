import React, { memo } from 'react'
import { propTypes } from './instanceMap'

import Layer from '../../../Layer'
import { BRAD } from '../../../../../constants/scene/actors'

const BradLayer = memo(({ instanceKey }) => {
    return (
        <Layer
            {...{
                actorKey: BRAD,
                instanceKey
            }}
        />
    )
})

BradLayer.propTypes = propTypes

export default BradLayer
