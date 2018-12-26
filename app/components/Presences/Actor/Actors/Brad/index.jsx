import React, { memo } from 'react'
import { propTypes } from './instanceMap'

import LayerHoc from '../../../LayerHoc'
import { BRAD } from '../../../../../scene/actorKeys'

const BradLayer = memo(({ instanceKey }) => {
    return (
        <LayerHoc
            {...{
                actorKey: BRAD,
                instanceKey
            }}
        />
    )
})

BradLayer.propTypes = propTypes

export default BradLayer
