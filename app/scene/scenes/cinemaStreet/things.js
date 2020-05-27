import {
    BUBBLE,
    CARDBOARD
} from '../../../constants/scene/things'
import {
    BUBBLE_SMALL__CINEMA,
    BUBBLE_MEDIUM__CINEMA,
    BUBBLE_LARGE__CINEMA,
    CINEMA_THOUGHT_RECORDING,
    CINEMA_THOUGHT_BUYING
} from '../../../constants/scene/things/bubbles'
import {
    GLADIATOR_POSTER,
    MARQUEE_FRAME__GLADIATOR
} from '../../../constants/scene/things/cardboards'

export default {
    [BUBBLE]: {
        [BUBBLE_SMALL__CINEMA]: {
            yIndex: 5,
            xPosition: 4.7,
            zOffset: 5.15,
            scaleFactor: 0.3
        },
        [BUBBLE_MEDIUM__CINEMA]: {
            yIndex: 5,
            xPosition: 4.67,
            zOffset: 5.42,
            scaleFactor: 0.3
        },
        [BUBBLE_LARGE__CINEMA]: {
            yIndex: 5,
            xPosition: 5.35,
            zOffset: 5.6,
            scaleFactor: 0.3
        },
        [CINEMA_THOUGHT_BUYING]: {
            yIndex: 5,
            xPosition: 9.3,
            zOffset: 1.2
        },
        [CINEMA_THOUGHT_RECORDING]: {
            yIndex: 5,
            xPosition: 8.1,
            zOffset: 4.2
        }
    },
    [CARDBOARD]: {
        [GLADIATOR_POSTER]: {
            yIndex: 4,
            xPosition: 1,
            zOffset: 2,
            noShadow: true,
            scaleFactor: 0.25
        },
        [MARQUEE_FRAME__GLADIATOR]: {
            yIndex: 4,
            xPosition: 1,
            zOffset: 1.7,
            scaleFactor: 0.36
        }
    }
}
