import React, { memo } from 'react'
import { propTypes } from './instanceMap'

import LayerHoc from '../../../LayerHoc'
import { SASHA_BENNETT } from '../../../../../scene/actors/keys'

const SashaBennettLayer = memo(({ instanceKey }) => {
    return (
        <LayerHoc
            {...{
                actorKey: SASHA_BENNETT,
                instanceKey
            }}
        />
    )
})

SashaBennettLayer.propTypes = propTypes

export default SashaBennettLayer
