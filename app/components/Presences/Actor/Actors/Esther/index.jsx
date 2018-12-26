import React, { memo } from 'react'
import { propTypes } from './instanceMap'

import LayerHoc from '../../../LayerHoc'
import { ESTHER } from '../../../../../scene/actorKeys'

const EstherLayer = memo(({ instanceKey }) => {
    return (
        <LayerHoc
            {...{
                actorKey: ESTHER,
                instanceKey
            }}
        />
    )
})

EstherLayer.propTypes = propTypes

export default EstherLayer
