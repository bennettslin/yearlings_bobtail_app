import React, { memo } from 'react'
import { propTypes } from './presenceMap'

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

BubbleLayer.propTypes = propTypes

export default BubbleLayer
