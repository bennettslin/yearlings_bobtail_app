import React, { memo } from 'react'
import { propTypes } from './instanceMap'

import LayerHoc from '../../../LayerHoc'
import { CATHERINE } from '../../../../../constants/scene/actors'

const CatherineLayer = memo(({ instanceKey }) => {
    return (
        <LayerHoc
            {...{
                actorKey: CATHERINE,
                instanceKey
            }}
        />
    )
})

CatherineLayer.propTypes = propTypes

export default CatherineLayer
