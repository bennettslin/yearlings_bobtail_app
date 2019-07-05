import {
    BACKDROP,
    CUTOUT
} from 'constants/scene'
import { PHARMACY_THOUGHT_BACKDROP } from 'constants/scene/things/backdrops'
import { PHARMACY_AISLE } from 'constants/scene/things/cutouts'

const ARRANGEMENTS_THINGS = {
    [BACKDROP]: {
        [PHARMACY_THOUGHT_BACKDROP]: {
            yIndex: 0,
            arrangement: {
                xPosition: 5.5,
                xWidth: 10,
                zHeight: 6
            }
        }
    },
    [CUTOUT]: {
        [PHARMACY_AISLE]: {
            yIndex: 1,
            arrangement: {
                xPosition: 5.5,
                xWidth: 8,
                zHeight: 5
            }
        }
    }
}

export default ARRANGEMENTS_THINGS
