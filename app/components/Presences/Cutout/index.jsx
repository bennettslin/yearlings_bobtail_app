import React, { memo } from 'react'

import LayerHoc from '../LayerHoc'
import { CUTOUT } from 'constants/scene'

const CutoutLayer = memo((props) => {
    return (
        <LayerHoc
            {...props}
            {...{ presenceType: CUTOUT }}
        />
    )
})

export default CutoutLayer
