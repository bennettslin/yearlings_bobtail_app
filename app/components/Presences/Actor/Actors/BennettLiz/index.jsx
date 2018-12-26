import React, { memo } from 'react'
import { propTypes } from './instanceMap'

import LayerHoc from '../../../LayerHoc'
import { BENNETT_LIZ } from '../../../../../scene/actorKeys'

const BennettLizLayer = memo(({ instanceKey }) => {
    return (
        <LayerHoc
            {...{
                actorKey: BENNETT_LIZ,
                instanceKey
            }}
        />
    )
})

BennettLizLayer.propTypes = propTypes

export default BennettLizLayer
