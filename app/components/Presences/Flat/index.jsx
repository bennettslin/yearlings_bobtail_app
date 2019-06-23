import React, { memo } from 'react'
import { propTypes } from './presenceMap'

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

FlatLayer.propTypes = propTypes

export default FlatLayer
