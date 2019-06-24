import {
    BACKDROP,
    BUBBLE,
    FIXTURE,
    PANEL
} from 'constants/scene'
import { STATION_WAGON_BACKDROP } from 'constants/scene/things/backdrops'
import {
    TARPIT_THOUGHT,
    SIBLING_THOUGHT
} from 'constants/scene/things/bubbles'
import { EVIAN_BOTTLES } from 'constants/scene/things/fixtures'
import {
    SATURN_INTERIOR,
    SATURN_EXTERIOR
} from 'constants/scene/things/panels'

const ARRANGEMENTS_THINGS = {
    [BACKDROP]: {
        [STATION_WAGON_BACKDROP]: {
            yIndex: 0,
            arrangement: {
                xPosition: 5.5,
                xWidth: 12,
                zHeight: 4
            }
        }
    },
    [BUBBLE]: {
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
    [FIXTURE]: {
        [EVIAN_BOTTLES]: {
            yIndex: 3,
            arrangement: {
                xPosition: 1.5,
                xWidth: 1,
                zHeight: 1
            }
        }
    },
    [PANEL]: {
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
