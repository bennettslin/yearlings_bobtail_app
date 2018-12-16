import React, { memo } from 'react'
import { propTypes } from './presenceMap'

import LayerHoc from '../LayerHoc'
import { FURNITURES } from 'constants/scene'

const FurnitureLayer = memo((props) => {
    return (
        <LayerHoc
            {...props}
            {...{ presenceType: FURNITURES }}
        />
    )
})

FurnitureLayer.propTypes = propTypes

export default FurnitureLayer
