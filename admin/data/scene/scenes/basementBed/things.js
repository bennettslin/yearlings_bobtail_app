import {
    CUTOUT,
    DOOR,
    FIXTURE
} from '../../../../../app/constants/scene/things'
import {
    STINK_PLANT__BASEMENT,
    ROSEBUSH_DOUBLE_BASEMENT,
    ROSEBUSH_SINGLE_BASEMENT
} from '../../../../../app/constants/scene/things/cutouts'
import { BASEMENT_DOOR } from '../../../../../app/constants/scene/things/doors'
import { CRACKED_PICTURE } from '../../../../../app/constants/scene/things/fixtures'

export default {
    [CUTOUT]: {
        [STINK_PLANT__BASEMENT]: {
            yIndex: 1,
            xPosition: 5,
            scaleFactor: 0.5
        },
        [ROSEBUSH_DOUBLE_BASEMENT]: {
            yIndex: 1,
            xPosition: 0.5,
            scaleFactor: 0.3
        },
        [ROSEBUSH_SINGLE_BASEMENT]: {
            yIndex: 1,
            xPosition: 10.5,
            scaleFactor: 0.3
        }
    },
    [DOOR]: {
        [BASEMENT_DOOR]: {
            yIndex: 2,
            xPosition: 2.5,
            zOffset: 0.5,
            scaleFactor: 0.6
        }
    },
    [FIXTURE]: {
        [CRACKED_PICTURE]: {
            yIndex: 4,
            xPosition: 0.2,
            zOffset: 3.7
        }
    }
}
