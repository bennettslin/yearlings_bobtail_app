import {
    CUTOUT,
    FIXTURE
} from 'constants/scene'
import { MUSEUM_DISPLAY } from 'constants/scene/things/cutouts'
import { CAVEMAN_BONES } from 'constants/scene/things/fixtures'

const ARRANGEMENTS_THINGS = {
    [CUTOUT]: {
        [MUSEUM_DISPLAY]: {
            yIndex: 1,
            xPosition: 4,
            scaleFactor: 0.4
        }
    },
    [FIXTURE]: {
        [CAVEMAN_BONES]: {
            yIndex: 4,
            arrangement: {
                xPosition: 8.5,
                xWidth: 1.5,
                zHeight: 4
            }
        }
    }
}

export default ARRANGEMENTS_THINGS
