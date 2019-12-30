import {
    DOOR,
    FIXTURE
} from '../../../constants/scene/things'
import { BASEMENT_DOOR } from '../../../constants/scene/things/doors'
import { CRACKED_PICTURE } from '../../../constants/scene/things/fixtures'

const ARRANGEMENTS_THINGS = {
    [DOOR]: {
        [BASEMENT_DOOR]: {
            yIndex: 2,
            xPosition: 2.5,
            scaleFactor: 0.6
        }
    },
    [FIXTURE]: {
        [CRACKED_PICTURE]: {
            yIndex: 3,
            xPosition: 0.5,
            zOffset: 4
        }
    }
}

export default ARRANGEMENTS_THINGS
