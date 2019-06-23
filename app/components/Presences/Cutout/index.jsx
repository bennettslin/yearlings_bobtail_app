import React, { memo } from 'react'
import { propTypes } from './presenceMap'

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

CutoutLayer.propTypes = propTypes

export default CutoutLayer
