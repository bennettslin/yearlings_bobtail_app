import {
    BACKDROP,
    BUBBLE,
    CUTOUT,
    DOOR,
    FIXTURE
} from '../../../constants/scene/things'
import { SCHOOL_BACKDROP } from '../../../constants/scene/things/backdrops'
import { ESTHER_SPEECH } from '../../../constants/scene/things/bubbles'
import { PLAYGROUND_SLIDE } from '../../../constants/scene/things/cutouts'
import { NURSE_DOOR } from '../../../constants/scene/things/doors'
import {
    PLAYGROUND_BALL,
    SAFEWAY_BAG
} from '../../../constants/scene/things/fixtures'
import { PAPER_BAG__SHARED } from '../../shared/food'
import { DOOR__SHARED } from '../../shared/home'

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
            sharedStyle: DOOR__SHARED
        }
    },
    [FIXTURE]: {
        [PLAYGROUND_BALL]: {
            yIndex: 4,
            xPosition: 2,
            zOffset: 1
        },
        [SAFEWAY_BAG]: {
            yIndex: 4,
            xPosition: 10,
            sharedStyle: PAPER_BAG__SHARED
        }
    }
}

export default ARRANGEMENTS_THINGS
