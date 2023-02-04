import {
    CUTOUT,
    FIXTURE,
} from '../../../../../src/constants/scene/things'
import {
    SANDBAGS,
    STAGE_LIGHTS,
} from '../../../../../src/constants/scene/things/cutouts'
import { MANNEQUIN } from '../../../../../src/constants/scene/things/fixtures'

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
        [MANNEQUIN]: {
            yIndex: 1,
            xPosition: 7.5,
        },
    },
}
