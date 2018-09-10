import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import PorchDoor from './Furnitures/Porch/PorchDoor'
import BedroomBlinds from './Furnitures/Bedroom/BedroomBlinds'
import BedroomBlindsOpen from './Furnitures/Bedroom/BedroomBlindsOpen'
import CaptainBedMattress from './Furnitures/Bedroom/CaptainBedMattress'
import SchoolbusSeatFront from './Furnitures/Schoolbus/SchoolbusSeatFront'
import SchoolbusSeatBack from './Furnitures/Schoolbus/SchoolbusSeatBack'
import SleepingMat from './Furnitures/TaiwanRoom/SleepingMat'
import StairwellRailing from './Furnitures/TaiwanStairs/StairwellRailing'
import IronGate from './Furnitures/TaiwanGate/IronGate'
import Buoy from './Furnitures/Buoy/Buoy'
import PrincipalDoor from './Furnitures/VanNuysHallway/PrincipalDoor'

import {
    PORCH_DOOR,
    BEDROOM_BLINDS,
    BEDROOM_BLINDS_OPEN,
    CAPTAIN_BED_MATTRESS,
    SCHOOLBUS_SEAT_FRONT,
    SCHOOLBUS_SEAT_BACK,
    SLEEPING_MAT,
    STAIRWELL_RAILING,
    IRON_GATE,
    BUOY,
    PRINCIPAL_DOOR
} from 'scene/furnitureKeys'

const FURNITURES_MAP = {
    [PORCH_DOOR]: PorchDoor,
    [BEDROOM_BLINDS]: BedroomBlinds,
    [BEDROOM_BLINDS_OPEN]: BedroomBlindsOpen,
    [CAPTAIN_BED_MATTRESS]: CaptainBedMattress,
    [SCHOOLBUS_SEAT_FRONT]: SchoolbusSeatFront,
    [SCHOOLBUS_SEAT_BACK]: SchoolbusSeatBack,
    [SLEEPING_MAT]: SleepingMat,
    [STAIRWELL_RAILING]: StairwellRailing,
    [IRON_GATE]: IronGate,
    [BUOY]: Buoy,
    [PRINCIPAL_DOOR]: PrincipalDoor
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
