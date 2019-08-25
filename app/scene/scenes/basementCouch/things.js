import { CARDBOARD } from '../../../constants/scene'
import {
    NAS_ALBUM,
    ELLIOTT_SMITH_POSTER
} from '../../../constants/scene/things/cardboards'
import { PEOPLE_ALL__SHARED } from '../../shared/people'

const ARRANGEMENTS_THINGS = {
    [CARDBOARD]: {
        [NAS_ALBUM]: {
            yIndex: 3,
            xPosition: 9.5,
            scaleFactor: 0.15,
            sharedStyle: PEOPLE_ALL__SHARED
        },
        [ELLIOTT_SMITH_POSTER]: {
            yIndex: 1,
            xPosition: 9,
            zOffset: 2,
            scaleFactor: 0.25,
            sharedStyle: PEOPLE_ALL__SHARED
        }
    }
}

export default ARRANGEMENTS_THINGS
