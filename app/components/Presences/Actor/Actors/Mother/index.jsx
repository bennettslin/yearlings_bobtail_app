import React, { memo } from 'react'
import { propTypes } from './instanceMap'

import LayerHoc from '../../../LayerHoc'
import { MOTHER } from '../../../../../scene/actorKeys'

const MotherLayer = memo(({ instanceKey }) => {
    return (
        <LayerHoc
            {...{
                actorKey: MOTHER,
                instanceKey
            }}
        />
    )
})

MotherLayer.propTypes = propTypes

export default MotherLayer
