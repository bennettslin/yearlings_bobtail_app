import React, { memo } from 'react'
import { propTypes } from './instanceMap'

import LayerHoc from '../../../LayerHoc'
import { PRETEEN_BENNETT } from '../../../../../scene/actorKeys'

const PreteenBennettLayer = memo(({ instanceKey }) => {
    return (
        <LayerHoc
            {...{
                actorKey: PRETEEN_BENNETT,
                instanceKey
            }}
        />
    )
})

PreteenBennettLayer.propTypes = propTypes

export default PreteenBennettLayer
