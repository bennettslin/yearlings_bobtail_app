import React, { memo } from 'react'

import LayerHoc from '../LayerHoc'
import { FIXTURE } from 'constants/scene'

const FixtureLayer = memo((props) => {
    return (
        <LayerHoc
            {...props}
            {...{ presenceType: FIXTURE }}
        />
    )
})

export default FixtureLayer
