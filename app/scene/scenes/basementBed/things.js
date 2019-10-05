import {
    DOOR,
    FIXTURE
} from '../../../constants/scene'
import { BASEMENT_DOOR } from '../../../constants/scene/things/doors'
import { CRACKED_PICTURE } from '../../../constants/scene/things/fixtures'
import { DOOR__SHARED } from '../../shared/home'
import {
    ALL_PEOPLE__SHARED,
    BENNETT__SHARED,
    LIZ__SHARED
} from '../../shared/people'
import { PROMISE_PHOTO__SHARED } from '../../shared/print'

const ARRANGEMENTS_THINGS = {
    [DOOR]: {
        [BASEMENT_DOOR]: {
            yIndex: 2,
            xPosition: 3,
            sharedStyle: DOOR__SHARED
        }
    },
    [FIXTURE]: {
        [CRACKED_PICTURE]: {
            yIndex: 3,
            xPosition: 0.5,
            zOffset: 4,
            sharedStyle: [
                PROMISE_PHOTO__SHARED,
                ALL_PEOPLE__SHARED,
                BENNETT__SHARED,
                LIZ__SHARED
            ]
        }
    }
}

export default ARRANGEMENTS_THINGS
