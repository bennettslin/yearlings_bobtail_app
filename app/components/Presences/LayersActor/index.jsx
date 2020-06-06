import React, { memo } from 'react'
import PropTypes from 'prop-types'
import Layer from '../Layer'
import { ORDERED_ACTORS } from '../../../constants/scene/actors'

const LayersActor = ({ yIndex }) => (
    ORDERED_ACTORS.map(actorKey => (
        <Layer
            {...{
                key: actorKey,
                actorKey,
                yIndex
            }}
        />
    ))
)

LayersActor.propTypes = {
    yIndex: PropTypes.number.isRequired
}

export default memo(LayersActor)
