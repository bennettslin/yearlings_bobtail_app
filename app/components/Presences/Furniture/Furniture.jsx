import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import PorchDoor from './Furnitures/Porch/PorchDoor'
import BedroomBlinds from './Furnitures/Bedroom/BedroomBlinds'
import BedroomBlindsOpen from './Furnitures/Bedroom/BedroomBlindsOpen'
import CaptainBedMattress from './Furnitures/Bedroom/CaptainBedMattress'
import SchoolbusSeatFront from './Furnitures/Schoolbus/SchoolbusSeatFront'
import SchoolbusSeatRear from './Furnitures/Schoolbus/SchoolbusSeatRear'
import StairwellRailing from './Furnitures/TaiwanStairs/StairwellRailing'
import IronGateLow from './Furnitures/TaiwanStairs/IronGateLow'
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
import LizGateOutside from './Furnitures/LizGate/LizGateOutside'
import GoKartSeatLeft from './Furnitures/GoKarts/GoKartSeatLeft'
import GoKartSeatRight from './Furnitures/GoKarts/GoKartSeatRight'
import GoKartDashboardLeft from './Furnitures/GoKarts/GoKartDashboardLeft'
import GoKartDashboardRight from './Furnitures/GoKarts/GoKartDashboardRight'
import LizGateOutsideOpen from './Furnitures/LizGate/LizGateOutsideOpen'
import DishroomDoor from './Furnitures/Dishroom/DishroomDoor'
import BennettGateFront from './Furnitures/BennettGate/BennettGateFront'
import BennettBlindsOpen from './Furnitures/BennettBed/BennettBlindsOpen'
import BennettGateSideOpen from './Furnitures/BennettBed/BennettGateSideOpen'
import BennettDoorInside from './Furnitures/BennettBed/BennettDoorInside'
import BennettDoorInsideOpen from './Furnitures/BennettBed/BennettDoorInsideOpen'
import BennettMattress from './Furnitures/BennettBed/BennettMattress'
import BennettPillows from './Furnitures/BennettBed/BennettPillows'
import ArmchairLeft from './Furnitures/WaitingRoom/ArmchairLeft'
import ArmchairRight from './Furnitures/WaitingRoom/ArmchairRight'
import WaitingRoomDoor from './Furnitures/WaitingRoom/WaitingRoomDoor'
import WaitingRoomDoorOpen from './Furnitures/WaitingRoom/WaitingRoomDoorOpen'
import LizMattress from './Furnitures/LizBed/LizMattress'
import LizPillows from './Furnitures/LizBed/LizPillows'
import LizMattressReflection from './Furnitures/LizBed/LizMattressReflection'
import LizPillowsReflection from './Furnitures/LizBed/LizPillowsReflection'
import SaturnSeatFront from './Furnitures/StationWagon/SaturnSeatFront'
import SaturnSeatRear from './Furnitures/StationWagon/SaturnSeatRear'
import SaturnDashboard from './Furnitures/StationWagon/SaturnDashboard'
import AtticCushions from './Furnitures/Attic/AtticCushions'
import ClubDoor from './Furnitures/ClubLoading/ClubDoor'
import LizBlinds from './Furnitures/LizCouch/LizBlinds'
import LizBlindsOpen from './Furnitures/LizCouch/LizBlindsOpen'
import LizCushions from './Furnitures/LizCouch/LizCushions'
import LizDoor from './Furnitures/LizCouch/LizDoor'
import LizDoorOpen from './Furnitures/LizCouch/LizDoorOpen'
import LizGateInside from './Furnitures/LizCouch/LizGateInside'
import LizGateInsideOpen from './Furnitures/LizCouch/LizGateInsideOpen'
import MiriamCushions from './Furnitures/SnowglobesPresent/MiriamCushions'
import ReattaSeat from './Furnitures/ElCerrito/ReattaSeat'
import ReattaSeatLowered from './Furnitures/ElCerrito/ReattaSeatLowered'
import ReattaDashboard from './Furnitures/ElCerrito/ReattaDashboard'
import LoadingDockDoor from './Furnitures/Alley/LoadingDockDoor'
import ElToritoDoorLeft from './Furnitures/ElTorito/ElToritoDoorLeft'
import ElToritoDoorRight from './Furnitures/ElTorito/ElToritoDoorRight'
import HospitalMattress from './Furnitures/Deathbed/HospitalMattress'

