import {
    APARTMENT_PLANT,
    ASH_CAN,
    BANCROFT_SHRUB,
    BUDDHA_SHRINE,
    BUSH_DOUBLE,
    BUSH_SINGLE,
    CACTUS_DOUBLE,
    CACTUS_SINGLE,
    CAMPFIRE,
    CAMPUS_TREE_DOUBLE,
    CAMPUS_TREE_SINGLE,
    CAVEMAN_BONES,
    CLIFF_TREE,
    CYPRESS_TREE,
    DISHROOM_DOLLY,
    DISH_PILE,
    DISPENSER_LEFT,
    DISPENSER_RIGHT,
    DUMPSTER,
    EL_CERRITO_TREE,
    FIRE_HYDRANT,
    GLASS_RACK,
    GRAVESTONE,
    HOWIE_FRIDGE,
    IV_DRIP,
    LAMPPOST,
    LOCKER_BANK,
    MIRRORED_SINK,
    MONITOR_FRONT,
    MONITOR_SIDE,
    MUSEUM_DISPLAY,
    OVERPASS_SIGN_BACK,
    PHARMACY_AISLE,
    PLAYGROUND_SLIDE,
    RECYCLABLES,
    SANDBAGS,
    SHOPPING_CART,
    SIGNPOST,
    STAGE_LIGHTS,
    STEAM_PIPES,
    STORAGE_BOXES,
    STORAGE_CHEST,
    TAIWAN_FRIDGE,
    TAIWAN_TREE,
    TELEVISION,
    TOWEL_RACK,
    TRAFFIC_LIGHT,
    TRASH_CAN,
    TRAY_PILE,
    TWIN_STREETLAMP,
    UCLA_TREE,
    WAITING_ROOM_PLANT,
    WALL_SPEAKER_FRONT,
    WALL_SPEAKER_SIDE,
    WEDDING_CROWD,
    YELLOW_TAPED_GRILL
} from '../../../../../../app/constants/scene/things/cutouts'
import { ALL_PEOPLE__SHARED } from '../../../../../../app/constants/scene/sharedStyles/actors'
import { WEDDING__SHARED } from '../../../../../../app/constants/scene/sharedStyles/buildings'
import {
    CUP__SHARED,
    DISH__SHARED,
    TRAY__SHARED
} from '../../../../../../app/constants/scene/sharedStyles/dishroom'
import {
    BANANA__SHARED,
    CIGARETTE__SHARED,
    GARBAGE_BAG__SHARED,
    PAPER_BAG__SHARED
} from '../../../../../../app/constants/scene/sharedStyles/food'
import {
    BULB__SHARED,
    FRIDGE__SHARED
} from '../../../../../../app/constants/scene/sharedStyles/household'
import { MONITOR__SHARED } from '../../../../../../app/constants/scene/sharedStyles/instruments'
import {
    LAMPPOST__SHARED,
    FOLIAGE__SHARED,
    FREEWAY_SIGN__SHARED,
    POLE__SHARED,
    ROCK__SHARED,
    TAIWAN_FOLIAGE__SHARED,
    TRASH_CAN__SHARED
} from '../../../../../../app/constants/scene/sharedStyles/outdoor'
import { NEWSPAPER__SHARED } from '../../../../../../app/constants/scene/sharedStyles/paper'
import { BUDDHA_SHRINE__SHARED } from '../../../../../../app/constants/scene/sharedStyles/taiwan'
import { ALL_VEHICLES__SHARED } from '../../../../../../app/constants/scene/sharedStyles/vehicles'

export default {
    [APARTMENT_PLANT]: FOLIAGE__SHARED,
    [ASH_CAN]: CIGARETTE__SHARED,
    [BANCROFT_SHRUB]: FOLIAGE__SHARED,
    [BUDDHA_SHRINE]: BUDDHA_SHRINE__SHARED,
    [BUSH_DOUBLE]: FOLIAGE__SHARED,
    [BUSH_SINGLE]: FOLIAGE__SHARED,
    [CACTUS_DOUBLE]: FOLIAGE__SHARED,
    [CACTUS_SINGLE]: FOLIAGE__SHARED,
    [CAMPFIRE]: [
        FOLIAGE__SHARED,
        ROCK__SHARED
    ],
    [CAMPUS_TREE_DOUBLE]: FOLIAGE__SHARED,
    [CAMPUS_TREE_SINGLE]: FOLIAGE__SHARED,
    [CAVEMAN_BONES]: POLE__SHARED,
    [CLIFF_TREE]: FOLIAGE__SHARED,
    [CYPRESS_TREE]: FOLIAGE__SHARED,
    [DISHROOM_DOLLY]: ALL_VEHICLES__SHARED,
    [DISH_PILE]: DISH__SHARED,
    [DISPENSER_LEFT]: NEWSPAPER__SHARED,
    [DISPENSER_RIGHT]: [
        NEWSPAPER__SHARED,
        ALL_PEOPLE__SHARED
    ],
    [DUMPSTER]: [
        ALL_VEHICLES__SHARED,
        GARBAGE_BAG__SHARED
    ],
    [EL_CERRITO_TREE]: FOLIAGE__SHARED,
    [FIRE_HYDRANT]: null,
    [GLASS_RACK]: CUP__SHARED,
    [GRAVESTONE]: null,
    [HOWIE_FRIDGE]: FRIDGE__SHARED,
    [IV_DRIP]: POLE__SHARED,
    [LAMPPOST]: [
        BULB__SHARED,
        LAMPPOST__SHARED,
        POLE__SHARED
    ],
    [LOCKER_BANK]: null,
    [MIRRORED_SINK]: ALL_PEOPLE__SHARED,
    [MONITOR_FRONT]: MONITOR__SHARED,
    [MONITOR_SIDE]: MONITOR__SHARED,
    [MUSEUM_DISPLAY]: null,
    [OVERPASS_SIGN_BACK]: FREEWAY_SIGN__SHARED,
    [PHARMACY_AISLE]: null,
    [PLAYGROUND_SLIDE]: null,
    [RECYCLABLES]: null,
    [SANDBAGS]: null,
    [SHOPPING_CART]: GARBAGE_BAG__SHARED,
    [SIGNPOST]: POLE__SHARED,
    [STAGE_LIGHTS]: null,
    [STEAM_PIPES]: null,
    [STORAGE_BOXES]: null,
    [STORAGE_CHEST]: null,
    [TAIWAN_FRIDGE]: FRIDGE__SHARED,
    [TAIWAN_TREE]: TAIWAN_FOLIAGE__SHARED,
    [TELEVISION]: null,
    [TOWEL_RACK]: null,
    [TRAFFIC_LIGHT]: POLE__SHARED,
    [TRASH_CAN]: [
        BANANA__SHARED,
        GARBAGE_BAG__SHARED,
        PAPER_BAG__SHARED,
        TRASH_CAN__SHARED
    ],
    [TRAY_PILE]: TRAY__SHARED,
    [TWIN_STREETLAMP]: [
        BULB__SHARED,
        LAMPPOST__SHARED,
        POLE__SHARED
    ],
    [UCLA_TREE]: FOLIAGE__SHARED,
    [WAITING_ROOM_PLANT]: FOLIAGE__SHARED,
    [WALL_SPEAKER_FRONT]: MONITOR__SHARED,
    [WALL_SPEAKER_SIDE]: MONITOR__SHARED,
    [WEDDING_CROWD]: [
        FOLIAGE__SHARED,
        WEDDING__SHARED
    ],
    [YELLOW_TAPED_GRILL]: POLE__SHARED
}
