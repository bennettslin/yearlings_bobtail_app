import {
    DOOR,
    FIXTURE
} from '../../../constants/scene/things'
import { CLUB_DOOR_OPEN } from '../../../constants/scene/things/doors'
import { DRUMS_STACKED__CLUB } from '../../../constants/scene/things/fixtures'

export default {
    [DOOR]: {
        [CLUB_DOOR_OPEN]: {
            yIndex: 3,
            xPosition: 5.25,
            zOffset: -0.07
        }
    },
    [FIXTURE]: {
        [DRUMS_STACKED__CLUB]: {
            yIndex: 3,
            xPosition: 2.5,
            zOffset: -0.1
        }
    }
}
