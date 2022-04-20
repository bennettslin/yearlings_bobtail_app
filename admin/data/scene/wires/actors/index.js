import {
    LIZ,
    BENNETT,
    BENNETT_FATHER,
    ESTHER_MOTHER,
    FATHER,
    MOTHER,
    PRETEEN_BENNETT,
    SASHA_BENNETT,
} from '../../../../../src/constants/scene/actors'
import {
    HURT_CONSOLING,
    SOBBING_SHIELDING,
} from '../../../../../src/constants/scene/actors/estherMother'
import {
    ACCUSATORY,
    REELING,
} from '../../../../../src/constants/scene/actors/father'
import {
    PETTING_SEATED,
    PETTING_SEATED_PRESENT,
    PETTING_STANDING,
} from '../../../../../src/constants/scene/actors/liz'
import { BUOY } from '../../../../../src/constants/scene/actors/preteenBennett'
import { MERMAID } from '../../../../../src/constants/scene/actors/sashaBennett'
import {
    PAST,
    PRESENT,
    FUTURE,
} from '../../../../../src/constants/scene/actors/songs'

const PETTING_SEATED_CONFIG = {
    wires: [
        { x: 0.55, y: 0.5 },
    ],
    placedFront: true,
}

export default {
    [PRETEEN_BENNETT]: {
        [BUOY]: {
            wires: [
                { x: 0.4 },
                { x: 0.81 },
            ],
        },
    },
    [SASHA_BENNETT]: {
        [MERMAID]: {
            wires: [
                { x: 0.35, y: 0.4 },
                { x: 0.52, y: 0.3 },
                { x: 0.54, y: 0.6 },
                { x: 0.7, y: 0.4 },
            ],
        },
    },
    [LIZ]: {
        [PETTING_SEATED]: PETTING_SEATED_CONFIG,
        [PETTING_SEATED_PRESENT]: PETTING_SEATED_CONFIG,
        [PETTING_STANDING]: {
            wires: [
                { x: 0.66, y: 0.44 },
                { x: 0.79, y: 0.46 },
            ],
            placedFront: true,
        },
    },
    [BENNETT]: {
        [PAST]: {
            wires: [
                { x: 0.25, y: 0.2 },
                { x: 0.4, y: 0.4 },
            ],
        },
        [FUTURE]: {
            wires: [
                { x: 0.55, y: 0.2 },
                { x: 0.6, y: 0.5 },
            ],
        },
    },
    [BENNETT_FATHER]: {
        [PRESENT]: {
            wires: [
                { x: 0.29, y: 0.2 },
                { x: 0.61, y: 0.4 },
                { x: 0.69, y: 0.2 },
            ],
        },
    },
    [ESTHER_MOTHER]: {
        [HURT_CONSOLING]: {
            wires: [
                { x: 0.2, y: 0.5 },
                { x: 0.3, y: 0.3 },
                { x: 0.55, y: 0.4 },
            ],
        },
        [SOBBING_SHIELDING]: {
            wires: [
                { x: 0.48, y: 0.5 },
                { x: 0.55, y: 0.3 },
                { x: 0.6, y: 0.5 },
            ],
        },
    },
    [FATHER]: {
        [ACCUSATORY]: {
            wires: [
                { x: 0.25, y: 0.4 },
                { x: 0.45, y: 0.2 },
            ],
        },
        [PAST]: {
            wires: [
                { x: 0.35, y: 0.4 },
                { x: 0.4, y: 0.3 },
            ],
        },
        [FUTURE]: {
            wires: [
                { x: 0.4, y: 0.5 },
                { x: 0.45, y: 0.3 },
            ],
        },
        [REELING]: {
            wires: [
                { x: 0.22, y: 0.5 },
                { x: 0.24, y: 0.3 },
            ],
        },
    },
    [MOTHER]: {
        [PRESENT]: {
            wires: [
                { x: 0.5, y: 0.3 },
                { x: 0.65, y: 0.5 },
            ],
        },
        [FUTURE]: {
            wires: [
                { x: 0.3, y: 0.5 },
                { x: 0.5, y: 0.4 },
            ],
        },
    },
}
