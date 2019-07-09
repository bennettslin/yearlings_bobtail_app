import {
    BUBBLE,
    CARDBOARD
} from 'constants/scene'
import { CINEMA_THOUGHTS } from 'constants/scene/things/bubbles'
import {
    GLADIATOR_POSTER,
    MARQUEE_FRAME__GLADIATOR
} from 'constants/scene/things/cardboards'

const ARRANGEMENTS_THINGS = {
    [BUBBLE]: {
        [CINEMA_THOUGHTS]: {
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
            noShadow: true,
            arrangement: {
                xPosition: 1,
                xWidth: 2.5,
                zHeight: 4,
                zOffset: 2
            }
        },
        [MARQUEE_FRAME__GLADIATOR]: {
            yIndex: 4,
            arrangement: {
                xPosition: 1,
                xWidth: 2.5,
                zHeight: 4,
                zOffset: 2
            }
        }
    }
}

export default ARRANGEMENTS_THINGS
