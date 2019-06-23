import React, { memo } from 'react'
import { propTypes } from './presenceMap'

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

PanelLayer.propTypes = propTypes

export default PanelLayer
