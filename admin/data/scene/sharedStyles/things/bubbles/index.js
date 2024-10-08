import {
    BUBBLE_LARGE,
    BUBBLE_MEDIUM,
    BUBBLE_SMALL,
    CINEMA_THOUGHT_BUYING,
    CINEMA_THOUGHT_RECORDING,
    CONSTELLATION_SIBLING,
    CONSTELLATION_TARPIT,
    KHARI_SPEECH_ATTACK,
    LIZ_SPEECH_DEFENCE,
    LIZ_THOUGHT_BUSING,
    LIZ_THOUGHT_DINING,
    LIZ_THOUGHT_DISHROOM,
    LIZ_THOUGHT_REUNION,
    PHOTO_ALBUM,
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
} from '../../../../../../src/constants/scene/things/bubbles'
import {
    AMY,
    ANDREW,
    BENNETT,
    LIZ,
    MARA,
} from '../../../../../../src/constants/scene/actors'
import {
    ALL_PEOPLE__SHARED,
    ALL_CLOTHING__SHARED,
} from '../../../../../../src/constants/scene/sharedStyles/actors'
import { HOUSE__SHARED } from '../../../../../../src/constants/scene/sharedStyles/buildings'
import {
    CONSTELLATION__SHARED,
    DRAWING__SHARED,
} from '../../../../../../src/constants/scene/sharedStyles/comic'
import {
    BASEMENT_TAKEOUT__SHARED,
    LANCET_PEN__SHARED,
} from '../../../../../../src/constants/scene/sharedStyles/food'
import { BENNETT_LINENS__SHARED } from '../../../../../../src/constants/scene/sharedStyles/furniture'
import { DOOR__SHARED } from '../../../../../../src/constants/scene/sharedStyles/home'
import {
    ACOUSTIC_GUITAR__SHARED,
    BANJO__SHARED,
    HEADPHONE__SHARED,
    MICROPHONE__SHARED,
} from '../../../../../../src/constants/scene/sharedStyles/instruments'
import {
    FOLIAGE__SHARED,
    MOUNTAIN__SHARED,
} from '../../../../../../src/constants/scene/sharedStyles/outdoor'
import {
    BENNETT_ROOM_SHARED,
    DINING_SHARED,
    BUSING_SHARED,
    DISHROOM_SHARED,
} from '../../../../../../src/constants/scene/sharedStyles/room'
import {
    ALL_VEHICLES__SHARED,
    REATTA__SHARED,
} from '../../../../../../src/constants/scene/sharedStyles/vehicles'
import { CAFETERIA__SHARED } from '../../../../../../src/constants/scene/sharedStyles/wardrobe'

export default {
    [BUBBLE_LARGE]: null,
    [BUBBLE_MEDIUM]: null,
    [BUBBLE_SMALL]: null,
    [CINEMA_THOUGHT_BUYING]: [
        MARA,
        ALL_PEOPLE__SHARED,
    ],
    [CINEMA_THOUGHT_RECORDING]: [
        ACOUSTIC_GUITAR__SHARED,
        HEADPHONE__SHARED,
        MICROPHONE__SHARED,
        BENNETT,
        ALL_CLOTHING__SHARED,
        ALL_PEOPLE__SHARED,
    ],
    [CONSTELLATION_SIBLING]: CONSTELLATION__SHARED,
    [CONSTELLATION_TARPIT]: CONSTELLATION__SHARED,
    [KHARI_SPEECH_ATTACK]: [
        BENNETT,
        LIZ,
        ALL_CLOTHING__SHARED,
        ALL_PEOPLE__SHARED,
    ],
    [LIZ_SPEECH_DEFENCE]: [
        BANJO__SHARED,
        ACOUSTIC_GUITAR__SHARED,
        MICROPHONE__SHARED,
        AMY,
        BENNETT,
        LIZ,
        ALL_CLOTHING__SHARED,
        ALL_PEOPLE__SHARED,
    ],
    [LIZ_THOUGHT_DINING]: [
        ANDREW,
        BENNETT,
        LIZ,
        ALL_CLOTHING__SHARED,
        ALL_PEOPLE__SHARED,
        BASEMENT_TAKEOUT__SHARED,
        CAFETERIA__SHARED,
        DINING_SHARED,
    ],
    [LIZ_THOUGHT_BUSING]: [
        BENNETT,
        LIZ,
        ALL_CLOTHING__SHARED,
        ALL_PEOPLE__SHARED,
        BUSING_SHARED,
        CAFETERIA__SHARED,
        DISHROOM_SHARED,
        LANCET_PEN__SHARED,
    ],
    [LIZ_THOUGHT_DISHROOM]: [
        BENNETT,
        LIZ,
        ALL_CLOTHING__SHARED,
        ALL_PEOPLE__SHARED,
        BUSING_SHARED,
        CAFETERIA__SHARED,
        DISHROOM_SHARED,
        DOOR__SHARED,
        HOUSE__SHARED,
        LANCET_PEN__SHARED,
    ],
    [LIZ_THOUGHT_REUNION]: [
        BENNETT,
        LIZ,
        ALL_CLOTHING__SHARED,
        ALL_PEOPLE__SHARED,
        ALL_VEHICLES__SHARED,
        FOLIAGE__SHARED,
        REATTA__SHARED,
    ],
    [PHOTO_ALBUM]: null,
    [SKETCHBOOK]: null,
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
    ],
    [WAITING_THOUGHT_STUDYING]: [
        BENNETT,
        LIZ,
        ALL_CLOTHING__SHARED,
        ALL_PEOPLE__SHARED,
    ],
    [WAITING_THOUGHT_WALKING]: [
        BENNETT,
        LIZ,
        ALL_PEOPLE__SHARED,
        FOLIAGE__SHARED,
        MOUNTAIN__SHARED,
    ],
}

