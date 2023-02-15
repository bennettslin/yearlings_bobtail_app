import {
    BACKDROP,
    CUTOUT,
    DOOR,
    FIXTURE,
    FLAT,
    PANEL,
} from '../../../../../src/constants/scene/things'
import { ESTHER_SPEECH } from '../../../../../src/constants/scene/things/backdrops'
import { PLAYGROUND_SLIDE } from '../../../../../src/constants/scene/things/cutouts'
import { NURSE_DOOR } from '../../../../../src/constants/scene/things/doors'
import {
    PLAYGROUND_BALL,
    SAFEWAY_BAG,
} from '../../../../../src/constants/scene/things/fixtures'
import { NEAR_BUILDINGS } from '../../../../../src/constants/scene/things/flats'
import { NURSE_BENCH } from '../../../../../src/constants/scene/things/panels'

export default {
    [BACKDROP]: {
        [ESTHER_SPEECH]: {
            yIndex: 3,
            xPosition: 8.2,
        },
    },
    [CUTOUT]: {
        [PLAYGROUND_SLIDE]: {
            yIndex: 2,
            xPosition: 1,
        },
    },
    [DOOR]: {
        [NURSE_DOOR]: {
            yIndex: 3,
            xPosition: 8,
            layerYIndex: 4,
        },
    },
    [FIXTURE]: {
        [PLAYGROUND_BALL]: {
            yIndex: 4,
            xPosition: 1.5,
            zOffset: 1,
        },
        [SAFEWAY_BAG]: {
            yIndex: 5,
            xPosition: 10,
        },
    },
    [FLAT]: {
        [NEAR_BUILDINGS]: {},
    },
    [PANEL]: {
        [NURSE_BENCH]: {
            yIndex: 5,
            xPosition: 9.88,
            zOffset: 0.08,
        },
    },
}
