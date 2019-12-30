import {
    FIRE_HYDRANT,
    PLAYGROUND_SLIDE,
    MIRRORED_SINK,
    TOWEL_RACK,
    SHOPPING_CART,
    OVERPASS_SIGN_BACK,
    CAMPFIRE,
    BUDDHA_SHRINE,
    TAIWAN_FRIDGE,
    TAIWAN_TREE,
    YELLOW_TAPED_GRILL,
    LOCKER_BANK,
    RECYCLABLES,
    BERKELEY_LAMPPOST,
    SIGNPOST,
    BANCROFT_SHRUB,
    ASH_CAN,
    CYPRESS_TREE,
    MUSEUM_DISPLAY,
    CAVEMAN_BONES,
    SANDBAGS,
    STAGE_LIGHTS,
    TRAFFIC_LIGHT,
    DISH_PILE,
    TRAY_PILE,
    APARTMENT_PLANT,
    WAITING_ROOM_PLANT,
    PHARMACY_AISLE,
    STEAM_PIPES,
    GRAVESTONE,
    STORAGE_BOXES,
    STORAGE_CHEST,
    HOWIE_FRIDGE,
    TELEVISION,
    EL_CERRITO_TREE,
    DUMPSTER,
    DISPENSER_LEFT,
    DISPENSER_RIGHT,
    WEDDING_CROWD,
    CLIFF_TREE,
    IV_DRIP,

    TRASH_CAN,
    CACTUS_SINGLE,
    CACTUS_DOUBLE,
    BUSH_SINGLE,
    BUSH_DOUBLE,
    CAMPUS_TREE_SINGLE,
    CAMPUS_TREE_DOUBLE,
    MONITOR_FRONT,
    WALL_SPEAKER_FRONT,
    GLASS_RACK,
    DISHROOM_DOLLY,
    UCLA_TREE,
    MONITOR_SIDE,
    WALL_SPEAKER_SIDE,
    TWIN_STREETLAMP
} from '../../../../constants/scene/things/cutouts'

import { ALL_PEOPLE__SHARED } from '../../../sharedStyles/people'
import { WEDDING__SHARED } from '../../../sharedStyles/buildings'
import {
    CUP__SHARED,
    DISH__SHARED,
    TRAY__SHARED
} from '../../../sharedStyles/dishroom'
import {
    BANANA__SHARED,
    CIGARETTE__SHARED,
    GARBAGE_BAG__SHARED,
    PAPER_BAG__SHARED
} from '../../../sharedStyles/food'
import { MONITOR__SHARED } from '../../../sharedStyles/instruments'
import {
    LAMPPOST__SHARED,
    FREEWAY_SIGN__SHARED
} from '../../../sharedStyles/outdoor'
import { NEWSPAPER__SHARED } from '../../../sharedStyles/paper'
import { BUDDHA_SHRINE__SHARED } from '../../../sharedStyles/taiwan'

export default {
    [FIRE_HYDRANT]: null,
    [PLAYGROUND_SLIDE]: null,
    [MIRRORED_SINK]: ALL_PEOPLE__SHARED,
    [TOWEL_RACK]: null,
    [SHOPPING_CART]: GARBAGE_BAG__SHARED,
    [OVERPASS_SIGN_BACK]: FREEWAY_SIGN__SHARED,
    [CAMPFIRE]: null,
    [BUDDHA_SHRINE]: BUDDHA_SHRINE__SHARED,
    [TAIWAN_FRIDGE]: null,
    [TAIWAN_TREE]: null,
    [YELLOW_TAPED_GRILL]: null,
    [LOCKER_BANK]: null,
    [RECYCLABLES]: null,
    [BERKELEY_LAMPPOST]: LAMPPOST__SHARED,
    [SIGNPOST]: null,
    [BANCROFT_SHRUB]: null,
    [ASH_CAN]: CIGARETTE__SHARED,
    [CYPRESS_TREE]: null,
    [MUSEUM_DISPLAY]: null,
    [CAVEMAN_BONES]: null,
    [SANDBAGS]: null,
    [STAGE_LIGHTS]: null,
    [TRAFFIC_LIGHT]: null,
    [DISH_PILE]: DISH__SHARED,
    [TRAY_PILE]: TRAY__SHARED,
    [APARTMENT_PLANT]: null,
    [WAITING_ROOM_PLANT]: null,
    [PHARMACY_AISLE]: null,
    [STEAM_PIPES]: null,
    [GRAVESTONE]: null,
    [STORAGE_BOXES]: null,
    [STORAGE_CHEST]: null,
    [HOWIE_FRIDGE]: null,
    [TELEVISION]: null,
    [EL_CERRITO_TREE]: null,
    [DUMPSTER]: null,
    [DISPENSER_LEFT]: NEWSPAPER__SHARED,
    [DISPENSER_RIGHT]: [
        NEWSPAPER__SHARED,
        ALL_PEOPLE__SHARED
    ],
    [WEDDING_CROWD]: WEDDING__SHARED,
    [CLIFF_TREE]: null,
    [IV_DRIP]: null,

    [TRASH_CAN]: [
        BANANA__SHARED,
        GARBAGE_BAG__SHARED,
        PAPER_BAG__SHARED
    ],
    [CACTUS_SINGLE]: null,
    [CACTUS_DOUBLE]: null,
    [BUSH_SINGLE]: null,
    [BUSH_DOUBLE]: null,
    [CAMPUS_TREE_SINGLE]: null,
    [CAMPUS_TREE_DOUBLE]: null,
    [MONITOR_FRONT]: MONITOR__SHARED,
    [WALL_SPEAKER_FRONT]: MONITOR__SHARED,
    [GLASS_RACK]: CUP__SHARED,
    [DISHROOM_DOLLY]: null,
    [UCLA_TREE]: null,
    [MONITOR_SIDE]: MONITOR__SHARED,
    [WALL_SPEAKER_SIDE]: MONITOR__SHARED,
    [TWIN_STREETLAMP]: LAMPPOST__SHARED
}

