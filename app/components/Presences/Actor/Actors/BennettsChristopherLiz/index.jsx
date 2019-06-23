import React, { memo } from 'react'
import { propTypes } from './instanceMap'

import LayerHoc from '../../../LayerHoc'
import { BENNETTS_CHRISTOPHER_LIZ } from '../../../../../constants/scene/actors'

const BennettsChristopherLiz = memo(({ instanceKey }) => {
    return (
        <LayerHoc
            {...{
                actorKey: BENNETTS_CHRISTOPHER_LIZ,
                instanceKey
            }}
        />
    )
})

BennettsChristopherLiz.propTypes = propTypes

export default BennettsChristopherLiz
