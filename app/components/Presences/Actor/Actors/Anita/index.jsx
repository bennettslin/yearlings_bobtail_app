import React, { memo } from 'react'
import { propTypes } from './instanceMap'

import LayerHoc from '../../../LayerHoc'
import { ANITA } from '../../../../../constants/scene/actors'

const AnitaLayer = memo(({ instanceKey }) => {
    return (
        <LayerHoc
            {...{
                actorKey: ANITA,
                instanceKey
            }}
        />
    )
})

AnitaLayer.propTypes = propTypes

export default AnitaLayer
