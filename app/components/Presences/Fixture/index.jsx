import React, { memo } from 'react'
import { propTypes } from './presenceMap'

import PresenceLayer from '../PresenceLayer'
import { FIXTURES } from 'constants/scene'

const FixtureLayer = memo((props) => {
    return (
        <PresenceLayer
            {...props}
            {...{ presenceType: FIXTURES }}
        />
    )
})

FixtureLayer.propTypes = propTypes

export default FixtureLayer
