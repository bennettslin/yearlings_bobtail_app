import React, { memo } from 'react'
import { propTypes } from './presenceMap'

import LayerHoc from '../LayerHoc'
import { CARDBOARD } from 'constants/scene'

const CardboardLayer = memo((props) => {
    return (
        <LayerHoc
            {...props}
            {...{ presenceType: CARDBOARD }}
        />
    )
})

CardboardLayer.propTypes = propTypes

export default CardboardLayer
