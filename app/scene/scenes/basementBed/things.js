import { FIXTURE } from '../../../constants/scene'
import { CRACKED_PICTURE } from '../../../constants/scene/things/fixtures'
import { PROMISE_PHOTO_SHARED } from '../../shared'
import {
    PEOPLE_ALL_SHARED,
    PEOPLE_BENNETT_SHARED,
    PEOPLE_LIZ_SHARED
} from '../../shared/people'

const ARRANGEMENTS_THINGS = {
    [FIXTURE]: {
        [CRACKED_PICTURE]: {
            yIndex: 3,
            xPosition: 0.5,
            zOffset: 4,
            scaleFactor: 0.25,
            sharedStyle: [
                PROMISE_PHOTO_SHARED,
                PEOPLE_ALL_SHARED,
                PEOPLE_BENNETT_SHARED,
                PEOPLE_LIZ_SHARED
            ]
        }
    }
}

export default ARRANGEMENTS_THINGS
