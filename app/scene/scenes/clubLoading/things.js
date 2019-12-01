import {
    DOOR,
    FIXTURE
} from '../../../constants/scene/things'
import { CLUB_DOOR_OPEN } from '../../../constants/scene/things/doors'
import { DRUMS_STACKED__CLUB } from '../../../constants/scene/things/fixtures'
import { DOOR__SHARED } from '../../shared/home'
import {
    DRUMS__SHARED,
    DRUM_STAND__SHARED,
    DRUM_THRONE__SHARED
} from '../../shared/instruments'

const ARRANGEMENTS_THINGS = {
    [DOOR]: {
        [CLUB_DOOR_OPEN]: {
            yIndex: 3,
            xPosition: 5.25,
            zOffset: -0.07,
            sharedStyle: DOOR__SHARED
        }
    },
    [FIXTURE]: {
        [DRUMS_STACKED__CLUB]: {
            yIndex: 3,
            xPosition: 2.5,
            zOffset: -0.1,
            sharedStyle: [
                DRUMS__SHARED,
                DRUM_STAND__SHARED,
                DRUM_THRONE__SHARED
            ]
        }
    }
}

export default ARRANGEMENTS_THINGS
