import { FIXTURE } from '../../../constants/scene'
import { CRACKED_PICTURE } from '../../../constants/scene/things/fixtures'
import { PROMISE_PHOTO__SHARED } from '../../shared'
import {
    PEOPLE_ALL__SHARED,
    PEOPLE_BENNETT__SHARED,
    PEOPLE_LIZ__SHARED
} from '../../shared/people'

const ARRANGEMENTS_THINGS = {
    [FIXTURE]: {
        [CRACKED_PICTURE]: {
            yIndex: 3,
            xPosition: 0.5,
            zOffset: 4,
            sharedStyle: [
                PROMISE_PHOTO__SHARED,
                PEOPLE_ALL__SHARED,
                PEOPLE_BENNETT__SHARED,
                PEOPLE_LIZ__SHARED
            ]
        }
    }
}

export default ARRANGEMENTS_THINGS
