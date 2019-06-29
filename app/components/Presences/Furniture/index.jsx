import React, { memo } from 'react'

import LayerHoc from '../LayerHoc'
import { FURNITURE } from 'constants/scene'

const FurnitureLayer = memo((props) => {
    return (
        <LayerHoc
            {...props}
            {...{ presenceType: FURNITURE }}
        />
    )
})

export default FurnitureLayer
