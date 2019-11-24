import { CUTOUT } from '../../../constants/scene/things'
import {
    CAVEMAN_BONES,
    MUSEUM_DISPLAY
} from '../../../constants/scene/things/cutouts'

const ARRANGEMENTS_THINGS = {
    [CUTOUT]: {
        [MUSEUM_DISPLAY]: {
            yIndex: 1,
            xPosition: 4,
            scaleFactor: 0.4
        },
        [CAVEMAN_BONES]: {
            yIndex: 4,
            xPosition: 8.5,
            scaleFactor: 0.25
        }
    }
}

export default ARRANGEMENTS_THINGS
