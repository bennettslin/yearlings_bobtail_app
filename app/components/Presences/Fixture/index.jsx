import React, { memo } from 'react'
import { propTypes } from './presenceMap'

import LayerHoc from '../LayerHoc'
import { FIXTURES } from 'constants/scene'

const FixtureLayer = memo((props) => {
    return (
        <LayerHoc
            {...props}
            {...{ presenceType: FIXTURES }}
        />
    )
})

FixtureLayer.propTypes = propTypes

export default FixtureLayer
