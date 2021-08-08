import React, { memo } from 'react'
import PropTypes from 'prop-types'
import Layer from '../Layer'
import { ORDERED_THINGS } from '../../../constants/scene/things'

const LayersThing = ({ yIndex }) => (
    ORDERED_THINGS.map(presenceType => (
        <Layer
            {...{
                key: presenceType,
                presenceType,
                yIndex,
            }}
        />
    ))
)

LayersThing.propTypes = {
    yIndex: PropTypes.number.isRequired,
}

export default memo(LayersThing)
