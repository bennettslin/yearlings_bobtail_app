import React, { memo } from 'react'
import { propTypes } from './instanceMap'

import LayerHoc from '../../../LayerHoc'
import { CHRISTOPHER } from '../../../../../scene/actorKeys'

const ChristopherLayer = memo(({ instanceKey }) => {
    return (
        <LayerHoc
            {...{
                actorKey: CHRISTOPHER,
                instanceKey
            }}
        />
    )
})

ChristopherLayer.propTypes = propTypes

export default ChristopherLayer
