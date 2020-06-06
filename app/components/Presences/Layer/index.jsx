import React, { memo } from 'react'
import PropTypes from 'prop-types'
import Presence from '../../Presence'
import { getPresencesForLayer } from '../../../api/scene/presences'
import { ACTOR } from '../../../constants/scene'

const Layer = ({
    presenceType = ACTOR,
    actorKey,
    yIndex

}) => (
    getPresencesForLayer({
        actorKey,
        presenceType,
        yIndex

    }).map(presenceKey => (
        <Presence
            {...{
                key: presenceKey,
                presenceType,
                actorKey,
                presenceKey,
                yIndex
            }}
        />
    ))
)

Layer.propTypes = {
    presenceType: PropTypes.string,
    actorKey: PropTypes.string,
    yIndex: PropTypes.number
}

export default memo(Layer)
