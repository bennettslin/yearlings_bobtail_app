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
    BLINDS_OUTSIDE,
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
    LIZ_BLINDS_OUTSIDE,
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
} from '../../../../../../app/constants/scene/things/doors'
import {
    BENNETT_APARTMENT__SHARED,
    BENNETT_GATE__SHARED,
    BENNETT_INSIDE__SHARED,
    DOOR__SHARED,
    FAMILY_HOUSE__SHARED,
    LIZ_APARTMENT__SHARED,
    LIZ_GATE__SHARED,
    WINDOW__SHARED,
} from '../../../../../../app/constants/scene/sharedStyles/home'
import {
    BRASS__SHARED,
    BRONZE__SHARED,
    IRON__SHARED,
    STEEL__SHARED,
} from '../../../../../../app/constants/scene/sharedStyles/material'
import {
    FOLIAGE__SHARED,
    MOUNTAIN__SHARED,
    WALL__SHARED,
} from '../../../../../../app/constants/scene/sharedStyles/outdoor'
import { DULL__SHARED, FLAT__SHARED, WHITE__SHARED } from '../../../../../../app/constants/scene/sharedStyles/colours'

export default {
    [BANCROFT_DOOR]: [
        BRONZE__SHARED,
        DOOR__SHARED,
        WINDOW__SHARED,
    ],
    [BASEMENT_DOOR]: [
        BRONZE__SHARED,
        DOOR__SHARED,
    ],
    [BASEMENT_DOOR_OPEN]: [
        BRASS__SHARED,
        BRONZE__SHARED,
        DOOR__SHARED,
    ],
    [BASEMENT_DOOR_SIDE]: [
        BRONZE__SHARED,
        DOOR__SHARED,
    ],
    [BEDROOM_BLINDS]: [
        BENNETT_INSIDE__SHARED,
        WINDOW__SHARED,
    ],
    [BEDROOM_BLINDS_OPEN]: [
        BENNETT_INSIDE__SHARED,
        WINDOW__SHARED,
    ],
    [BEDROOM_FENCE]: [
        FOLIAGE__SHARED,
        FAMILY_HOUSE__SHARED,
        MOUNTAIN__SHARED,
    ],
    [BENNETT_DOOR_INSIDE]: [
        BENNETT_INSIDE__SHARED,
        BRONZE__SHARED,
        DOOR__SHARED,
    ],
    [BENNETT_DOOR_INSIDE_OPEN]: [
        BENNETT_APARTMENT__SHARED,
        BENNETT_INSIDE__SHARED,
        BRASS__SHARED,
        BRONZE__SHARED,
        DOOR__SHARED,
    ],
    [BENNETT_DOOR_OUTSIDE]: [
        BENNETT_APARTMENT__SHARED,
        BRONZE__SHARED,
        DOOR__SHARED,
    ],
    [BENNETT_GATE_FRONT]: [
        BENNETT_GATE__SHARED,
        BENNETT_APARTMENT__SHARED,
    ],
    [BENNETT_GATE_SIDE]: [
        BENNETT_GATE__SHARED,
        BENNETT_APARTMENT__SHARED,
    ],
    [BENNETT_GATE_SIDE_OPEN]: [
        BENNETT_GATE__SHARED,
        BENNETT_APARTMENT__SHARED,
    ],
    [BLINDS_INSIDE_OPEN]: [
        BENNETT_INSIDE__SHARED,
        WINDOW__SHARED,
    ],
    [BLINDS_OUTSIDE]: [
        BENNETT_APARTMENT__SHARED,
        WINDOW__SHARED,
    ],
    [CINEMA_DOORS]: [
        BRONZE__SHARED,
        DOOR__SHARED,
        WINDOW__SHARED,
    ],
    [CLUB_DOOR_OPEN]: [
        BRASS__SHARED,
        BRONZE__SHARED,
        DOOR__SHARED,
    ],
    [DEFAULT_FENCE_BASEMENT]: [
        FOLIAGE__SHARED,
        WALL__SHARED,
    ],
    [DEFAULT_FENCE_BATHROOM]: [
        FOLIAGE__SHARED,
        FAMILY_HOUSE__SHARED,
    ],
    [DISHROOM_DOOR]: [
        DOOR__SHARED,
        STEEL__SHARED,
        WINDOW__SHARED,
    ],
    [EL_TORITO_DOORS]: [
        BRASS__SHARED,
        BRONZE__SHARED,
        DOOR__SHARED,
        DULL__SHARED,
        STEEL__SHARED,
        WHITE__SHARED,
        WINDOW__SHARED,
    ],
    [IRON_GATE]: IRON__SHARED,
    [IRON_GATE_LOW]: IRON__SHARED,
    [LIZ_BLINDS_INSIDE]: [
        LIZ_APARTMENT__SHARED,
        WINDOW__SHARED,
    ],
    [LIZ_BLINDS_INSIDE_OPEN]: [
        LIZ_APARTMENT__SHARED,
        WINDOW__SHARED,
    ],
    [LIZ_BLINDS_OUTSIDE]: [
        LIZ_APARTMENT__SHARED,
        WINDOW__SHARED,
    ],
    [LIZ_DOOR]: [
        BRONZE__SHARED,
        DOOR__SHARED,
        LIZ_APARTMENT__SHARED,
    ],
    [LIZ_DOOR_OPEN]: [
        BRASS__SHARED,
        BRONZE__SHARED,
        DOOR__SHARED,
        LIZ_APARTMENT__SHARED,
    ],
    [LIZ_GATE_INSIDE]: [
        LIZ_GATE__SHARED,
        STEEL__SHARED,
    ],
    [LIZ_GATE_OUTSIDE]: LIZ_GATE__SHARED,
    [LIZ_GATE_OUTSIDE_OPEN]: LIZ_GATE__SHARED,
    [LOADING_DOCK_DOOR]: [
        DOOR__SHARED,
        STEEL__SHARED,
    ],
    [NEIGHBOUR_DOOR]: [
        BENNETT_APARTMENT__SHARED,
        BRONZE__SHARED,
        DOOR__SHARED,
    ],
    [NURSE_DOOR]: [
        BRONZE__SHARED,
        DOOR__SHARED,
        FLAT__SHARED,
        WINDOW__SHARED,
    ],
    [PORCH_DOOR]: [
        BRONZE__SHARED,
        DOOR__SHARED,
        WINDOW__SHARED,
    ],
    [PRINCIPAL_DOOR]: [
        BRONZE__SHARED,
        DOOR__SHARED,
    ],
    [WAITING_ROOM_DOOR]: [
        BRONZE__SHARED,
        DOOR__SHARED,
        WINDOW__SHARED,
    ],
    [WAITING_ROOM_DOOR_OPEN]: [
        BRASS__SHARED,
        BRONZE__SHARED,
        DOOR__SHARED,
        WINDOW__SHARED,
    ],
}
