import nurseDoor from 'assets/svgs/doors/nurseDoor'
import porchDoor from 'assets/svgs/doors/porchDoor'
import bedroomBlinds from 'assets/svgs/doors/bedroomBlinds'
import bedroomBlindsOpen from 'assets/svgs/doors/bedroomBlindsOpen'
// import ironGateLow from 'assets/svgs/doors/ironGateLow'
// import ironGate from 'assets/svgs/doors/ironGate'
import principalDoor from 'assets/svgs/doors/principalDoor'
import blindsOutside from 'assets/svgs/doors/blindsOutside'
import bennettDoorOutside from 'assets/svgs/doors/bennettDoorOutside'
import bennettGateSide from 'assets/svgs/doors/bennettGateSide'
// import bancroftDoor from 'assets/svgs/doors/bancroftDoor'
import basementDoor from 'assets/svgs/doors/basementDoor'
import basementDoorOpen from 'assets/svgs/doors/basementDoorOpen'
import basementDoorSide from 'assets/svgs/doors/basementDoorSide'
import cinemaDoors from 'assets/svgs/doors/cinemaDoors'
import lizGateOutside from 'assets/svgs/doors/lizGateOutside'
import dishroomDoor from 'assets/svgs/doors/dishroomDoor'
import bennettGateFront from 'assets/svgs/doors/bennettGateFront'
import neighbourDoor from 'assets/svgs/doors/neighbourDoor'
import bennettGateSideOpen from 'assets/svgs/doors/bennettGateSideOpen'
import bennettDoorInside from 'assets/svgs/doors/bennettDoorInside'
import bennettDoorInsideOpen from 'assets/svgs/doors/bennettDoorInsideOpen'
import waitingRoomDoor from 'assets/svgs/doors/waitingRoomDoor'
import waitingRoomDoorOpen from 'assets/svgs/doors/waitingRoomDoorOpen'
import clubDoorOpen from 'assets/svgs/doors/clubDoorOpen'
import blindsInside from 'assets/svgs/doors/blindsInside'
import blindsInsideOpen from 'assets/svgs/doors/blindsInsideOpen'
import lizDoor from 'assets/svgs/doors/lizDoor'
import lizDoorOpen from 'assets/svgs/doors/lizDoorOpen'
import lizGateInside from 'assets/svgs/doors/lizGateInside'
import loadingDockDoor from 'assets/svgs/doors/loadingDockDoor'
import elToritoDoors from 'assets/svgs/doors/elToritoDoors'

import {
    NURSE_DOOR,
    PORCH_DOOR,
    BEDROOM_BLINDS,
    BEDROOM_BLINDS_OPEN,
    IRON_GATE_LOW,
    IRON_GATE,
    PRINCIPAL_DOOR,
    BLINDS_OUTSIDE__BENNETT,
    BENNETT_DOOR_OUTSIDE,
    BENNETT_GATE_SIDE,
    BANCROFT_DOOR,
    BASEMENT_DOOR,
    BASEMENT_DOOR_OPEN,
    BASEMENT_DOOR_SIDE,
    CINEMA_DOORS,
    BLINDS_OUTSIDE__LIZ_ENDING,
    BLINDS_OUTSIDE__LIZ_ENDED,
    LIZ_GATE_OUTSIDE__ENDING,
    LIZ_GATE_OUTSIDE__ENDED,
    DISHROOM_DOOR,
    BENNETT_GATE_FRONT,
    BENNETT_GATE_SIDE_OPEN,
    BLINDS_OUTSIDE__NEIGHBOUR,
    NEIGHBOUR_DOOR,
    BLINDS_INSIDE_OPEN__BENNETT,
    BENNETT_DOOR_INSIDE,
    BENNETT_DOOR_INSIDE_OPEN,
    WAITING_ROOM_DOOR,
    WAITING_ROOM_DOOR_OPEN,
    CLUB_DOOR_OPEN,
    BLINDS_INSIDE__LIZ,
    BLINDS_INSIDE_OPEN__LIZ,
    LIZ_DOOR,
    LIZ_DOOR_OPEN,
    LIZ_GATE_INSIDE,
    LIZ_GATE_INSIDE_OPEN,
    LOADING_DOCK_DOOR,
    EL_TORITO_DOORS
} from '../../../constants/scene/things/doors'

export default {
    [NURSE_DOOR]: nurseDoor,
    [PORCH_DOOR]: porchDoor,
    [BEDROOM_BLINDS]: bedroomBlinds,
    [BEDROOM_BLINDS_OPEN]: bedroomBlindsOpen,
    [IRON_GATE_LOW]: false,
    [IRON_GATE]: false,
    [PRINCIPAL_DOOR]: principalDoor,
    [BLINDS_OUTSIDE__BENNETT]: blindsOutside,
    [BENNETT_DOOR_OUTSIDE]: bennettDoorOutside,
    [BENNETT_GATE_SIDE]: bennettGateSide,
    [BANCROFT_DOOR]: false,
    [BASEMENT_DOOR]: basementDoor,
    [BASEMENT_DOOR_OPEN]: basementDoorOpen,
    [BASEMENT_DOOR_SIDE]: basementDoorSide,
    [CINEMA_DOORS]: cinemaDoors,
    [BLINDS_OUTSIDE__LIZ_ENDING]: blindsOutside,
    [BLINDS_OUTSIDE__LIZ_ENDED]: blindsOutside,
    [LIZ_GATE_OUTSIDE__ENDING]: lizGateOutside,
    [LIZ_GATE_OUTSIDE__ENDED]: lizGateOutside,
    [DISHROOM_DOOR]: dishroomDoor,
    [BENNETT_GATE_FRONT]: bennettGateFront,
    [BLINDS_OUTSIDE__NEIGHBOUR]: blindsOutside,
    [NEIGHBOUR_DOOR]: neighbourDoor,
    [BENNETT_GATE_SIDE_OPEN]: bennettGateSideOpen,
    [BLINDS_INSIDE_OPEN__BENNETT]: blindsInsideOpen,
    [BENNETT_DOOR_INSIDE]: bennettDoorInside,
    [BENNETT_DOOR_INSIDE_OPEN]: bennettDoorInsideOpen,
    [WAITING_ROOM_DOOR]: waitingRoomDoor,
    [WAITING_ROOM_DOOR_OPEN]: waitingRoomDoorOpen,
    [CLUB_DOOR_OPEN]: clubDoorOpen,
    [BLINDS_INSIDE__LIZ]: blindsInside,
    [BLINDS_INSIDE_OPEN__LIZ]: blindsInsideOpen,
    [LIZ_DOOR]: lizDoor,
    [LIZ_DOOR_OPEN]: lizDoorOpen,
    [LIZ_GATE_INSIDE]: lizGateInside,
    [LIZ_GATE_INSIDE_OPEN]: false,
    [LOADING_DOCK_DOOR]: loadingDockDoor,
    [EL_TORITO_DOORS]: elToritoDoors
}
