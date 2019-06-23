import React, { memo } from 'react'
import { propTypes } from './instanceMap'

import LayerHoc from '../../../LayerHoc'
import { ANITA_BENNETT } from '../../../../../constants/scene/actors'

const AnitaBennettLayer = memo(({ instanceKey }) => {
    return (
        <LayerHoc
            {...{
                actorKey: ANITA_BENNETT,
                instanceKey
            }}
        />
    )
})

AnitaBennettLayer.propTypes = propTypes

export default AnitaBennettLayer
