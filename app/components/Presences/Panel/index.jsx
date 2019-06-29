import React, { memo } from 'react'

import LayerHoc from '../LayerHoc'
import { PANEL } from 'constants/scene'

const PanelLayer = memo((props) => {
    return (
        <LayerHoc
            {...props}
            {...{ presenceType: PANEL }}
        />
    )
})

export default PanelLayer
