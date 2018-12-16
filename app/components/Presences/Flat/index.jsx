import React, { memo } from 'react'
import { propTypes } from './presenceMap'

import LayerHoc from '../LayerHoc'
import { FLATS } from 'constants/scene'

const FlatLayer = memo((props) => {
    return (
        <LayerHoc
            {...props}
            {...{ presenceType: FLATS }}
        />
    )
})

FlatLayer.propTypes = propTypes

export default FlatLayer
