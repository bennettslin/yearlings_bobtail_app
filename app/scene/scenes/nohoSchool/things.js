import {
    BUBBLE,
    CUTOUT,
    DOOR,
    FIXTURE
} from '../../../constants/scene/things'
import { ESTHER_SPEECH } from '../../../constants/scene/things/bubbles'
import { PLAYGROUND_SLIDE } from '../../../constants/scene/things/cutouts'
import { NURSE_DOOR } from '../../../constants/scene/things/doors'
import {
    PLAYGROUND_BALL,
    SAFEWAY_BAG
} from '../../../constants/scene/things/fixtures'

export default {
    [BUBBLE]: {
        [ESTHER_SPEECH]: {
            yIndex: 1,
            xPosition: 8.75,
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
            yIndex: 2,
            xPosition: 8,
            scaleFactor: 0.45
        }
    },
    [FIXTURE]: {
        [PLAYGROUND_BALL]: {
            yIndex: 4,
            xPosition: 2,
            scaleFactor: 0.25,
            zOffset: 1
        },
        [SAFEWAY_BAG]: {
            yIndex: 5,
            xPosition: 10,
            scaleFactor: 0.25
        }
    }
}
