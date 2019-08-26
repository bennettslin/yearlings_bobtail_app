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
import {
    BUBBLE__SHARED,
    POSTER_GLADIATOR__SHARED
} from '../../shared'
import {
    MICROPHONE__SHARED
} from '../../shared/instruments'
import {
    PEOPLE_ALL__SHARED,
    PEOPLE_BENNETT__SHARED,
    PEOPLE_INSTRUMENT__SHARED,
    PEOPLE_MARA__SHARED
} from '../../shared/people'

const ARRANGEMENTS_THINGS = {
    [BUBBLE]: {
        [BUBBLE_SMALL__CINEMA]: {
            yIndex: 5,
            xPosition: 4.5,
            zOffset: 5.1,
            scaleFactor: 0.4,
            sharedStyle: BUBBLE__SHARED
        },
        [BUBBLE_MEDIUM__CINEMA]: {
            yIndex: 5,
            xPosition: 4.75,
            zOffset: 5.3,
            scaleFactor: 0.4,
            sharedStyle: BUBBLE__SHARED
        },
        [BUBBLE_LARGE__CINEMA]: {
            yIndex: 5,
            xPosition: 5.5,
            zOffset: 5.5,
            scaleFactor: 0.4,
            sharedStyle: BUBBLE__SHARED
        },
        [CINEMA_THOUGHT_RECORDING]: {
            yIndex: 5,
            xPosition: 8.3,
            zOffset: 4.1,
            scaleFactor: 0.45,
            sharedStyle: [
                MICROPHONE__SHARED,
                PEOPLE_BENNETT__SHARED,
                PEOPLE_INSTRUMENT__SHARED,
                PEOPLE_ALL__SHARED
            ]
        },
        [CINEMA_THOUGHT_BUYING]: {
            yIndex: 5,
            xPosition: 9.25,
            zOffset: 1,
            scaleFactor: 0.45,
            sharedStyle: [
                PEOPLE_MARA__SHARED,
                PEOPLE_ALL__SHARED
            ]
        }
    },
    [CARDBOARD]: {
        [GLADIATOR_POSTER]: {
            yIndex: 4,
            xPosition: 1,
            zOffset: 2,
            noShadow: true,
            scaleFactor: 0.25,
            sharedStyle: [
                POSTER_GLADIATOR__SHARED,
                PEOPLE_ALL__SHARED
            ]
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
