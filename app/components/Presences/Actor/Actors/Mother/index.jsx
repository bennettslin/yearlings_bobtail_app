import React, { memo } from 'react'
import { propTypes } from './instanceMap'

import Layer from '../../../Layer'
import { MOTHER } from '../../../../../constants/scene/actors'

const MotherLayer = memo(({ instanceKey }) => {
    return (
        <Layer
            {...{
                actorKey: MOTHER,
                instanceKey
            }}
        />
    )
})

MotherLayer.propTypes = propTypes

export default MotherLayer
