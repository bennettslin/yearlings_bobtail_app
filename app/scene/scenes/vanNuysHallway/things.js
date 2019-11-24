import {
    CARDBOARD,
    DOOR
} from '../../../constants/scene/things'
import { CORKBOARD } from '../../../constants/scene/things/cardboards'
import { PRINCIPAL_DOOR } from '../../../constants/scene/things/doors'
import { DOOR__SHARED } from '../../shared/home'

const ARRANGEMENTS_THINGS = {
    [CARDBOARD]: {
        [CORKBOARD]: {
            yIndex: 4,
            xPosition: 7.5,
            zOffset: 1.5,
            scaleFactor: 0.35
        }
    },
    [DOOR]: {
        [PRINCIPAL_DOOR]: {
            yIndex: 4,
            xPosition: 3,
            sharedStyle: DOOR__SHARED
        }
    }
}

export default ARRANGEMENTS_THINGS
