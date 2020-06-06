import React, { memo } from 'react'
import PropTypes from 'prop-types'
import Layer from '../Layer'
import { ORDERED_ACTORS } from '../../../constants/scene/actors'

const LayersActor = ({ yIndex, ...other }) => (
    ORDERED_ACTORS.map(actorKey => (
        <Layer
            {...{
                key: actorKey,
                actorKey,
                yIndex,
                instanceKey: other[actorKey]
            }}
        />
    ))
)

LayersActor.propTypes = ORDERED_ACTORS.reduce((sum, actorKey) => {
    sum[actorKey] = PropTypes.string
    return sum
}, {})

export default memo(LayersActor)
