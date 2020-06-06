import React, { memo } from 'react'
import PropTypes from 'prop-types'
import Layer from '../Layer'
import { ORDERED_THINGS } from '../../../constants/scene/things'

const LayersThing = ({ yIndex, ...other }) => (
    ORDERED_THINGS.map(presenceType => (
        <Layer
            {...{
                key: presenceType,
                presenceType,
                yIndex,
                ...other[presenceType]
            }}
        />
    ))
)

LayersThing.propTypes = ORDERED_THINGS.reduce((sum, presenceType) => {
    sum[presenceType] = PropTypes.object
    return sum
}, {})

export default memo(LayersThing)
