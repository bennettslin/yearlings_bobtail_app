import React, { memo } from 'react'
import { propTypes } from './instanceMap'

import LayerHoc from '../../../LayerHoc'
import { MIRIAM_BENNETT } from '../../../../../scene/actors/keys'

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
