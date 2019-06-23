import React, { memo } from 'react'
import { propTypes } from './instanceMap'

import LayerHoc from '../../../LayerHoc'
import { AMY_NESTOR_TOMER } from '../../../../../constants/scene/actors'

const AmyNestorTomerLayer = memo(({ instanceKey }) => {
    return (
        <LayerHoc
            {...{
                actorKey: AMY_NESTOR_TOMER,
                instanceKey
            }}
        />
    )
})

AmyNestorTomerLayer.propTypes = propTypes

export default AmyNestorTomerLayer
