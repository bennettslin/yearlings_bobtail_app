import bancroftDoor from '../../../../../assets/svgs/doors/bancroftDoor'
import basementDoor from '../../../../../assets/svgs/doors/basementDoor'
import basementDoorOpen from '../../../../../assets/svgs/doors/basementDoorOpen'
import basementDoorSide from '../../../../../assets/svgs/doors/basementDoorSide'
import bedroomBlinds from '../../../../../assets/svgs/doors/bedroomBlinds'
import bedroomBlindsOpen from '../../../../../assets/svgs/doors/bedroomBlindsOpen'
import bedroomFence from '../../../../../assets/svgs/doors/bedroomFence'
import bennettDoorInside from '../../../../../assets/svgs/doors/bennettDoorInside'
import bennettDoorInsideOpen from '../../../../../assets/svgs/doors/bennettDoorInsideOpen'
import bennettDoorOutside from '../../../../../assets/svgs/doors/bennettDoorOutside'
import bennettGateFront from '../../../../../assets/svgs/doors/bennettGateFront'
import bennettGateSide from '../../../../../assets/svgs/doors/bennettGateSide'
import bennettGateSideOpen from '../../../../../assets/svgs/doors/bennettGateSideOpen'
import blindsInsideOpen from '../../../../../assets/svgs/doors/blindsInsideOpen'
import blindsOutside from '../../../../../assets/svgs/doors/blindsOutside'
import cinemaDoors from '../../../../../assets/svgs/doors/cinemaDoors'
import clubDoorOpen from '../../../../../assets/svgs/doors/clubDoorOpen'
import defaultFence from '../../../../../assets/svgs/doors/defaultFence'
import dishroomDoor from '../../../../../assets/svgs/doors/dishroomDoor'
import elToritoDoors from '../../../../../assets/svgs/doors/elToritoDoors'
import ironGate from '../../../../../assets/svgs/doors/ironGate'
import ironGateLow from '../../../../../assets/svgs/doors/ironGateLow'
import lizBlindsInside from '../../../../../assets/svgs/doors/lizBlindsInside'
import lizBlindsInsideOpen from '../../../../../assets/svgs/doors/lizBlindsInsideOpen'
import lizBlindsOutside from '../../../../../assets/svgs/doors/lizBlindsOutside'
import lizDoor from '../../../../../assets/svgs/doors/lizDoor'
import lizDoorOpen from '../../../../../assets/svgs/doors/lizDoorOpen'
import lizGateInside from '../../../../../assets/svgs/doors/lizGateInside'
import lizGateOutside from '../../../../../assets/svgs/doors/lizGateOutside'
import lizGateOutsideOpen from '../../../../../assets/svgs/doors/lizGateOutsideOpen'
import loadingDockDoor from '../../../../../assets/svgs/doors/loadingDockDoor'
import neighbourDoor from '../../../../../assets/svgs/doors/neighbourDoor'
import nurseDoor from '../../../../../assets/svgs/doors/nurseDoor'
import porchDoor from '../../../../../assets/svgs/doors/porchDoor'
import principalDoor from '../../../../../assets/svgs/doors/principalDoor'
import waitingRoomDoor from '../../../../../assets/svgs/doors/waitingRoomDoor'
import waitingRoomDoorOpen from '../../../../../assets/svgs/doors/waitingRoomDoorOpen'

