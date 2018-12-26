import React, { memo } from 'react'
import { propTypes } from './instanceMap'

import LayerHoc from '../../../LayerHoc'
import { ANA_HOWIE } from '../../../../../scene/actorKeys'

const AnaHowieLayer = memo(({ instanceKey }) => {
    return (
        <LayerHoc
            {...{
                actorKey: ANA_HOWIE,
                instanceKey
            }}
        />
    )
})

AnaHowieLayer.propTypes = propTypes

export default AnaHowieLayer
