import {
    BUBBLE_LARGE,
    BUBBLE_MEDIUM,
    BUBBLE_SMALL,
    CINEMA_THOUGHT_BUYING,
    CINEMA_THOUGHT_RECORDING,
    CONSTELLATION_SIBLING,
    CONSTELLATION_TARPIT,
    ESTHER_SPEECH,
    KHARI_SPEECH_ATTACK,
    LIZ_SPEECH_DEFENCE,
    LIZ_THOUGHT_DINING,
    LIZ_THOUGHT_BUSING,
    LIZ_THOUGHT_DISHROOM,
    LIZ_THOUGHT_REUNION,
    PHARMACY_CEL,
    SKETCHBOOK,
    SKETCH_APART,
    SKETCH_DOGS_ROCKET,
    SKETCH_ESCAPE_POD,
    SKETCH_TOGETHER,
    THOUGHT_AMY,
    THOUGHT_GO_KART,
    THOUGHT_LARGE,
    THOUGHT_MEDIUM,
    THOUGHT_SMALL,
    WAITING_THOUGHT_SINGING,
    WAITING_THOUGHT_STUDYING,
    WAITING_THOUGHT_WALKING
} from '../../../../../../app/constants/scene/things/bubbles'
import {
    AMY,
    ANDREW,
    BENNETT,
    LIZ,
    MARA
} from '../../../../../../app/constants/scene/actors'
import {
    ALL_PEOPLE__SHARED,
    ALL_CLOTHING__SHARED
} from '../../../../../../app/constants/scene/sharedStyles/actors'
import { HOUSE__SHARED } from '../../../../../../app/constants/scene/sharedStyles/buildings'
import {
    CUP__SHARED,
    TRAY__SHARED
} from '../../../../../../app/constants/scene/sharedStyles/cafeteria'
import {
    CONSTELLATION__SHARED,
    DRAWING__SHARED,
    THOUGHT__SHARED
} from '../../../../../../app/constants/scene/sharedStyles/comic'
import {
    BASEMENT_TAKEOUT__SHARED,
    LANCET_PEN__SHARED
} from '../../../../../../app/constants/scene/sharedStyles/food'
import {
    BENNETT_BED__SHARED,
    BENNETT_LINENS__SHARED
} from '../../../../../../app/constants/scene/sharedStyles/furniture'
import {
    DOOR__SHARED,
    WINDOW__SHARED
} from '../../../../../../app/constants/scene/sharedStyles/home'
import {
    ACOUSTIC_GUITAR__SHARED,
    BANJO__SHARED,
    HEADPHONE__SHARED,
    MICROPHONE__SHARED,
    MONITOR__SHARED
} from '../../../../../../app/constants/scene/sharedStyles/instruments'
import {
    IRON__SHARED,
    METAL__SHARED,
    WOOD__SHARED
} from '../../../../../../app/constants/scene/sharedStyles/material'
import {
    CHECKER_FLAG__SHARED,
    FOLIAGE__SHARED,
    MOUNTAIN__SHARED,
    POLE__SHARED,
    ROAD__SHARED,
    SHORE__SHARED
} from '../../../../../../app/constants/scene/sharedStyles/outdoor'
import {
    BOOK__SHARED,
    SKETCHBOOK__SHARED
} from '../../../../../../app/constants/scene/sharedStyles/paper'
import {
    BENNETT_ROOM_SHARED,
    DINING_SHARED,
    BUSING_SHARED,
    DISHROOM_SHARED
} from '../../../../../../app/constants/scene/sharedStyles/room'
import { BUBBLE__SHARED } from '../../../../../../app/constants/scene/sharedStyles/props'
import {
    ALL_VEHICLES__SHARED,
    REATTA__SHARED
} from '../../../../../../app/constants/scene/sharedStyles/vehicles'
import { CAFETERIA__SHARED } from '../../../../../../app/constants/scene/sharedStyles/wardrobe'

