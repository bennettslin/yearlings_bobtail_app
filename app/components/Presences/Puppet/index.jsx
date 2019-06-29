import React, { memo } from 'react'

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

export default PuppetLayer
