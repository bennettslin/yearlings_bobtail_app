import {
    DOOR,
    FIXTURE
} from 'constants/scene'
import { CLUB_DOOR_OPEN } from 'constants/scene/things/doors'
import { DRUMS_STACKED__CLUB } from 'constants/scene/things/fixtures'
import { DOOR_SHARED } from '../../shared'

const ARRANGEMENTS_THINGS = {
    [DOOR]: {
        [CLUB_DOOR_OPEN]: {
            yIndex: 3,
            xPosition: 5,
            scaleFactor: 0.7,
            sharedStyle: DOOR_SHARED
        }
    },
    [FIXTURE]: {
        [DRUMS_STACKED__CLUB]: {
            yIndex: 3,
            arrangement: {
                xPosition: 2.5,
                xWidth: 1.5,
                zHeight: 5
            }
        }
    }
}

export default ARRANGEMENTS_THINGS
