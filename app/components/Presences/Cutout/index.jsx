import React, { memo } from 'react'
import { propTypes } from './presenceMap'

import LayerHoc from '../LayerHoc'
import { CUTOUTS } from 'constants/scene'

const CutoutLayer = memo((props) => {
    return (
        <LayerHoc
            {...props}
            {...{ presenceType: CUTOUTS }}
        />
    )
})

CutoutLayer.propTypes = propTypes

export default CutoutLayer
