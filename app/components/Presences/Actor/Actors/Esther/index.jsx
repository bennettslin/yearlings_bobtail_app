import React, { memo } from 'react'
import { propTypes } from './instanceMap'

import Layer from '../../../Layer'
import { ESTHER } from '../../../../../constants/scene/actors'

const EstherLayer = memo(({ instanceKey }) => {
    return (
        <Layer
            {...{
                actorKey: ESTHER,
                instanceKey
            }}
        />
    )
})

EstherLayer.propTypes = propTypes

export default EstherLayer
