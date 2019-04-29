import React, { memo } from 'react'
import { propTypes } from './instanceMap'

import LayerHoc from '../../../LayerHoc'
import { BRAD_BENNETT } from '../../../../../scene/actors/keys'

const BradBennettLayer = memo(({ instanceKey }) => {
    return (
        <LayerHoc
            {...{
                actorKey: BRAD_BENNETT,
                instanceKey
            }}
        />
    )
})

BradBennettLayer.propTypes = propTypes

export default BradBennettLayer
