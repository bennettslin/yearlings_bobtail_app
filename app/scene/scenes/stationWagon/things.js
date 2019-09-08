import {
    BUBBLE,
    FIXTURE,
    PANEL
} from '../../../constants/scene'
import {
    TARPIT_CONSTELLATION,
    SIBLING_CONSTELLATION
} from '../../../constants/scene/things/bubbles'
import { EVIAN_BOTTLES } from '../../../constants/scene/things/fixtures'
import {
    SATURN_INTERIOR,
    SATURN_EXTERIOR,
    SATURN_SEAT__LEFT,
    SATURN_SEAT__RIGHT
} from '../../../constants/scene/things/panels'
import { INTERIOR__SHARED } from '../../shared'
import { EVIAN__SHARED } from '../../shared/food'

const ARRANGEMENTS_THINGS = {
    [BUBBLE]: {
        [TARPIT_CONSTELLATION]: {
            yIndex: 5,
            xPosition: 3,
            zOffset: 4.5,
            scaleFactor: 0.4
        },
        [SIBLING_CONSTELLATION]: {
            yIndex: 1,
            xPosition: 9,
            zOffset: 4.5,
            scaleFactor: 0.4
        }
    },
    [FIXTURE]: {
        [EVIAN_BOTTLES]: {
            yIndex: 3,
            xPosition: 1.5,
            scaleFactor: 0.3,
            sharedStyle: EVIAN__SHARED
        }
    },
    [PANEL]: {
        [SATURN_INTERIOR]: {
            yIndex: 1,
            xPosition: 5.5,
            scaleFactor: 0.5,
            sharedStyle: INTERIOR__SHARED
        },
        [SATURN_SEAT__LEFT]: {
            yIndex: 4,
            xPosition: 3,
            zOffset: 0.75,
            scaleFactor: 0.4
        },
        [SATURN_SEAT__RIGHT]: {
            yIndex: 4,
            xPosition: 6,
            zOffset: 0.75,
            scaleFactor: 0.4
        },
        [SATURN_EXTERIOR]: {
            yIndex: 4,
            xPosition: 5.5,
            scaleFactor: 0.5
        }
    }
}

export default ARRANGEMENTS_THINGS
