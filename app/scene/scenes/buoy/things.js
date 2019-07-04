import {
    CUTOUT
} from 'constants/scene'
import {
    BENNETT_ODIN_DEPTHS,
    SEA_SERPENT_LEFT,
    SEA_SERPENT_RIGHT
} from 'constants/scene/things/cutouts'
import { BENNETT_ODIN } from '../../shared'

const ARRANGEMENTS_THINGS = {
    [CUTOUT]: {
        [BENNETT_ODIN_DEPTHS]: {
            yIndex: 0,
            xPosition: 2,
            scaleFactor: 0.2,
            zOffset: 4,
            style: BENNETT_ODIN
        },
        [SEA_SERPENT_LEFT]: {
            yIndex: 0,
            xPosition: 1,
            scaleFactor: 0.2
        },
        [SEA_SERPENT_RIGHT]: {
            yIndex: 0,
            xPosition: 3,
            scaleFactor: 0.2
        }
    }
}

export default ARRANGEMENTS_THINGS
