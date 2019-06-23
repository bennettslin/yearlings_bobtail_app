import React, { memo } from 'react'
import { propTypes } from './presenceMap'

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

FixtureLayer.propTypes = propTypes

export default FixtureLayer
