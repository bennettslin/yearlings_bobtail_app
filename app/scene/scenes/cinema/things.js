import {
    CARDBOARD
} from 'constants/scene'
import {
    MARA_MEMENTO_POSTER,
    MARQUEE_FRAME__MARA_MEMENTO,
    MARA_GLADIATOR_POSTER,
    MARQUEE_FRAME__MARA_GLADIATOR
} from 'constants/scene/things/cardboards'
import {
    POSTER_GLADIATOR_SHARED,
    POSTER_MARA_SHARED
} from '../../shared'

const ARRANGEMENTS_THINGS = {
    [CARDBOARD]: {
        [MARA_MEMENTO_POSTER]: {
            yIndex: 4,
            xPosition: 1,
            zOffset: 2,
            noShadow: true,
            scaleFactor: 0.25,
            sharedStyle: POSTER_MARA_SHARED
        },
        [MARQUEE_FRAME__MARA_MEMENTO]: {
            yIndex: 4,
            arrangement: {
                xPosition: 1,
                xWidth: 2.5,
                zHeight: 4,
                zOffset: 2
            }
        },
        [MARA_GLADIATOR_POSTER]: {
            yIndex: 4,
            xPosition: 10,
            zOffset: 2,
            noShadow: true,
            scaleFactor: 0.25,
            sharedStyle: [
                POSTER_GLADIATOR_SHARED,
                POSTER_MARA_SHARED
            ]
        },
        [MARQUEE_FRAME__MARA_GLADIATOR]: {
            yIndex: 4,
            arrangement: {
                xPosition: 10,
                xWidth: 2.5,
                zHeight: 4,
                zOffset: 2
            }
        }
    }
}

export default ARRANGEMENTS_THINGS
