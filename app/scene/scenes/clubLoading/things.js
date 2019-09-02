import {
    DOOR,
    FIXTURE
} from '../../../constants/scene'
import { CLUB_DOOR_OPEN } from '../../../constants/scene/things/doors'
import { DRUMS_STACKED__CLUB } from '../../../constants/scene/things/fixtures'
import { DOOR__SHARED } from '../../shared'
import { DRUMS__SHARED } from '../../shared/instruments'

const ARRANGEMENTS_THINGS = {
    [DOOR]: {
        [CLUB_DOOR_OPEN]: {
            yIndex: 3,
            xPosition: 5,
            sharedStyle: DOOR__SHARED
        }
    },
    [FIXTURE]: {
        [DRUMS_STACKED__CLUB]: {
            yIndex: 3,
            xPosition: 2.5,
            zOffset: -0.1,
            sharedStyle: DRUMS__SHARED
        }
    }
}

export default ARRANGEMENTS_THINGS
