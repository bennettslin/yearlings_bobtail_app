import React, { memo } from 'react'
import { propTypes } from './instanceMap'

import LayerHoc from '../../../LayerHoc'
import { LIZ } from '../../../../../scene/actors/keys'

const LizLayer = memo(({ instanceKey }) => {
    return (
        <LayerHoc
            {...{
                actorKey: LIZ,
                instanceKey
            }}
        />
    )
})

LizLayer.propTypes = propTypes

export default LizLayer
