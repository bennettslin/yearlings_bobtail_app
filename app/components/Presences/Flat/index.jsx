import React, { memo } from 'react'

import LayerHoc from '../LayerHoc'
import { FLAT } from 'constants/scene'

const FlatLayer = memo((props) => {
    return (
        <LayerHoc
            {...props}
            {...{ presenceType: FLAT }}
        />
    )
})

export default FlatLayer
