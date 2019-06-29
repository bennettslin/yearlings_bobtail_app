import React, { memo } from 'react'
import { propTypes } from './instanceMap'

import Layer from '../../../Layer'
import { BENNETTS_CHRISTOPHER_LIZ } from '../../../../../constants/scene/actors'

const BennettsChristopherLiz = memo(({ instanceKey }) => {
    return (
        <Layer
            {...{
                actorKey: BENNETTS_CHRISTOPHER_LIZ,
                instanceKey
            }}
        />
    )
})

BennettsChristopherLiz.propTypes = propTypes

export default BennettsChristopherLiz
