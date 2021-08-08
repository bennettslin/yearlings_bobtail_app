import {
    CARDBOARD,
    DOOR,
} from '../../../../../src/constants/scene/things'
import {
    POSTER_MARA_MEMENTO,
    MARQUEE_FRAME__MARA_MEMENTO,
    POSTER_MARA_GLADIATOR,
    MARQUEE_FRAME__MARA_GLADIATOR,
} from '../../../../../src/constants/scene/things/cardboards'
import { CINEMA_DOORS } from '../../../../../src/constants/scene/things/doors'

export default {
    [CARDBOARD]: {
        [POSTER_MARA_MEMENTO]: {
            yIndex: 4,
            xPosition: 1,
            zOffset: 2,
            noShadow: true,
        },
        [MARQUEE_FRAME__MARA_MEMENTO]: {
            yIndex: 4,
            xPosition: 1,
            zOffset: 1.7,
        },
        [POSTER_MARA_GLADIATOR]: {
            yIndex: 4,
            xPosition: 10,
            zOffset: 2,
            noShadow: true,
        },
        [MARQUEE_FRAME__MARA_GLADIATOR]: {
            yIndex: 4,
            xPosition: 10,
            zOffset: 1.7,
        },
    },
    [DOOR]: {
        [CINEMA_DOORS]: {
            yIndex: 2,
        },
    },
}
