import React, { memo } from 'react'
import { propTypes } from './instanceMap'

import Layer from '../../../Layer'
import { MIRIAM_TRISTAN } from '../../../../../constants/scene/actors'

const MiriamTristanLayer = memo(({ instanceKey }) => {
    return (
        <Layer
            {...{
                actorKey: MIRIAM_TRISTAN,
                instanceKey
            }}
        />
    )
})

MiriamTristanLayer.propTypes = propTypes

export default MiriamTristanLayer
