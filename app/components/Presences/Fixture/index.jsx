import React from 'react'
import { propTypes } from './presenceMap'

import PresenceLayer from '../PresenceLayer'
import { FIXTURES } from 'constants/scene'

const FixtureLayer = (props) => {
    return (
        <PresenceLayer
            {...props}
            {...{ presenceType: FIXTURES }}
        />
    )
}

FixtureLayer.propTypes = propTypes

export default FixtureLayer
