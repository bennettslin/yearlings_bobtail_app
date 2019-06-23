import React, { memo } from 'react'
import { propTypes } from './instanceMap'

import LayerHoc from '../../../LayerHoc'
import { FATHER } from '../../../../../constants/scene/actors'

const FatherLayer = memo(({ instanceKey }) => {
    return (
        <LayerHoc
            {...{
                actorKey: FATHER,
                instanceKey
            }}
        />
    )
})

FatherLayer.propTypes = propTypes

export default FatherLayer
