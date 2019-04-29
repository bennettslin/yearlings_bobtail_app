import React, { memo } from 'react'
import { propTypes } from './instanceMap'

import LayerHoc from '../../../LayerHoc'
import { HOWIE } from '../../../../../scene/actors/keys'

const HowieLayer = memo(({ instanceKey }) => {
    return (
        <LayerHoc
            {...{
                actorKey: HOWIE,
                instanceKey
            }}
        />
    )
})

HowieLayer.propTypes = propTypes

export default HowieLayer
