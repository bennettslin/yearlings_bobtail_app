import React from 'react'
import { propTypes } from './presenceMap'

import PresenceLayer from '../PresenceLayer'
import { BUBBLES } from 'constants/scene'

const BubbleLayer = (props) => {
    return (
        <PresenceLayer
            {...props}
            {...{ presenceType: BUBBLES }}
        />
    )
}

BubbleLayer.propTypes = propTypes

export default BubbleLayer
