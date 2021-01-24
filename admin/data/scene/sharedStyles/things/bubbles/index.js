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
    LIZ_THOUGHT_BUSING,
    LIZ_THOUGHT_DINING,
    LIZ_THOUGHT_DISHROOM,
    LIZ_THOUGHT_REUNION,
    SKETCHBOOK,
    SKETCH_APART,
    SKETCH_DOGS_ROCKET,
    SKETCH_ESCAPE_POD,
    SKETCH_TOGETHER,
    THOUGHT_AMY,
    THOUGHT_GO_KART,
    WAITING_THOUGHT_SINGING,
    WAITING_THOUGHT_STUDYING,
    WAITING_THOUGHT_WALKING,
} from '../../../../../../app/constants/scene/things/bubbles'
import {
    AMY,
    ANDREW,
    BENNETT,
    LIZ,
    MARA,
} from '../../../../../../app/constants/scene/actors'
import {
    ALL_PEOPLE__SHARED,
    ALL_CLOTHING__SHARED,
} from '../../../../../../app/constants/scene/sharedStyles/actors'
import { HOUSE__SHARED } from '../../../../../../app/constants/scene/sharedStyles/buildings'
import { TRAY__SHARED } from '../../../../../../app/constants/scene/sharedStyles/cafeteria'
import {
    CONSTELLATION__SHARED,
    DRAWING__SHARED,
    THOUGHT__SHARED,
} from '../../../../../../app/constants/scene/sharedStyles/comic'
import {
    BASEMENT_TAKEOUT__SHARED,
    LANCET_PEN__SHARED,
} from '../../../../../../app/constants/scene/sharedStyles/food'
import { BENNETT_LINENS__SHARED } from '../../../../../../app/constants/scene/sharedStyles/furniture'
import { DOOR__SHARED } from '../../../../../../app/constants/scene/sharedStyles/home'
import {
    ACOUSTIC_GUITAR__SHARED,
    BANJO__SHARED,
    HEADPHONE__SHARED,
    MICROPHONE__SHARED,
    MONITOR__SHARED,
} from '../../../../../../app/constants/scene/sharedStyles/instruments'
import {
    FOLIAGE__SHARED,
    MOUNTAIN__SHARED,
} from '../../../../../../app/constants/scene/sharedStyles/outdoor'
import {
    BOOK__SHARED,
} from '../../../../../../app/constants/scene/sharedStyles/paper'
import {
    BENNETT_ROOM_SHARED,
    DINING_SHARED,
    BUSING_SHARED,
    DISHROOM_SHARED,
} from '../../../../../../app/constants/scene/sharedStyles/room'
import {
    ALL_VEHICLES__SHARED,
    REATTA__SHARED,
} from '../../../../../../app/constants/scene/sharedStyles/vehicles'
import { CAFETERIA__SHARED } from '../../../../../../app/constants/scene/sharedStyles/wardrobe'

export default {
    [BUBBLE_LARGE]: null,
    [BUBBLE_MEDIUM]: null,
    [BUBBLE_SMALL]: null,
    [CINEMA_THOUGHT_BUYING]: [
        MARA,
        ALL_PEOPLE__SHARED,
        THOUGHT__SHARED,
    ],
    [CINEMA_THOUGHT_RECORDING]: [
        BOOK__SHARED,
        ACOUSTIC_GUITAR__SHARED,
        HEADPHONE__SHARED,
        MICROPHONE__SHARED,
        BENNETT,
        ALL_CLOTHING__SHARED,
        ALL_PEOPLE__SHARED,
        THOUGHT__SHARED,
    ],
    [ESTHER_SPEECH]: null,
    [KHARI_SPEECH_ATTACK]: [
        BENNETT,
        LIZ,
        ALL_CLOTHING__SHARED,
        ALL_PEOPLE__SHARED,
        THOUGHT__SHARED,
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
        THOUGHT__SHARED,
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
        TRAY__SHARED,
    ],
    [LIZ_THOUGHT_BUSING]: [
        BENNETT,
        LIZ,
        ALL_CLOTHING__SHARED,
        ALL_PEOPLE__SHARED,
        BOOK__SHARED,
        BUSING_SHARED,
        CAFETERIA__SHARED,
        DISHROOM_SHARED,
        TRAY__SHARED,
    ],
    [LIZ_THOUGHT_DISHROOM]: [
        BENNETT,
        LIZ,
        ALL_CLOTHING__SHARED,
        ALL_PEOPLE__SHARED,
        BOOK__SHARED,
        BUSING_SHARED,
        CAFETERIA__SHARED,
        DISHROOM_SHARED,
        DOOR__SHARED,
        HOUSE__SHARED,
        LANCET_PEN__SHARED,
        THOUGHT__SHARED,
    ],
    [LIZ_THOUGHT_REUNION]: [
        BENNETT,
        LIZ,
        ALL_CLOTHING__SHARED,
        ALL_PEOPLE__SHARED,
        THOUGHT__SHARED,
        ALL_VEHICLES__SHARED,
        FOLIAGE__SHARED,
        REATTA__SHARED,
    ],
    [CONSTELLATION_SIBLING]: CONSTELLATION__SHARED,
    [CONSTELLATION_TARPIT]: CONSTELLATION__SHARED,
    [SKETCHBOOK]: BOOK__SHARED,
    [SKETCH_APART]: DRAWING__SHARED,
    [SKETCH_DOGS_ROCKET]: DRAWING__SHARED,
    [SKETCH_ESCAPE_POD]: DRAWING__SHARED,
    [SKETCH_TOGETHER]: DRAWING__SHARED,
    [THOUGHT_AMY]: [
        AMY,
        BENNETT,
        ALL_PEOPLE__SHARED,
        BENNETT_LINENS__SHARED,
        BENNETT_ROOM_SHARED,
        THOUGHT__SHARED,
    ],
    [THOUGHT_GO_KART]: FOLIAGE__SHARED,
    [WAITING_THOUGHT_SINGING]: [
        BENNETT,
        LIZ,
        ALL_CLOTHING__SHARED,
        ALL_PEOPLE__SHARED,
        BANJO__SHARED,
        BENNETT_LINENS__SHARED,
        BENNETT_ROOM_SHARED,
        THOUGHT__SHARED,
    ],
    [WAITING_THOUGHT_STUDYING]: [
        BENNETT,
        LIZ,
        ALL_CLOTHING__SHARED,
        ALL_PEOPLE__SHARED,
        THOUGHT__SHARED,
        BOOK__SHARED,
    ],
    [WAITING_THOUGHT_WALKING]: [
        BENNETT,
        LIZ,
        ALL_PEOPLE__SHARED,
        THOUGHT__SHARED,
        FOLIAGE__SHARED,
        MOUNTAIN__SHARED,
    ],
}

