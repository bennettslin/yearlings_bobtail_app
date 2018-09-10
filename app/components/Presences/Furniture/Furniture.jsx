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
import BuoyFloat from './Furnitures/Buoy/BuoyFloat'
import PrincipalDoor from './Furnitures/VanNuysHallway/PrincipalDoor'
import BennettBlinds from './Furnitures/Courtyard/BennettBlinds'
import BennettDoorOutside from './Furnitures/Courtyard/BennettDoorOutside'
import BennettGateSide from './Furnitures/Courtyard/BennettGateSide'
import BennettCushions from './Furnitures/BennettCouch/BennettCushions'
import BancroftDoor from './Furnitures/UcBerkeley/BancroftDoor'
import BasementDoor from './Furnitures/Basement/BasementDoor'
import BasementDoorOpen from './Furnitures/Basement/BasementDoorOpen'
import CinemaDoors from './Furnitures/Cinema/CinemaDoors'
import LizBlinds from './Furnitures/LizGate/LizBlinds'
import LizGateOutside from './Furnitures/LizGate/LizGateOutside'
import GoKartInteriorLeft from './Furnitures/GoKarts/GoKartInteriorLeft'
import GoKartInteriorRight from './Furnitures/GoKarts/GoKartInteriorRight'
import LizGateOutsideOpen from './Furnitures/LizGate/LizGateOutsideOpen'

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
    BUOY_FLOAT,
    PRINCIPAL_DOOR,
    BENNETT_BLINDS,
    BENNETT_DOOR_OUTSIDE,
    BENNETT_GATE_SIDE,
    BENNETT_CUSHIONS,
    BANCROFT_DOOR,
    BASEMENT_DOOR,
    BASEMENT_DOOR_OPEN,
    CINEMA_DOORS,
    LIZ_BLINDS,
    LIZ_GATE_OUTSIDE,
    GO_KART_INTERIOR_LEFT,
    GO_KART_INTERIOR_RIGHT,
    LIZ_GATE_OUTSIDE_OPEN
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
    [BUOY_FLOAT]: BuoyFloat,
    [PRINCIPAL_DOOR]: PrincipalDoor,
    [BENNETT_BLINDS]: BennettBlinds,
    [BENNETT_DOOR_OUTSIDE]: BennettDoorOutside,
    [BENNETT_GATE_SIDE]: BennettGateSide,
    [BENNETT_CUSHIONS]: BennettCushions,
    [BANCROFT_DOOR]: BancroftDoor,
    [BASEMENT_DOOR]: BasementDoor,
    [BASEMENT_DOOR_OPEN]: BasementDoorOpen,
    [CINEMA_DOORS]: CinemaDoors,
    [LIZ_BLINDS]: LizBlinds,
    [LIZ_GATE_OUTSIDE]: LizGateOutside,
    [GO_KART_INTERIOR_LEFT]: GoKartInteriorLeft,
    [GO_KART_INTERIOR_RIGHT]: GoKartInteriorRight,
    [LIZ_GATE_OUTSIDE_OPEN]: LizGateOutsideOpen
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
