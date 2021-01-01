import {
    BUBBLE,
    CUTOUT,
    DOOR,
    FIXTURE,
    FLAT,
    PANEL,
} from '../../../../../app/constants/scene/things'
import { ESTHER_SPEECH } from '../../../../../app/constants/scene/things/bubbles'
import { PLAYGROUND_SLIDE } from '../../../../../app/constants/scene/things/cutouts'
import { NURSE_DOOR } from '../../../../../app/constants/scene/things/doors'
import {
    PLAYGROUND_BALL,
    SAFEWAY_BAG,
} from '../../../../../app/constants/scene/things/fixtures'
import { NEAR_BUILDINGS } from '../../../../../app/constants/scene/things/flats'
import { NURSE_BENCH } from '../../../../../app/constants/scene/things/panels'

export default {
    [BUBBLE]: {
        [ESTHER_SPEECH]: {
            yIndex: 3,
            xPosition: 8.2,
            scaleFactor: 0.45,
        },
    },
    [CUTOUT]: {
        [PLAYGROUND_SLIDE]: {
            yIndex: 2,
            xPosition: 1,
            scaleFactor: 0.3,
        },
    },
    [DOOR]: {
        [NURSE_DOOR]: {
            yIndex: 3,
            xPosition: 8,
            scaleFactor: 0.4,
            layerYIndex: 4,
        },
    },
    [FIXTURE]: {
        [PLAYGROUND_BALL]: {
            yIndex: 4,
            xPosition: 1.5,
            scaleFactor: 0.25,
            zOffset: 1,
        },
        [SAFEWAY_BAG]: {
            yIndex: 5,
            xPosition: 9.8,
            scaleFactor: 0.25,
        },
    },
    [FLAT]: {
        [NEAR_BUILDINGS]: {
            scaleFactor: 0.66,
            trimBottom: 0.05,
        },
    },
    [PANEL]: {
        [NURSE_BENCH]: {
            yIndex: 5,
            xPosition: 9.88,
            zOffset: 0.08,
        },
    },
}
