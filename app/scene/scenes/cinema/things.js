import {
    CARDBOARD,
    DOOR
} from '../../../constants/scene'
import {
    MARA_MEMENTO_POSTER,
    MARQUEE_FRAME__MARA_MEMENTO,
    MARA_GLADIATOR_POSTER,
    MARQUEE_FRAME__MARA_GLADIATOR
} from '../../../constants/scene/things/cardboards'
import { CINEMA_DOORS } from '../../../constants/scene/things/doors'
import {
    DOOR_SHARED,
    POSTER_GLADIATOR_SHARED
} from '../../shared'
import {
    PEOPLE_ALL_SHARED,
    PEOPLE_MARA_SHARED
} from '../../shared/people'

const ARRANGEMENTS_THINGS = {
    [CARDBOARD]: {
        [MARA_MEMENTO_POSTER]: {
            yIndex: 4,
            xPosition: 1,
            zOffset: 2,
            noShadow: true,
            scaleFactor: 0.25,
            sharedStyle: [
                PEOPLE_ALL_SHARED,
                PEOPLE_MARA_SHARED
            ]
        },
        [MARQUEE_FRAME__MARA_MEMENTO]: {
            yIndex: 4,
            xPosition: 1,
            zOffset: 1.7,
            scaleFactor: 0.36
        },
        [MARA_GLADIATOR_POSTER]: {
            yIndex: 4,
            xPosition: 10,
            zOffset: 2,
            noShadow: true,
            scaleFactor: 0.25,
            sharedStyle: [
                POSTER_GLADIATOR_SHARED,
                PEOPLE_ALL_SHARED,
                PEOPLE_MARA_SHARED
            ]
        },
        [MARQUEE_FRAME__MARA_GLADIATOR]: {
            yIndex: 4,
            xPosition: 10,
            zOffset: 1.7,
            scaleFactor: 0.36
        }
    },
    [DOOR]: {
        [CINEMA_DOORS]: {
            yIndex: 2,
            xPosition: 5.5,
            scaleFactor: 0.675,
            sharedStyle: DOOR_SHARED
        }
    }
}

export default ARRANGEMENTS_THINGS
