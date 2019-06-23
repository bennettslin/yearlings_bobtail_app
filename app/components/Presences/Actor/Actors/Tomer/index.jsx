import React, { memo } from 'react'
import { propTypes } from './instanceMap'

import LayerHoc from '../../../LayerHoc'
import { TOMER } from '../../../../../constants/scene/actors'

const TomerLayer = memo(({ instanceKey }) => {
    return (
        <LayerHoc
            {...{
                actorKey: TOMER,
                instanceKey
            }}
        />
    )
})

TomerLayer.propTypes = propTypes

export default TomerLayer
