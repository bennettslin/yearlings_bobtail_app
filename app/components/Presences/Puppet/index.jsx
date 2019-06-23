import React, { memo } from 'react'
import { propTypes } from './presenceMap'

import LayerHoc from '../LayerHoc'
import { PUPPET } from 'constants/scene'

const PuppetLayer = memo((props) => {
    return (
        <LayerHoc
            {...props}
            {...{ presenceType: PUPPET }}
        />
    )
})

PuppetLayer.propTypes = propTypes

export default PuppetLayer