import {
    BANCROFT_DOOR,
    BASEMENT_DOOR,
    BASEMENT_DOOR_OPEN,
    BASEMENT_DOOR_SIDE,
    BEDROOM_BLINDS,
    BEDROOM_BLINDS_OPEN,
    BEDROOM_FENCE,
    BENNETT_DOOR_INSIDE,
    BENNETT_DOOR_INSIDE_OPEN,
    BENNETT_DOOR_OUTSIDE,
    BENNETT_GATE_FRONT,
    BENNETT_GATE_SIDE,
    BENNETT_GATE_SIDE_OPEN,
    BLINDS_INSIDE_OPEN,
    BLINDS_OUTSIDE__BENNETT,
    BLINDS_OUTSIDE__NEIGHBOUR,
    CINEMA_DOORS,
    CLUB_DOOR_OPEN,
    DEFAULT_FENCE_BASEMENT,
    DEFAULT_FENCE_BATHROOM,
    DISHROOM_DOOR,
    EL_TORITO_DOORS,
    IRON_GATE,
    IRON_GATE_LOW,
    LIZ_BLINDS_INSIDE,
    LIZ_BLINDS_INSIDE_OPEN,
    LIZ_BLINDS_OUTSIDE__ENDED,
    LIZ_BLINDS_OUTSIDE__ENDING,
    LIZ_DOOR,
    LIZ_DOOR_OPEN,
    LIZ_GATE_INSIDE,
    LIZ_GATE_OUTSIDE,
    LIZ_GATE_OUTSIDE_OPEN,
    LOADING_DOCK_DOOR,
    NEIGHBOUR_DOOR,
    NURSE_DOOR,
    PORCH_DOOR,
    PRINCIPAL_DOOR,
    WAITING_ROOM_DOOR,
    WAITING_ROOM_DOOR_OPEN,
} from '../../../../constants/scene/things/doors'

export default {
    [NURSE_DOOR]: nurseDoor,
    [DEFAULT_FENCE_BATHROOM]: defaultFence,
    [PORCH_DOOR]: porchDoor,
    [BEDROOM_FENCE]: bedroomFence,
    [BEDROOM_BLINDS]: bedroomBlinds,
    [BEDROOM_BLINDS_OPEN]: bedroomBlindsOpen,
    [IRON_GATE_LOW]: ironGateLow,
    [IRON_GATE]: ironGate,
    [PRINCIPAL_DOOR]: principalDoor,
    [BLINDS_OUTSIDE__BENNETT]: blindsOutside,
    [BENNETT_DOOR_OUTSIDE]: bennettDoorOutside,
    [BENNETT_GATE_SIDE]: bennettGateSide,
    [BANCROFT_DOOR]: bancroftDoor,
    [DEFAULT_FENCE_BASEMENT]: defaultFence,
    [BASEMENT_DOOR]: basementDoor,
    [BASEMENT_DOOR_OPEN]: basementDoorOpen,
    [BASEMENT_DOOR_SIDE]: basementDoorSide,
    [CINEMA_DOORS]: cinemaDoors,
    [LIZ_BLINDS_OUTSIDE__ENDING]: lizBlindsOutside,
    [LIZ_BLINDS_OUTSIDE__ENDED]: lizBlindsOutside,
    [LIZ_GATE_OUTSIDE]: lizGateOutside,
    [LIZ_GATE_OUTSIDE_OPEN]: lizGateOutsideOpen,
    [DISHROOM_DOOR]: dishroomDoor,
    [BENNETT_GATE_FRONT]: bennettGateFront,
    [BLINDS_OUTSIDE__NEIGHBOUR]: blindsOutside,
    [NEIGHBOUR_DOOR]: neighbourDoor,
    [BENNETT_GATE_SIDE_OPEN]: bennettGateSideOpen,
    [BLINDS_INSIDE_OPEN]: blindsInsideOpen,
    [BENNETT_DOOR_INSIDE]: bennettDoorInside,
    [BENNETT_DOOR_INSIDE_OPEN]: bennettDoorInsideOpen,
    [WAITING_ROOM_DOOR]: waitingRoomDoor,
    [WAITING_ROOM_DOOR_OPEN]: waitingRoomDoorOpen,
    [CLUB_DOOR_OPEN]: clubDoorOpen,
    [LIZ_BLINDS_INSIDE]: lizBlindsInside,
    [LIZ_BLINDS_INSIDE_OPEN]: lizBlindsInsideOpen,
    [LIZ_DOOR]: lizDoor,
    [LIZ_DOOR_OPEN]: lizDoorOpen,
    [LIZ_GATE_INSIDE]: lizGateInside,
    [LOADING_DOCK_DOOR]: loadingDockDoor,
    [EL_TORITO_DOORS]: elToritoDoors,
}
