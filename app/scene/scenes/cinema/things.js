import {
    CARDBOARD
} from 'constants/scene'
import {
    MARA_MEMENTO_POSTER,
    MARQUEE_FRAME__MARA_MEMENTO,
    MARA_GLADIATOR_POSTER,
    MARQUEE_FRAME__MARA_GLADIATOR
} from 'constants/scene/things/cardboards'

const ARRANGEMENTS_THINGS = {
    [CARDBOARD]: {
        [MARA_MEMENTO_POSTER]: {
            yIndex: 4,
            xPosition: 1,
            zOffset: 2,
            scaleFactor: 0.25,
            noShadow: true
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
            noShadow: true,
            arrangement: {
                xPosition: 10,
                xWidth: 2.5,
                zHeight: 4,
                zOffset: 2
            }
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
