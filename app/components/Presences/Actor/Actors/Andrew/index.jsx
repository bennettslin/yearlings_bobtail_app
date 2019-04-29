import React, { memo } from 'react'
import { propTypes } from './instanceMap'

import LayerHoc from '../../../LayerHoc'
import { ANDREW } from '../../../../../scene/actors/keys'

const AndrewLayer = memo(({ instanceKey }) => {
    return (
        <LayerHoc
            {...{
                actorKey: ANDREW,
                instanceKey
            }}
        />
    )
})

AndrewLayer.propTypes = propTypes

export default AndrewLayer
