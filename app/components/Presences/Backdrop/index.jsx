import React, { memo } from 'react'

import LayerHoc from '../LayerHoc'
import { BACKDROP } from 'constants/scene'

const BackdropLayer = memo((props) => {
    return (
        <LayerHoc
            {...props}
            {...{ presenceType: BACKDROP }}
        />
    )
})

export default BackdropLayer
