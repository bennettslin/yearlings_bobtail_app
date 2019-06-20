import React, { memo } from 'react'
import { propTypes } from './presenceMap'

import LayerHoc from '../LayerHoc'
import { CARDBOARDS } from 'constants/scene'

const CardboardLayer = memo((props) => {
    return (
        <LayerHoc
            {...props}
            {...{ presenceType: CARDBOARDS }}
        />
    )
})

CardboardLayer.propTypes = propTypes

export default CardboardLayer
