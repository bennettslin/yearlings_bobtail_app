import {
    BUBBLE,
    CARDBOARD
} from '../../../constants/scene'
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
import { POSTER_GLADIATOR_SHARED } from '../../shared'

const ARRANGEMENTS_THINGS = {
    [BUBBLE]: {
        [BUBBLE_SMALL__CINEMA]: {
            yIndex: 5,
            arrangement: {
                xPosition: 8.5,
                xWidth: 4,
                zHeight: 3,
                zOffset: 4
            }
        },
        [BUBBLE_MEDIUM__CINEMA]: {
            yIndex: 5,
            arrangement: {
                xPosition: 8.5,
                xWidth: 4,
                zHeight: 3,
                zOffset: 4
            }
        },
        [BUBBLE_LARGE__CINEMA]: {
            yIndex: 5,
            arrangement: {
                xPosition: 8.5,
                xWidth: 4,
                zHeight: 3,
                zOffset: 4
            }
        },
        [CINEMA_THOUGHT_RECORDING]: {
            yIndex: 5,
            arrangement: {
                xPosition: 8.5,
                xWidth: 4,
                zHeight: 3,
                zOffset: 4
            }
        },
        [CINEMA_THOUGHT_BUYING]: {
            yIndex: 5,
            arrangement: {
                xPosition: 8.5,
                xWidth: 4,
                zHeight: 3,
                zOffset: 4
            }
        }
    },
    [CARDBOARD]: {
        [GLADIATOR_POSTER]: {
            yIndex: 4,
            xPosition: 1,
            zOffset: 2,
            noShadow: true,
            scaleFactor: 0.25,
            sharedStyle: POSTER_GLADIATOR_SHARED
        },
        [MARQUEE_FRAME__GLADIATOR]: {
            yIndex: 4,
            xPosition: 1,
            zOffset: 1.7,
            scaleFactor: 0.36
        }
    }
}

export default ARRANGEMENTS_THINGS