import {
    PORCH_DOOR,
    BEDROOM_BLINDS,
    BEDROOM_BLINDS_OPEN,
    CAPTAIN_BED_MATTRESS,
    SCHOOLBUS_SEAT_FRONT,
    SCHOOLBUS_SEAT_REAR,
    STAIRWELL_RAILING,
    IRON_GATE_LOW,
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
    LIZ_GATE_OUTSIDE,
    GO_KART_SEAT_LEFT,
    GO_KART_SEAT_RIGHT,
    GO_KART_DASHBOARD_LEFT,
    GO_KART_DASHBOARD_RIGHT,
    LIZ_GATE_OUTSIDE_OPEN,
    DISHROOM_DOOR,
    BENNETT_GATE_FRONT,
    BENNETT_BLINDS_OPEN,
    BENNETT_GATE_SIDE_OPEN,
    BENNETT_DOOR_INSIDE,
    BENNETT_DOOR_INSIDE_OPEN,
    BENNETT_MATTRESS,
    BENNETT_PILLOWS,
    ARMCHAIR_LEFT,
    ARMCHAIR_RIGHT,
    WAITING_ROOM_DOOR,
    WAITING_ROOM_DOOR_OPEN,
    LIZ_MATTRESS,
    LIZ_PILLOWS,
    LIZ_MATTRESS_REFLECTION,
    LIZ_PILLOWS_REFLECTION,
    SATURN_SEAT_FRONT,
    SATURN_SEAT_REAR,
    SATURN_DASHBOARD,
    ATTIC_CUSHIONS,
    CLUB_DOOR,
    LIZ_BLINDS,
    LIZ_BLINDS_OPEN,
    LIZ_CUSHIONS,
    LIZ_DOOR,
    LIZ_DOOR_OPEN,
    LIZ_GATE_INSIDE,
    LIZ_GATE_INSIDE_OPEN,
    MIRIAM_CUSHIONS,
    REATTA_SEAT,
    REATTA_SEAT_LOWERED,
    REATTA_DASHBOARD,
    LOADING_DOCK_DOOR,
    EL_TORITO_DOOR_LEFT,
    EL_TORITO_DOOR_RIGHT,
    HOSPITAL_MATTRESS
} from 'scene/furnitureKeys'

const FURNITURES_MAP = {
    [PORCH_DOOR]: PorchDoor,
    [BEDROOM_BLINDS]: BedroomBlinds,
    [BEDROOM_BLINDS_OPEN]: BedroomBlindsOpen,
    [CAPTAIN_BED_MATTRESS]: CaptainBedMattress,
    [SCHOOLBUS_SEAT_FRONT]: SchoolbusSeatFront,
    [SCHOOLBUS_SEAT_REAR]: SchoolbusSeatRear,
    [STAIRWELL_RAILING]: StairwellRailing,
    [IRON_GATE_LOW]: IronGateLow,
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
    [LIZ_GATE_OUTSIDE]: LizGateOutside,
    [GO_KART_SEAT_LEFT]: GoKartSeatLeft,
    [GO_KART_SEAT_RIGHT]: GoKartSeatRight,
    [GO_KART_DASHBOARD_LEFT]: GoKartDashboardLeft,
    [GO_KART_DASHBOARD_RIGHT]: GoKartDashboardRight,
    [LIZ_GATE_OUTSIDE_OPEN]: LizGateOutsideOpen,
    [DISHROOM_DOOR]: DishroomDoor,
    [BENNETT_GATE_FRONT]: BennettGateFront,
    [BENNETT_BLINDS_OPEN]: BennettBlindsOpen,
    [BENNETT_GATE_SIDE_OPEN]: BennettGateSideOpen,
    [BENNETT_DOOR_INSIDE]: BennettDoorInside,
    [BENNETT_DOOR_INSIDE_OPEN]: BennettDoorInsideOpen,
    [BENNETT_MATTRESS]: BennettMattress,
    [BENNETT_PILLOWS]: BennettPillows,
    [ARMCHAIR_LEFT]: ArmchairLeft,
    [ARMCHAIR_RIGHT]: ArmchairRight,
    [WAITING_ROOM_DOOR]: WaitingRoomDoor,
    [WAITING_ROOM_DOOR_OPEN]: WaitingRoomDoorOpen,
    [LIZ_MATTRESS]: LizMattress,
    [LIZ_PILLOWS]: LizPillows,
    [LIZ_MATTRESS_REFLECTION]: LizMattressReflection,
    [LIZ_PILLOWS_REFLECTION]: LizPillowsReflection,
    [SATURN_SEAT_FRONT]: SaturnSeatFront,
    [SATURN_SEAT_REAR]: SaturnSeatRear,
    [SATURN_DASHBOARD]: SaturnDashboard,
    [ATTIC_CUSHIONS]: AtticCushions,
    [CLUB_DOOR]: ClubDoor,
    [LIZ_BLINDS]: LizBlinds,
    [LIZ_BLINDS_OPEN]: LizBlindsOpen,
    [LIZ_CUSHIONS]: LizCushions,
    [LIZ_DOOR]: LizDoor,
    [LIZ_DOOR_OPEN]: LizDoorOpen,
    [LIZ_GATE_INSIDE]: LizGateInside,
    [LIZ_GATE_INSIDE_OPEN]: LizGateInsideOpen,
    [MIRIAM_CUSHIONS]: MiriamCushions,
    [REATTA_SEAT]: ReattaSeat,
    [REATTA_SEAT_LOWERED]: ReattaSeatLowered,
    [REATTA_DASHBOARD]: ReattaDashboard,
    [LOADING_DOCK_DOOR]: LoadingDockDoor,
    [EL_TORITO_DOOR_LEFT]: ElToritoDoorLeft,
    [EL_TORITO_DOOR_RIGHT]: ElToritoDoorRight,
    [HOSPITAL_MATTRESS]: HospitalMattress
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
