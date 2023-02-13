import {
    BUBBLE,
    CARDBOARD,
} from '../../../../../src/constants/scene/things'
import {
    BUBBLE_SMALL__CINEMA,
    BUBBLE_MEDIUM__CINEMA,
    BUBBLE_LARGE__CINEMA,
    CINEMA_THOUGHT_RECORDING,
    CINEMA_THOUGHT_BUYING,
} from '../../../../../src/constants/scene/things/bubbles'
import {
    POSTER_GLADIATOR,
    MARQUEE_FRAME__GLADIATOR,
} from '../../../../../src/constants/scene/things/cardboards'
import {
    BUBBLE_LARGE_CONFIG,
    BUBBLE_MEDIUM_CONFIG,
    BUBBLE_SMALL_CONFIG,
} from '../../sharedConfigs'

export default {
    [BUBBLE]: {
        [BUBBLE_LARGE__CINEMA]: {
            ...BUBBLE_LARGE_CONFIG,
            xPosition: 5.35,
            zOffset: 5.6,
        },
        [BUBBLE_MEDIUM__CINEMA]: {
            ...BUBBLE_MEDIUM_CONFIG,
            xPosition: 4.67,
            zOffset: 5.42,
        },
        [BUBBLE_SMALL__CINEMA]: {
            ...BUBBLE_SMALL_CONFIG,
            xPosition: 4.7,
            zOffset: 5.15,
        },
        [CINEMA_THOUGHT_BUYING]: {
            yIndex: 5,
            xPosition: 9.4,
            zOffset: 1.25,
        },
        [CINEMA_THOUGHT_RECORDING]: {
            yIndex: 5,
            xPosition: 8.1,
            zOffset: 4.2,
        },
    },
    [CARDBOARD]: {
        [POSTER_GLADIATOR]: {
            yIndex: 4,
            xPosition: 1,
            zOffset: 2,
            noShadow: true,
        },
        [MARQUEE_FRAME__GLADIATOR]: {
            yIndex: 4,
            xPosition: 1,
            zOffset: 1.7,
        },
    },
}
