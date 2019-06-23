import React, { memo } from 'react'
import { propTypes } from './instanceMap'

import LayerHoc from '../../../LayerHoc'
import { CHRISTOPHER_BENNETT_WILLY } from '../../../../../constants/scene/actors'

const ChristopherBennettWillyLayer = memo(({ instanceKey }) => {
    return (
        <LayerHoc
            {...{
                actorKey: CHRISTOPHER_BENNETT_WILLY,
                instanceKey
            }}
        />
    )
})

ChristopherBennettWillyLayer.propTypes = propTypes

export default ChristopherBennettWillyLayer
