import {
    DOOR,
    FIXTURE
} from '../../../constants/scene/things'
import { BASEMENT_DOOR } from '../../../constants/scene/things/doors'
import { CRACKED_PICTURE } from '../../../constants/scene/things/fixtures'

export default {
    [DOOR]: {
        [BASEMENT_DOOR]: {
            yIndex: 2,
            xPosition: 2.5,
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
