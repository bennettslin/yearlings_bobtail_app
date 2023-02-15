import {
    BACKDROP,
    BUBBLE,
    CARDBOARD,
    PUPPET,
} from '../../../../../src/constants/scene/things'
import { DREAM_BUOY } from '../../../../../src/constants/scene/things/backdrops'
import {
    CINEMA_THOUGHT_BUYING,
    CINEMA_THOUGHT_RECORDING,
    THOUGHT_GO_KART,
    THOUGHT_AMY,
    LIZ_THOUGHT_DINING,
    LIZ_THOUGHT_BUSING,
    LIZ_THOUGHT_DISHROOM,
    KHARI_SPEECH_ATTACK,
    LIZ_SPEECH_DEFENCE,
    LIZ_THOUGHT_REUNION,
    SKETCHBOOK,
    WAITING_THOUGHT_SINGING,
    WAITING_THOUGHT_STUDYING,
    WAITING_THOUGHT_WALKING,
} from '../../../../../src/constants/scene/things/bubbles'
import {
    SEA_SERPENT_LEFT,
    SEA_SERPENT_RIGHT,
    BENNETT_ODIN_BUOY,
    EARTH,
    DOGS_ROCKET,
    DOGS_SPACE_STATION,
} from '../../../../../src/constants/scene/things/cardboards'
import {
    GHOST_ODIN_ALLEY,
    GHOST_ODIN_CAMPUS,
    GHOST_ODIN_CLUB,
    GHOST_ODIN_DEMONSTRATION,
    OPAL_COUCH,
    OPAL_GAZING,
    PEACOCK,
    PEAHEN,
    PUPPET_ANITA_BEGIN,
    PUPPET_ANITA_END,
    PUPPET_ANITA_MIDDLE,
    PUPPET_BENNETT_BEGIN,
    PUPPET_BENNETT_END,
    PUPPET_BENNETT_MIDDLE,
    PUPPET_CHRISTOPHER_BEGIN,
    PUPPET_CHRISTOPHER_END,
    PUPPET_CHRISTOPHER_MIDDLE,
    PUPPET_FATHER_BEGIN,
    PUPPET_FATHER_END,
    PUPPET_FATHER_MIDDLE,
    PUPPET_KHARI_LIZ,
    PUPPET_MOTHER_BEGIN,
    PUPPET_MOTHER_END,
    PUPPET_MOTHER_MIDDLE,
    PUPPET_REATTA,
} from '../../../../../src/constants/scene/things/puppets'

const BUBBLE_DEFAULT = {
    wires: [
        { x: 0.25, y: 0.5 },
        { x: 0.75, y: 0.5 },
    ],
}

const OPAL_COUCH_CONFIG = {
    wires: [
        { x: 0.37, y: 0.18 },
        { x: 0.62, y: 0.45 },
    ],
    placedFront: true,
}

