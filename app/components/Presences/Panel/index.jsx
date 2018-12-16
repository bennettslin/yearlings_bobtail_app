import React, { memo } from 'react'
import { propTypes } from './presenceMap'

import LayerHoc from '../LayerHoc'
import { PANELS } from 'constants/scene'

const PanelLayer = memo((props) => {
    return (
        <LayerHoc
            {...props}
            {...{ presenceType: PANELS }}
        />
    )
})

PanelLayer.propTypes = propTypes

export default PanelLayer
