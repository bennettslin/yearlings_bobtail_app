import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import PorchDoor from './Furnitures/Porch/PorchDoor'

import {
    PORCH_DOOR
} from 'scene/furnitureKeys'


const FURNITURES_MAP = {
    [PORCH_DOOR]: PorchDoor
},
DEFAULT_COMPONENT = () => (null)

const propTypes = {
    // From parent.
    className: PropTypes.any,
    nameKey: PropTypes.string.isRequired,
    x: PropTypes.string.isRequired,
    y: PropTypes.string.isRequired,
    width: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired
}

const Furniture = ({

    className,
    nameKey,

...other }) => {

    const FurnitureComponent =
        FURNITURES_MAP[nameKey] || DEFAULT_COMPONENT

    return (
        <FurnitureComponent {...other}
            className={cx(
                'Furniture',
                className
            )}
        />
    )
}

Furniture.propTypes = propTypes;

export default Furniture
