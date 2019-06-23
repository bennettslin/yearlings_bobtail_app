import React, { memo } from 'react'
import { propTypes } from './presenceMap'

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

BackdropLayer.propTypes = propTypes

export default BackdropLayer
