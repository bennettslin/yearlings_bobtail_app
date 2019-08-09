import {
    BACKDROP,
    BUBBLE,
    CUTOUT,
    DOOR,
    FIXTURE,
    FLAT
} from 'constants/scene'
import { SCHOOL_BACKDROP } from 'constants/scene/things/backdrops'
import { ESTHER_SPEECH } from 'constants/scene/things/bubbles'
import { PLAYGROUND_SLIDE } from 'constants/scene/things/cutouts'
import { NURSE_DOOR } from 'constants/scene/things/doors'
import {
    PLAYGROUND_BALL,
    SAFEWAY_BAG
} from 'constants/scene/things/fixtures'
import { NOHO_SCHOOLHOUSE } from 'constants/scene/things/flats'
import { DOOR_SHARED } from '../../shared'

const ARRANGEMENTS_THINGS = {
    [BACKDROP]: {
        [SCHOOL_BACKDROP]: {
            yIndex: 0,
            xPosition: 5.5,
            scaleFactor: 0.66,
            trimBottom: 0.05
        }
    },
    [BUBBLE]: {
        [ESTHER_SPEECH]: {
            yIndex: 2,
            xPosition: 8.5,
            scaleFactor: 0.5
        }
    },
    [CUTOUT]: {
        [PLAYGROUND_SLIDE]: {
            yIndex: 2,
            xPosition: 1,
            scaleFactor: 0.3
        }
    },
    [DOOR]: {
        [NURSE_DOOR]: {
            yIndex: 3,
            xPosition: 8,
            scaleFactor: 0.45,
            sharedStyle: DOOR_SHARED
        }
    },
    [FIXTURE]: {
        [PLAYGROUND_BALL]: {
            yIndex: 4,
            arrangement: {
                xPosition: 2,
                xWidth: 1,
                zHeight: 1,
                zOffset: 1
            }
        },
        [SAFEWAY_BAG]: {
            yIndex: 4,
            arrangement: {
                xPosition: 10,
                xWidth: 1,
                zHeight: 1
            }
        }
    },
    [FLAT]: {
        [NOHO_SCHOOLHOUSE]: {
            yIndex: 1,
            xPosition: 2.5,
            scaleFactor: 0.65
        }
    }
}

export default ARRANGEMENTS_THINGS