export default {
    [BACKDROP]: {
        [DREAM_BUOY]: BUBBLE_DEFAULT,
    },
    [BUBBLE]: {
        [SKETCHBOOK]: BUBBLE_DEFAULT,
        [CINEMA_THOUGHT_BUYING]: BUBBLE_DEFAULT,
        [CINEMA_THOUGHT_RECORDING]: BUBBLE_DEFAULT,
        [THOUGHT_GO_KART]: BUBBLE_DEFAULT,
        [WAITING_THOUGHT_SINGING]: BUBBLE_DEFAULT,
        [WAITING_THOUGHT_STUDYING]: BUBBLE_DEFAULT,
        [WAITING_THOUGHT_WALKING]: BUBBLE_DEFAULT,
        [THOUGHT_AMY]: BUBBLE_DEFAULT,
        [LIZ_THOUGHT_DINING]: BUBBLE_DEFAULT,
        [LIZ_THOUGHT_BUSING]: BUBBLE_DEFAULT,
        [LIZ_THOUGHT_DISHROOM]: BUBBLE_DEFAULT,
        [KHARI_SPEECH_ATTACK]: BUBBLE_DEFAULT,
        [LIZ_SPEECH_DEFENCE]: BUBBLE_DEFAULT,
        [LIZ_THOUGHT_REUNION]: BUBBLE_DEFAULT,
    },
    [CARDBOARD]: {
        [BENNETT_ODIN_BUOY]: {
            wires: [
                { x: 0.57, y: 0.5 },
                { x: 0.7 },
            ],
        },
        [SEA_SERPENT_RIGHT]: {
            wires: [
                { x: 0.32, y: 0.9 },
                { x: 0.69, y: 0.6 },
            ],
        },
        [SEA_SERPENT_LEFT]: {
            wires: [
                { x: 0.29, y: 0.5 },
                { x: 0.55, y: 0.13 },
            ],
        },
        [SEA_SERPENT_RIGHT]: {
            wires: [
                { x: 0.32, y: 0.9 },
                { x: 0.69, y: 0.6 },
            ],
        },
        [EARTH]: {},
        [DOGS_ROCKET]: {
            wires: [
                { x: 0.2 },
                { x: 0.42, y: 0.5 },
                { x: 0.69 },
            ],
        },
        [DOGS_SPACE_STATION]: {
            wires: [
                { x: 0.275, y: 0.28 },
                { x: 0.85, y: 0.28 },
            ],
            placedFront: true,
        },
    },
    [PUPPET]: {
        [PUPPET_ANITA_BEGIN]: { x: 0.55 },
        [PUPPET_BENNETT_BEGIN]: { x: 0.4 },
        [PUPPET_CHRISTOPHER_BEGIN]: {},
        [PUPPET_FATHER_BEGIN]: { x: 0.4 },
        [PUPPET_MOTHER_BEGIN]: { x: 0.7 },
        [PUPPET_ANITA_MIDDLE]: { x: 0.45 },
        [PUPPET_BENNETT_MIDDLE]: { x: 0.55 },
        [PUPPET_CHRISTOPHER_MIDDLE]: { x: 0.55 },
        [PUPPET_FATHER_MIDDLE]: { x: 0.45 },
        [PUPPET_MOTHER_MIDDLE]: {},
        [PUPPET_ANITA_END]: {},
        [PUPPET_BENNETT_END]: {},
        [PUPPET_CHRISTOPHER_END]: {},
        [PUPPET_FATHER_END]: {},
        [PUPPET_MOTHER_END]: { x: 0.4 },
        [OPAL_COUCH]: OPAL_COUCH_CONFIG,
        [OPAL_GAZING]: {
            wires: [
                { x: 0.35, y: 0.1 },
                { x: 0.73, y: 0.47 },
            ],
            placedFront: true,
        },
        [PEACOCK]: {
            wires: [
                { x: 0.38, y: 0.35 },
                { x: 0.44, y: 0.48 },
            ],
            placedFront: true,
        },
        [PEAHEN]: {
            wires: [
                { x: 0.58, y: 0.4 },
                { x: 0.85 },
            ],
        },
        [PUPPET_REATTA]: {
            wires: [
                { x: 0.2, y: 0.25 },
                { x: 0.8, y: 0.45 },
            ],
            placedFront: true,
        },
        [GHOST_ODIN_CAMPUS]: {
            wires: [
                { x: 0.54, y: 0.37 },
                { x: 0.85, y: 0.12 },
            ],
            placedFront: true,
        },
        [GHOST_ODIN_CLUB]: {
            wires: [
                { x: 0.38, y: 0.55 },
                { x: 0.53, y: 0.09 },
            ],
            placedFront: true,
        },
        [GHOST_ODIN_ALLEY]: {
            wires: [
                { x: 0.42, y: 0.08 },
                { x: 0.68, y: 0.46 },
            ],
            placedFront: true,
        },
        [GHOST_ODIN_DEMONSTRATION]: {
            wires: [
                { x: 0.54, y: 0.33 },
                { x: 0.84, y: 0.11 },
            ],
            placedFront: true,
        },
        [PUPPET_KHARI_LIZ]: {
            wires: [
                { x: 0.3, y: 0.25 },
                { x: 0.8 },
            ],
        },
    },
}
