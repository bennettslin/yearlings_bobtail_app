import { FIXTURE } from '../../../constants/scene'
import { CRACKED_PICTURE } from '../../../constants/scene/things/fixtures'
import { PROMISE_PHOTO__SHARED } from '../../shared'
import {
    ALL_PEOPLE__SHARED,
    BENNETT__SHARED,
    LIZ__SHARED
} from '../../shared/people'

const ARRANGEMENTS_THINGS = {
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
