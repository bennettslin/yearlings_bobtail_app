import {
    BACKDROP,
    FIXTURE,
    FLAT
} from 'constants/scene'
import { CEMETERY_BACKDROP } from 'constants/scene/things/backdrops'
import { GRAVESTONE } from 'constants/scene/things/fixtures'
import {
    CEMETERY_HILLS_LEFT,
    CEMETERY_HILLS_RIGHT
} from 'constants/scene/things/flats'

const ARRANGEMENTS_THINGS = {
    [BACKDROP]: {
        [CEMETERY_BACKDROP]: {
            yIndex: 0,
            arrangement: {
                xPosition: 5.5,
                xWidth: 12,
                zHeight: 4
            }
        }
    },
    [FIXTURE]: {
        [GRAVESTONE]: {
            yIndex: 5,
            arrangement: {
                xPosition: 5.5,
                xWidth: 3,
                zHeight: 2
            }
        }
    },
    [FLAT]: {
        [CEMETERY_HILLS_LEFT]: {
            yIndex: 1,
            arrangement: {
                xPosition: 5.5,
                xWidth: 12,
                zHeight: 4
            }
        },
        [CEMETERY_HILLS_RIGHT]: {
            yIndex: 2,
            xPosition: 12,
            scaleFactor: 0.35,
            alignRight: true
        }
    }
}

export default ARRANGEMENTS_THINGS
