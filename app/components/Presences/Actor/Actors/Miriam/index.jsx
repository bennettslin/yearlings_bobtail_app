import React, { memo } from 'react'
import { propTypes } from './instanceMap'

import LayerHoc from '../../../LayerHoc'
import { MIRIAM } from '../../../../../scene/actors/keys'

const MiriamLayer = memo(({ instanceKey }) => {
    return (
        <LayerHoc
            {...{
                actorKey: MIRIAM,
                instanceKey
            }}
        />
    )
})

MiriamLayer.propTypes = propTypes

export default MiriamLayer
