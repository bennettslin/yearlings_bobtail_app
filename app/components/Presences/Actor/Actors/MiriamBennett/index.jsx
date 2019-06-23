import React, { memo } from 'react'
import { propTypes } from './instanceMap'

import LayerHoc from '../../../LayerHoc'
import { MIRIAM_BENNETT } from '../../../../../constants/scene/actors'

const MiriamBennettLayer = memo(({ instanceKey }) => {
    return (
        <LayerHoc
            {...{
                actorKey: MIRIAM_BENNETT,
                instanceKey
            }}
        />
    )
})

MiriamBennettLayer.propTypes = propTypes

export default MiriamBennettLayer
