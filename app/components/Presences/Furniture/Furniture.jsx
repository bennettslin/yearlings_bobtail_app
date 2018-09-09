import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import PorchDoor from './Furnitures/Porch/PorchDoor'
import BennettRoomBlinds from './Furnitures/BennettRoom/BennettRoomBlinds'
import CaptainBedMattress from './Furnitures/BennettRoom/CaptainBedMattress'

import {
    PORCH_DOOR,
    BENNETT_ROOM_BLINDS,
    CAPTAIN_BED_MATTRESS
} from 'scene/furnitureKeys'


const FURNITURES_MAP = {
    [PORCH_DOOR]: PorchDoor,
    [BENNETT_ROOM_BLINDS]: BennettRoomBlinds,
    [CAPTAIN_BED_MATTRESS]: CaptainBedMattress
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
