import React, { memo } from 'react'
import { propTypes } from './presenceMap'

import LayerHoc from '../LayerHoc'
import { BACKDROPS } from 'constants/scene'

const BackdropLayer = memo((props) => {
    return (
        <LayerHoc
            {...props}
            {...{ presenceType: BACKDROPS }}
        />
    )
})

BackdropLayer.propTypes = propTypes

export default BackdropLayer
