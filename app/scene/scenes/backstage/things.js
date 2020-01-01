import {
    CUTOUT,
    FIXTURE
} from '../../../constants/scene/things'
import {
    SANDBAGS,
    STAGE_LIGHTS
} from '../../../constants/scene/things/cutouts'
import {
    PUSH_BROOM__BACKSTAGE,
    STEPLADDER,
    MANNEQUIN
} from '../../../constants/scene/things/fixtures'

export default {
    [CUTOUT]: {
        [SANDBAGS]: {
            yIndex: 1,
            xPosition: 3,
            scaleFactor: 0.3
        },
        [STAGE_LIGHTS]: {
            yIndex: 1,
            xPosition: 3,
            scaleFactor: 0.25,
            zOffset: 4
        }
    },
    [FIXTURE]: {
        [PUSH_BROOM__BACKSTAGE]: {
            yIndex: 2,
            xPosition: 6
        },
        [STEPLADDER]: {
            yIndex: 2,
            xPosition: 7.75,
            scaleFactor: 0.4
        },
        [MANNEQUIN]: {
            yIndex: 2,
            xPosition: 9.5,
            scaleFactor: 0.35
        }
    }
}
