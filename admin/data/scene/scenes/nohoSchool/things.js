import {
    BUBBLE,
    CUTOUT,
    DOOR,
    FIXTURE
} from '../../../../../app/constants/scene/things'
import { ESTHER_SPEECH } from '../../../../../app/constants/scene/things/bubbles'
import { PLAYGROUND_SLIDE } from '../../../../../app/constants/scene/things/cutouts'
import { NURSE_DOOR } from '../../../../../app/constants/scene/things/doors'
import {
    PLAYGROUND_BALL,
    SAFEWAY_BAG
} from '../../../../../app/constants/scene/things/fixtures'

export default {
    [BUBBLE]: {
        [ESTHER_SPEECH]: {
            yIndex: 3,
            xPosition: 8.2,
            scaleFactor: 0.45
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
            scaleFactor: 0.4,
            layerYIndex: 4
        }
    },
    [FIXTURE]: {
        [PLAYGROUND_BALL]: {
            yIndex: 4,
            xPosition: 1.5,
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