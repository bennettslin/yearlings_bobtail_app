import {
    BACKDROP,
    FLAT
} from 'constants/scene'
import { PAMPAS_BACKDROP } from 'constants/scene/things/backdrops'
import { PAMPAS_FAR } from 'constants/scene/things/flats'

const ARRANGEMENTS_THINGS = {
    [BACKDROP]: {
        [PAMPAS_BACKDROP]: {
            yIndex: 0,
            arrangement: {
                xPosition: 5.5,
                xWidth: 12,
                zHeight: 4
            }
        }
    },
    [FLAT]: {
        [PAMPAS_FAR]: {
            yIndex: 2,
            xPosition: 5.5,
            scaleFactor: 0.6
        }
    }
}

export default ARRANGEMENTS_THINGS
