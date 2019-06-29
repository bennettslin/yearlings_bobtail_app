import React, { memo } from 'react'

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

export default CardboardLayer
