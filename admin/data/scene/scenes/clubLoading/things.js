import {
    DOOR,
    FIXTURE
} from '../../../../../app/constants/scene/things'
import { CLUB_DOOR_OPEN } from '../../../../../app/constants/scene/things/doors'
import { DRUMS_STACKED__CLUB } from '../../../../../app/constants/scene/things/fixtures'

export default {
    [DOOR]: {
        [CLUB_DOOR_OPEN]: {
            yIndex: 2,
            xPosition: 5.25,
            zOffset: -0.07
        }
    },
    [FIXTURE]: {
        [DRUMS_STACKED__CLUB]: {
            yIndex: 2,
            xPosition: 1.6
        }
    }
}
