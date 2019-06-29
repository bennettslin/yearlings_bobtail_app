import React, { memo } from 'react'
import { propTypes } from './instanceMap'

import Layer from '../../../Layer'
import { BENNETT_LIZ } from '../../../../../constants/scene/actors'

const BennettLizLayer = memo(({ instanceKey }) => {
    return (
        <Layer
            {...{
                actorKey: BENNETT_LIZ,
                instanceKey
            }}
        />
    )
})

BennettLizLayer.propTypes = propTypes

export default BennettLizLayer
