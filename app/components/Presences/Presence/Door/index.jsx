import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import PorchDoor from './Doors/PorchDoor'
import BedroomBlinds from './Doors/BedroomBlinds'
import BedroomBlindsOpen from './Doors/BedroomBlindsOpen'
import IronGateLow from './Doors/IronGateLow'
import IronGate from './Doors/IronGate'
import PrincipalDoor from './Doors/PrincipalDoor'
import BennettBlinds from './Doors/BennettBlinds'
import BennettDoorOutside from './Doors/BennettDoorOutside'
import BennettGateSide from './Doors/BennettGateSide'
import BancroftDoor from './Doors/BancroftDoor'
import BasementDoor from './Doors/BasementDoor'
import BasementDoorOpen from './Doors/BasementDoorOpen'
import CinemaDoorLeft from './Doors/CinemaDoorLeft'
import CinemaDoorRight from './Doors/CinemaDoorRight'
import LizGateOutside from './Doors/LizGateOutside'
import LizGateOutsideOpen from './Doors/LizGateOutsideOpen'
import DishroomDoor from './Doors/DishroomDoor'
import BennettGateFront from './Doors/BennettGateFront'
import BennettBlindsOpen from './Doors/BennettBlindsOpen'
import BennettGateSideOpen from './Doors/BennettGateSideOpen'
import BennettDoorInside from './Doors/BennettDoorInside'
import BennettDoorInsideOpen from './Doors/BennettDoorInsideOpen'
import WaitingRoomDoor from './Doors/WaitingRoomDoor'
import WaitingRoomDoorOpen from './Doors/WaitingRoomDoorOpen'
import ClubDoor from './Doors/ClubDoor'
import LizBlinds from './Doors/LizBlinds'
import LizBlindsOpen from './Doors/LizBlindsOpen'
import LizDoor from './Doors/LizDoor'
import LizDoorOpen from './Doors/LizDoorOpen'
import LizGateInside from './Doors/LizGateInside'
import LizGateInsideOpen from './Doors/LizGateInsideOpen'
import LoadingDockDoor from './Doors/LoadingDockDoor'
import ElToritoDoorLeft from './Doors/ElToritoDoorLeft'
import ElToritoDoorRight from './Doors/ElToritoDoorRight'

import {
    PORCH_DOOR,
    BEDROOM_BLINDS,
    BEDROOM_BLINDS_OPEN,
    IRON_GATE_LOW,
    IRON_GATE,
    PRINCIPAL_DOOR,
    BENNETT_BLINDS,
    BENNETT_DOOR_OUTSIDE,
    BENNETT_GATE_SIDE,
    BANCROFT_DOOR,
    BASEMENT_DOOR,
    BASEMENT_DOOR_OPEN,
    CINEMA_DOOR_LEFT,
    CINEMA_DOOR_RIGHT,
    LIZ_BLINDS,
    LIZ_BLINDS_OPEN,
    LIZ_GATE_OUTSIDE,
    LIZ_GATE_OUTSIDE_OPEN,
    DISHROOM_DOOR,
    BENNETT_BLINDS_OPEN,
    BENNETT_GATE_FRONT,
    BENNETT_GATE_SIDE_OPEN,
    BENNETT_DOOR_INSIDE,
    BENNETT_DOOR_INSIDE_OPEN,
    WAITING_ROOM_DOOR,
    WAITING_ROOM_DOOR_OPEN,
    CLUB_DOOR,
    LIZ_DOOR,
    LIZ_DOOR_OPEN,
    LIZ_GATE_INSIDE,
    LIZ_GATE_INSIDE_OPEN,
    LOADING_DOCK_DOOR,
    EL_TORITO_DOOR_LEFT,
    EL_TORITO_DOOR_RIGHT,
} from 'scene/doorKeys'

const DOORS_MAP = {
    [PORCH_DOOR]: PorchDoor,
    [BEDROOM_BLINDS]: BedroomBlinds,
    [BEDROOM_BLINDS_OPEN]: BedroomBlindsOpen,
    [IRON_GATE_LOW]: IronGateLow,
    [IRON_GATE]: IronGate,
    [PRINCIPAL_DOOR]: PrincipalDoor,
    [BENNETT_BLINDS]: BennettBlinds,
    [BENNETT_DOOR_OUTSIDE]: BennettDoorOutside,
    [BENNETT_GATE_SIDE]: BennettGateSide,
    [BANCROFT_DOOR]: BancroftDoor,
    [BASEMENT_DOOR]: BasementDoor,
    [BASEMENT_DOOR_OPEN]: BasementDoorOpen,
    [CINEMA_DOOR_LEFT]: CinemaDoorLeft,
    [CINEMA_DOOR_RIGHT]: CinemaDoorRight,
    [LIZ_GATE_OUTSIDE]: LizGateOutside,
    [LIZ_GATE_OUTSIDE_OPEN]: LizGateOutsideOpen,
    [DISHROOM_DOOR]: DishroomDoor,
    [BENNETT_GATE_FRONT]: BennettGateFront,
    [BENNETT_BLINDS_OPEN]: BennettBlindsOpen,
    [BENNETT_GATE_SIDE_OPEN]: BennettGateSideOpen,
    [BENNETT_DOOR_INSIDE]: BennettDoorInside,
    [BENNETT_DOOR_INSIDE_OPEN]: BennettDoorInsideOpen,
    [WAITING_ROOM_DOOR]: WaitingRoomDoor,
    [WAITING_ROOM_DOOR_OPEN]: WaitingRoomDoorOpen,
    [CLUB_DOOR]: ClubDoor,
    [LIZ_BLINDS]: LizBlinds,
    [LIZ_BLINDS_OPEN]: LizBlindsOpen,
    [LIZ_DOOR]: LizDoor,
    [LIZ_DOOR_OPEN]: LizDoorOpen,
    [LIZ_GATE_INSIDE]: LizGateInside,
    [LIZ_GATE_INSIDE_OPEN]: LizGateInsideOpen,
    [LOADING_DOCK_DOOR]: LoadingDockDoor,
    [EL_TORITO_DOOR_LEFT]: ElToritoDoorLeft,
    [EL_TORITO_DOOR_RIGHT]: ElToritoDoorRight
}

const propTypes = {
    // From parent.
    className: PropTypes.any,
    nameKey: PropTypes.string.isRequired,
    x: PropTypes.string.isRequired,
    y: PropTypes.string.isRequired,
    width: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired
}

const Door = ({

    className,
    nameKey,

...other }) => {

    const DoorComponent = DOORS_MAP[nameKey]

    return (
        <DoorComponent {...other}
            className={cx(
                'Door',
                className
            )}
        />
    )
}

Door.propTypes = propTypes;

export default Door
