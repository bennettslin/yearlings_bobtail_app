import React, { memo } from 'react'
import { propTypes } from './presenceMap'

import LayerHoc from '../LayerHoc'
import { BUBBLES } from 'constants/scene'

const BubbleLayer = memo((props) => {
    return (
        <LayerHoc
            {...props}
            {...{ presenceType: BUBBLES }}
        />
    )
})

BubbleLayer.propTypes = propTypes

export default BubbleLayer
