import React, { memo } from 'react'
import { propTypes } from './instanceMap'

import LayerHoc from '../../../LayerHoc'
import { BENNETT } from '../../../../../scene/actorKeys'

const BennettLayer = memo(({ instanceKey }) => {
    return (
        <LayerHoc
            {...{
                actorKey: BENNETT,
                instanceKey
            }}
        />
    )
})

BennettLayer.propTypes = propTypes

export default BennettLayer
