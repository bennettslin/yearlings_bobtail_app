import React, { memo } from 'react'
import { propTypes } from './instanceMap'

import Layer from '../../../Layer'
import { BENNETT_FATHER } from '../../../../../constants/scene/actors'

const BennettFatherLayer = memo(({ instanceKey }) => {
    return (
        <Layer
            {...{
                actorKey: BENNETT_FATHER,
                instanceKey
            }}
        />
    )
})

BennettFatherLayer.propTypes = propTypes

export default BennettFatherLayer
