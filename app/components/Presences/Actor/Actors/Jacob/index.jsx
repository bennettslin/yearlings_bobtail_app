import React, { memo } from 'react'
import { propTypes } from './instanceMap'

import LayerHoc from '../../../LayerHoc'
import { JACOB } from '../../../../../scene/actorKeys'

const JacobLayer = memo(({ instanceKey }) => {
    return (
        <LayerHoc
            {...{
                actorKey: JACOB,
                instanceKey
            }}
        />
    )
})

JacobLayer.propTypes = propTypes

export default JacobLayer
