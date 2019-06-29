import React, { memo } from 'react'
import { propTypes } from './instanceMap'

import Layer from '../../../Layer'
import { MIRIAM_BENNETT } from '../../../../../constants/scene/actors'

const MiriamBennettLayer = memo(({ instanceKey }) => {
    return (
        <Layer
            {...{
                actorKey: MIRIAM_BENNETT,
                instanceKey
            }}
        />
    )
})

MiriamBennettLayer.propTypes = propTypes

export default MiriamBennettLayer
