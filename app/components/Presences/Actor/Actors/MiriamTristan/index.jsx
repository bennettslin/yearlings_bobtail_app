import React, { memo } from 'react'
import { propTypes } from './instanceMap'

import LayerHoc from '../../../LayerHoc'
import { MIRIAM_TRISTAN } from '../../../../../constants/scene/actors'

const MiriamTristanLayer = memo(({ instanceKey }) => {
    return (
        <LayerHoc
            {...{
                actorKey: MIRIAM_TRISTAN,
                instanceKey
            }}
        />
    )
})

MiriamTristanLayer.propTypes = propTypes

export default MiriamTristanLayer
