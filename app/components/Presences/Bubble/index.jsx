import React, { memo } from 'react'

import LayerHoc from '../LayerHoc'
import { BUBBLE } from 'constants/scene'

const BubbleLayer = memo((props) => {
    return (
        <LayerHoc
            {...props}
            {...{ presenceType: BUBBLE }}
        />
    )
})

export default BubbleLayer