export default {
    [BUBBLE_LARGE]: BUBBLE__SHARED,
    [BUBBLE_MEDIUM]: BUBBLE__SHARED,
    [BUBBLE_SMALL]: BUBBLE__SHARED,
    [CINEMA_THOUGHT_BUYING]: [
        MARA,
        ALL_PEOPLE__SHARED,
        THOUGHT__SHARED
    ],
    [CINEMA_THOUGHT_RECORDING]: [
        ACOUSTIC_GUITAR__SHARED,
        HEADPHONE__SHARED,
        MICROPHONE__SHARED,
        BENNETT,
        ALL_CLOTHING__SHARED,
        ALL_PEOPLE__SHARED,
        THOUGHT__SHARED
    ],
    [ESTHER_SPEECH]: BUBBLE__SHARED,
    [KHARI_SPEECH_ATTACK]: [
        BENNETT,
        LIZ,
        ALL_CLOTHING__SHARED,
        ALL_PEOPLE__SHARED,
        THOUGHT__SHARED
    ],
    [LIZ_SPEECH_DEFENCE]: [
        BANJO__SHARED,
        ACOUSTIC_GUITAR__SHARED,
        MICROPHONE__SHARED,
        MONITOR__SHARED,
        AMY,
        BENNETT,
        LIZ,
        ALL_CLOTHING__SHARED,
        ALL_PEOPLE__SHARED,
        THOUGHT__SHARED
    ],
    [LIZ_THOUGHT_DINING]: [
        ANDREW,
        BENNETT,
        LIZ,
        ALL_CLOTHING__SHARED,
        ALL_PEOPLE__SHARED,
        THOUGHT__SHARED,
        BASEMENT_TAKEOUT__SHARED,
        BOOK__SHARED,
        CAFETERIA__SHARED,
        DINING_SHARED,
        CUP__SHARED,
        TRAY__SHARED,
        METAL__SHARED,
        WOOD__SHARED
    ],
    [LIZ_THOUGHT_BUSING]: [
        BENNETT,
        LIZ,
        ALL_CLOTHING__SHARED,
        ALL_PEOPLE__SHARED,
        BOOK__SHARED,
        CAFETERIA__SHARED,
        BUSING_SHARED,
        DISHROOM_SHARED,
        CUP__SHARED,
        TRAY__SHARED,
        METAL__SHARED
    ],
    [LIZ_THOUGHT_DISHROOM]: [
        BENNETT,
        LIZ,
        ALL_CLOTHING__SHARED,
        ALL_PEOPLE__SHARED,
        THOUGHT__SHARED,
        BOOK__SHARED,
        CAFETERIA__SHARED,
        BUSING_SHARED,
        DISHROOM_SHARED,
        LANCET_PEN__SHARED,
        DOOR__SHARED,
        WINDOW__SHARED,
        HOUSE__SHARED,
        IRON__SHARED,
        METAL__SHARED
    ],
    [LIZ_THOUGHT_REUNION]: [
        BENNETT,
        LIZ,
        ALL_CLOTHING__SHARED,
        ALL_PEOPLE__SHARED,
        THOUGHT__SHARED,
        ALL_VEHICLES__SHARED,
        BUBBLE__SHARED,
        FOLIAGE__SHARED,
        REATTA__SHARED,
        ROAD__SHARED
    ],
    [PHARMACY_CEL]: null,
    [CONSTELLATION_SIBLING]: CONSTELLATION__SHARED,
    [CONSTELLATION_TARPIT]: CONSTELLATION__SHARED,
    [SKETCHBOOK]: [
        BOOK__SHARED,
        SKETCHBOOK__SHARED
    ],
    [SKETCH_APART]: DRAWING__SHARED,
    [SKETCH_DOGS_ROCKET]: DRAWING__SHARED,
    [SKETCH_ESCAPE_POD]: DRAWING__SHARED,
    [SKETCH_TOGETHER]: DRAWING__SHARED,
    [THOUGHT_AMY]: [
        BENNETT,
        AMY,
        ALL_PEOPLE__SHARED,
        THOUGHT__SHARED,
        BENNETT_BED__SHARED,
        BENNETT_LINENS__SHARED,
        BENNETT_ROOM_SHARED
    ],
    [THOUGHT_GO_KART]: [
        BUBBLE__SHARED,
        CHECKER_FLAG__SHARED,
        FOLIAGE__SHARED,
        POLE__SHARED
    ],
    [THOUGHT_LARGE]: BUBBLE__SHARED,
    [THOUGHT_MEDIUM]: BUBBLE__SHARED,
    [THOUGHT_SMALL]: BUBBLE__SHARED,
    [WAITING_THOUGHT_SINGING]: [
        BANJO__SHARED,
        BENNETT,
        LIZ,
        ALL_CLOTHING__SHARED,
        ALL_PEOPLE__SHARED,
        THOUGHT__SHARED,
        BENNETT_LINENS__SHARED,
        BENNETT_ROOM_SHARED
    ],
    [WAITING_THOUGHT_STUDYING]: [
        BENNETT,
        LIZ,
        ALL_CLOTHING__SHARED,
        ALL_PEOPLE__SHARED,
        THOUGHT__SHARED,
        BOOK__SHARED,
        METAL__SHARED,
        WOOD__SHARED
    ],
    [WAITING_THOUGHT_WALKING]: [
        BENNETT,
        LIZ,
        ALL_PEOPLE__SHARED,
        THOUGHT__SHARED,
        BUBBLE__SHARED,
        FOLIAGE__SHARED,
        MOUNTAIN__SHARED,
        ROAD__SHARED,
        SHORE__SHARED
    ]
}

