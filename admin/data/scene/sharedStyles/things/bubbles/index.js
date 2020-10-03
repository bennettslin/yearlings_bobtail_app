import {
    SKETCH_APART,
    BUBBLE_LARGE,
    BUBBLE_MEDIUM,
    BUBBLE_SMALL,
    CINEMA_THOUGHT_BUYING,
    CINEMA_THOUGHT_RECORDING,
    CONSTELLATION_SIBLING,
    CONSTELLATION_TARPIT,
    SKETCH_DOGS_ROCKET,
    SKETCH_ESCAPE_POD,
    ESTHER_SPEECH,
    GO_KART_THOUGHT,
    KHARI_ATTACK_SPEECH,
    LIZ_DEFENCE_SPEECH,
    LIZ_THOUGHT,
    PHARMACY_CEL,
    SKETCHBOOK,
    THOUGHT_LARGE,
    THOUGHT_MEDIUM,
    THOUGHT_SMALL,
    SKETCH_TOGETHER,
    WAITING_THOUGHT_SINGING,
    WAITING_THOUGHT_STUDYING,
    WAITING_THOUGHT_WALKING
} from '../../../../../../app/constants/scene/things/bubbles'
import {
    AMY,
    BENNETT,
    LIZ,
    MARA
} from '../../../../../../app/constants/scene/actors'
import {
    ALL_PEOPLE__SHARED,
    ALL_CLOTHING__SHARED
} from '../../../../../../app/constants/scene/sharedStyles/actors'
import { BUBBLE__SHARED } from '../../../../../../app/constants/scene/sharedStyles/props'
import {
    ACOUSTIC_GUITAR__SHARED,
    BANJO__SHARED,
    HEADPHONE__SHARED,
    MICROPHONE__SHARED,
    MONITOR__SHARED
} from '../../../../../../app/constants/scene/sharedStyles/instruments'
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
    CONSTELLATION__SHARED,
    DRAWING__SHARED
} from '../../../../../../app/constants/scene/sharedStyles/sketch'
import {
    ALL_VEHICLES__SHARED,
    REATTA__SHARED
} from '../../../../../../app/constants/scene/sharedStyles/vehicles'

export default {
    [SKETCH_APART]: DRAWING__SHARED,
    [BUBBLE_LARGE]: BUBBLE__SHARED,
    [BUBBLE_MEDIUM]: BUBBLE__SHARED,
    [BUBBLE_SMALL]: BUBBLE__SHARED,
    [CINEMA_THOUGHT_BUYING]: [
        MARA,
        ALL_PEOPLE__SHARED
    ],
    [CINEMA_THOUGHT_RECORDING]: [
        ACOUSTIC_GUITAR__SHARED,
        HEADPHONE__SHARED,
        MICROPHONE__SHARED,
        BENNETT,
        ALL_CLOTHING__SHARED,
        ALL_PEOPLE__SHARED
    ],
    [SKETCH_DOGS_ROCKET]: DRAWING__SHARED,
    [SKETCH_ESCAPE_POD]: DRAWING__SHARED,
    [ESTHER_SPEECH]: BUBBLE__SHARED,
    [GO_KART_THOUGHT]: [
        BUBBLE__SHARED,
        CHECKER_FLAG__SHARED,
        FOLIAGE__SHARED,
        POLE__SHARED
    ],
    [KHARI_ATTACK_SPEECH]: [
        BENNETT,
        LIZ,
        ALL_CLOTHING__SHARED,
        ALL_PEOPLE__SHARED
    ],
    [LIZ_DEFENCE_SPEECH]: [
        BANJO__SHARED,
        ACOUSTIC_GUITAR__SHARED,
        MICROPHONE__SHARED,
        MONITOR__SHARED,
        AMY,
        BENNETT,
        LIZ,
        ALL_CLOTHING__SHARED,
        ALL_PEOPLE__SHARED
    ],
    [LIZ_THOUGHT]: [
        BENNETT,
        LIZ,
        ALL_CLOTHING__SHARED,
        ALL_PEOPLE__SHARED,
        ALL_VEHICLES__SHARED,
        BUBBLE__SHARED,
        FOLIAGE__SHARED,
        REATTA__SHARED,
        ROAD__SHARED
    ],
    [PHARMACY_CEL]: null,
    [CONSTELLATION_SIBLING]: CONSTELLATION__SHARED,
    [SKETCHBOOK]: [
        BOOK__SHARED,
        SKETCHBOOK__SHARED
    ],
    [CONSTELLATION_TARPIT]: CONSTELLATION__SHARED,
    [THOUGHT_LARGE]: BUBBLE__SHARED,
    [THOUGHT_MEDIUM]: BUBBLE__SHARED,
    [THOUGHT_SMALL]: BUBBLE__SHARED,
    [SKETCH_TOGETHER]: DRAWING__SHARED,
    [WAITING_THOUGHT_SINGING]: [
        BANJO__SHARED,
        BENNETT,
        LIZ,
        ALL_CLOTHING__SHARED,
        ALL_PEOPLE__SHARED
    ],
    [WAITING_THOUGHT_STUDYING]: [
        BENNETT,
        LIZ,
        ALL_CLOTHING__SHARED,
        ALL_PEOPLE__SHARED
    ],
    [WAITING_THOUGHT_WALKING]: [
        BENNETT,
        LIZ,
        ALL_PEOPLE__SHARED,
        BUBBLE__SHARED,
        FOLIAGE__SHARED,
        MOUNTAIN__SHARED,
        ROAD__SHARED,
        SHORE__SHARED
    ]
}

