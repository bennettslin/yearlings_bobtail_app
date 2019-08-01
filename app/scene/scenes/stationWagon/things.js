import {
    BUBBLE,
    FIXTURE,
    PANEL
} from 'constants/scene'
import {
    TARPIT_CONSTELLATION,
    SIBLING_CONSTELLATION
} from 'constants/scene/things/bubbles'
import { EVIAN_BOTTLES } from 'constants/scene/things/fixtures'
import {
    SATURN_INTERIOR,
    SATURN_EXTERIOR
} from 'constants/scene/things/panels'
import { INTERIOR_SHARED } from '../../shared'

const ARRANGEMENTS_THINGS = {
    [BUBBLE]: {
        [TARPIT_CONSTELLATION]: {
            yIndex: 5,
            arrangement: {
                xPosition: 3,
                xWidth: 4,
                zHeight: 3,
                zOffset: 4.5
            }
        },
        [SIBLING_CONSTELLATION]: {
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
            xPosition: 5.5,
            scaleFactor: 0.5,
            sharedStyle: INTERIOR_SHARED
        },
        [SATURN_EXTERIOR]: {
            yIndex: 4,
            xPosition: 5.5,
            scaleFactor: 0.5
        }
    }
}

export default ARRANGEMENTS_THINGS
