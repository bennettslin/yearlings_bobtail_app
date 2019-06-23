import React, { memo } from 'react'
import { propTypes } from './presenceMap'

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

FurnitureLayer.propTypes = propTypes

export default FurnitureLayer
