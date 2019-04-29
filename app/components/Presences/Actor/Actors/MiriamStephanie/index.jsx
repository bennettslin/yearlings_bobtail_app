import React, { memo } from 'react'
import { propTypes } from './instanceMap'

import LayerHoc from '../../../LayerHoc'
import { MIRIAM_STEPHANIE } from '../../../../../scene/actors/keys'

const MiriamStephanieLayer = memo(({ instanceKey }) => {
    return (
        <LayerHoc
            {...{
                actorKey: MIRIAM_STEPHANIE,
                instanceKey
            }}
        />
    )
})

MiriamStephanieLayer.propTypes = propTypes

export default MiriamStephanieLayer
