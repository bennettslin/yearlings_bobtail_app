import {
    CUTOUT,
    FIXTURE,
} from '../../../../../app/constants/scene/things'
import {
    SANDBAGS,
    STAGE_LIGHTS,
} from '../../../../../app/constants/scene/things/cutouts'
import {
    PUSH_BROOM__BACKSTAGE,
    STEPLADDER,
    MANNEQUIN,
} from '../../../../../app/constants/scene/things/fixtures'

export default {
    [CUTOUT]: {
        [SANDBAGS]: {
            yIndex: 1,
            xPosition: 2.8,
        },
        [STAGE_LIGHTS]: {
            yIndex: 1,
            xPosition: 3,
            scaleFactor: 0.28,
            zOffset: 4,
        },
    },
    [FIXTURE]: {
        [STEPLADDER]: {
            yIndex: 1,
            xPosition: 5.8,
            scaleFactor: 0.4,
        },
        [MANNEQUIN]: {
            yIndex: 1,
            xPosition: 7.5,
            scaleFactor: 0.35,
        },
        [PUSH_BROOM__BACKSTAGE]: {
            yIndex: 1,
            xPosition: 9.3,
        },
    },
}
