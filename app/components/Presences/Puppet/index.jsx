import React, { memo } from 'react'
import { propTypes } from './presenceMap'

import LayerHoc from '../LayerHoc'
import { PUPPETS } from 'constants/scene'

const PuppetLayer = memo((props) => {
    return (
        <LayerHoc
            {...props}
            {...{ presenceType: PUPPETS }}
        />
    )
})

PuppetLayer.propTypes = propTypes

export default PuppetLayer
