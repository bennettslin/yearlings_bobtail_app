import React, { memo } from 'react'
import { propTypes } from './instanceMap'

import Layer from '../../../Layer'
import { CHRISTOPHER_BENNETT_WILLY } from '../../../../../constants/scene/actors'

const ChristopherBennettWillyLayer = memo(({ instanceKey }) => {
    return (
        <Layer
            {...{
                actorKey: CHRISTOPHER_BENNETT_WILLY,
                instanceKey
            }}
        />
    )
})

ChristopherBennettWillyLayer.propTypes = propTypes

export default ChristopherBennettWillyLayer
