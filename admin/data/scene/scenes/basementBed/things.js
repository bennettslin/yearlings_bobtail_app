import {
    CUTOUT,
    DOOR,
    FIXTURE
} from '../../../../../app/constants/scene/things'
import {
    PEACH_TREE,
    ROSEBUSH_DOUBLE_BASEMENT,
    ROSEBUSH_SINGLE_BASEMENT
} from '../../../../../app/constants/scene/things/cutouts'
import { BASEMENT_DOOR } from '../../../../../app/constants/scene/things/doors'
import { CRACKED_PICTURE } from '../../../../../app/constants/scene/things/fixtures'

export default {
    [CUTOUT]: {
        [PEACH_TREE]: {
            yIndex: 0,
            xPosition: 4.5,
            scaleFactor: 0.7
        },
        [ROSEBUSH_DOUBLE_BASEMENT]: {
            yIndex: 0,
            xPosition: 9.5,
            scaleFactor: 0.3
        },
        [ROSEBUSH_SINGLE_BASEMENT]: {
            yIndex: 0,
            xPosition: 0.5,
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
            zOffset: 2.7
        }
    }
}
