import React, { memo } from 'react'
import { propTypes } from './instanceMap'

import LayerHoc from '../../../LayerHoc'
import { BENNETT_FATHER } from '../../../../../scene/actors/keys'

const BennettFatherLayer = memo(({ instanceKey }) => {
    return (
        <LayerHoc
            {...{
                actorKey: BENNETT_FATHER,
                instanceKey
            }}
        />
    )
})

BennettFatherLayer.propTypes = propTypes

export default BennettFatherLayer
