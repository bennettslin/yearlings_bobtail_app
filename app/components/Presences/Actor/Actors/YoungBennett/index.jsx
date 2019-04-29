import React, { memo } from 'react'
import { propTypes } from './instanceMap'

import LayerHoc from '../../../LayerHoc'
import { YOUNG_BENNETT } from '../../../../../scene/actors/keys'

const YoungBennettLayer = memo(({ instanceKey }) => {
    return (
        <LayerHoc
            {...{
                actorKey: YOUNG_BENNETT,
                instanceKey
            }}
        />
    )
})

YoungBennettLayer.propTypes = propTypes

export default YoungBennettLayer
