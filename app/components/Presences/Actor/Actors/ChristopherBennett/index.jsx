import React, { memo } from 'react'
import { propTypes } from './instanceMap'

import LayerHoc from '../../../LayerHoc'
import { CHRISTOPHER_BENNETT } from '../../../../../constants/scene/actors'

const ChristopherBennettLayer = memo(({ instanceKey }) => {
    return (
        <LayerHoc
            {...{
                actorKey: CHRISTOPHER_BENNETT,
                instanceKey
            }}
        />
    )
})

ChristopherBennettLayer.propTypes = propTypes

export default ChristopherBennettLayer
