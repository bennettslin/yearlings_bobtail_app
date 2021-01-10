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
            xPosition: 2.8,
            zOffset: 3.5,
        },
    },
    [FIXTURE]: {
        [STEPLADDER]: {
            yIndex: 1,
            xPosition: 6,
        },
        [MANNEQUIN]: {
            yIndex: 1,
            xPosition: 7.5,
        },
        [PUSH_BROOM__BACKSTAGE]: {
            yIndex: 1,
            xPosition: 9,
        },
    },
}
