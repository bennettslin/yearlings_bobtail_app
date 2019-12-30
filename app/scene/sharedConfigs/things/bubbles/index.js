import {
    APART_SKETCH,
    BUBBLE_LARGE,
    BUBBLE_MEDIUM,
    BUBBLE_SMALL,
    CINEMA_THOUGHT_BUYING,
    CINEMA_THOUGHT_RECORDING,
    DOGS_SKETCH,
    ESCAPE_POD_SKETCH,
    ESTHER_SPEECH,
    GO_KART_THOUGHT,
    KHARI_ATTACK_SPEECH,
    LIZ_DEFENCE_SPEECH,
    LIZ_THOUGHT,
    PHARMACY_CEL,
    SIBLING_CONSTELLATION,
    SKETCHBOOK,
    TARPIT_CONSTELLATION,
    THOUGHT_LARGE,
    THOUGHT_MEDIUM,
    THOUGHT_SMALL,
    TOGETHER_SKETCH,
    WAITING_THOUGHT_SINGING,
    WAITING_THOUGHT_STUDYING,
    WAITING_THOUGHT_WALKING
} from '../../../../constants/scene/things/bubbles'

import {
    AMY,
    BENNETT,
    LIZ,
    MARA
} from '../../../../constants/scene/actors'
import { ALL_PEOPLE__SHARED } from '../../../sharedStyles/people'
import { BUBBLE__SHARED } from '../../../sharedStyles/props'
import {
    ACOUSTIC_GUITAR__SHARED,
    BANJO__SHARED,
    HEADPHONE__SHARED,
    MICROPHONE__SHARED,
    MONITOR__SHARED
} from '../../../sharedStyles/instruments'
import {
    FOLIAGE__SHARED,
    MOUNTAIN__SHARED
} from '../../../sharedStyles/outdoor'
import {
    BOOK__SHARED,
    SKETCHBOOK__SHARED
} from '../../../sharedStyles/paper'
import {
    SKETCH_DOGS__SHARED,
    SKETCH_PEOPLE__SHARED
} from '../../../sharedStyles/sketch'

export default {
    [APART_SKETCH]: SKETCH_PEOPLE__SHARED,
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
        ALL_PEOPLE__SHARED
    ],
    [DOGS_SKETCH]: SKETCH_DOGS__SHARED,
    [ESCAPE_POD_SKETCH]: SKETCH_DOGS__SHARED,
    [ESTHER_SPEECH]: null,
    [GO_KART_THOUGHT]: FOLIAGE__SHARED,
    [KHARI_ATTACK_SPEECH]: [
        BENNETT,
        LIZ,
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
        ALL_PEOPLE__SHARED
    ],
    [LIZ_THOUGHT]: [
        BENNETT,
        LIZ,
        ALL_PEOPLE__SHARED,
        FOLIAGE__SHARED
    ],
    [PHARMACY_CEL]: null,
    [SIBLING_CONSTELLATION]: SKETCH_PEOPLE__SHARED,
    [SKETCHBOOK]: [
        BOOK__SHARED,
        SKETCHBOOK__SHARED
    ],
    [TARPIT_CONSTELLATION]: null,
    [THOUGHT_LARGE]: BUBBLE__SHARED,
    [THOUGHT_MEDIUM]: BUBBLE__SHARED,
    [THOUGHT_SMALL]: BUBBLE__SHARED,
    [TOGETHER_SKETCH]: SKETCH_PEOPLE__SHARED,
    [WAITING_THOUGHT_SINGING]: [
        BANJO__SHARED,
        BENNETT,
        LIZ,
        ALL_PEOPLE__SHARED
    ],
    [WAITING_THOUGHT_STUDYING]: [
        BENNETT,
        LIZ,
        ALL_PEOPLE__SHARED
    ],
    [WAITING_THOUGHT_WALKING]: [
        BENNETT,
        LIZ,
        ALL_PEOPLE__SHARED,
        FOLIAGE__SHARED,
        MOUNTAIN__SHARED
    ]
}
