import {
    CARDBOARD,
    DOOR
} from 'constants/scene'
import { CORKBOARD } from 'constants/scene/things/cardboards'
import { PRINCIPAL_DOOR } from 'constants/scene/things/doors'

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
            scaleFactor: 0.7
        }
    }
}

export default ARRANGEMENTS_THINGS
