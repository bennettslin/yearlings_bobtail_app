import React, { memo } from 'react'
import { propTypes } from './instanceMap'

import LayerHoc from '../../../LayerHoc'
import { OLD_BENNETT } from '../../../../../scene/actors/keys'

const OldBennettLayer = memo(({ instanceKey }) => {
    return (
        <LayerHoc
            {...{
                actorKey: OLD_BENNETT,
                instanceKey
            }}
        />
    )
})

OldBennettLayer.propTypes = propTypes

export default OldBennettLayer
