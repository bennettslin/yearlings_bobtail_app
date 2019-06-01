import {
    BACKDROPS,
    BUBBLES,
    FIXTURES,
    PANELS
} from 'constants/scene'
import { STATION_WAGON_BACKDROP } from '../../keys/backdrops'
import {
    TARPIT_THOUGHT,
    SIBLING_THOUGHT
} from '../../keys/bubbles'
import { EVIAN_BOTTLES } from '../../keys/fixtures'
import {
    SATURN_INTERIOR,
    SATURN_EXTERIOR
} from '../../keys/panels'

const ARRANGEMENTS_THINGS = {
    [BACKDROPS]: {
        [STATION_WAGON_BACKDROP]: {
            yIndex: 0,
            arrangement: {
                xPosition: 5.5,
                xWidth: 12,
                zHeight: 4
            }
        }
    },
    [BUBBLES]: {
        [TARPIT_THOUGHT]: {
            yIndex: 5,
            arrangement: {
                xPosition: 3,
                xWidth: 4,
                zHeight: 3,
                zOffset: 4.5
            }
        },
        [SIBLING_THOUGHT]: {
            yIndex: 5,
            arrangement: {
                xPosition: 8,
                xWidth: 4,
                zHeight: 3,
                zOffset: 4.5
            }
        }
    },
    [FIXTURES]: {
        [EVIAN_BOTTLES]: {
            yIndex: 3,
            arrangement: {
                xPosition: 1.5,
                xWidth: 1,
                zHeight: 1
            }
        }
    },
    [PANELS]: {
        [SATURN_INTERIOR]: {
            yIndex: 1,
            arrangement: {
                xPosition: 5.5,
                xWidth: 10,
                zHeight: 5
            }
        },
        [SATURN_EXTERIOR]: {
            yIndex: 4,
            arrangement: {
                xPosition: 5.5,
                xWidth: 10,
                zHeight: 5
            }
        }
    }
}

export default ARRANGEMENTS_THINGS
