import React, { memo } from 'react'
import { propTypes } from './instanceMap'

import LayerHoc from '../../../LayerHoc'
import { ANA } from '../../../../../constants/scene/actors'

const AnaLayer = memo(({ instanceKey }) => {
    return (
        <LayerHoc
            {...{
                actorKey: ANA,
                instanceKey
            }}
        />
    )
})

AnaLayer.propTypes = propTypes

export default AnaLayer
