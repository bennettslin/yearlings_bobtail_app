import {
    CUTOUT,
    FIXTURE
} from 'constants/scene'
import {
    BUDDHA_SHRINE,
    TAIWAN_FRIDGE,
    BENNETT_TAIWAN_STAIRS,
    ODIN_TAIWAN_STAIRS
} from 'constants/scene/things/cutouts'
import { FRIDGE_DRAWINGS } from 'constants/scene/things/fixtures'

const ARRANGEMENTS_THINGS = {
    [CUTOUT]: {
        [BUDDHA_SHRINE]: {
            yIndex: 4,
            arrangement: {
                xPosition: 5.5,
                xWidth: 2,
                zHeight: 2
            }
        },
        [TAIWAN_FRIDGE]: {
            yIndex: 1,
            xPosition: 9,
            scaleFactor: 0.3
        },
        [BENNETT_TAIWAN_STAIRS]: {
            yIndex: 2,
            xPosition: 7.75,
            scaleFactor: 0.2
        },
        [ODIN_TAIWAN_STAIRS]: {
            yIndex: 2,
            xPosition: 1.5,
            scaleFactor: 0.2
        }
    },
    [FIXTURE]: {
        [FRIDGE_DRAWINGS]: {
            yIndex: 1,
            arrangement: {
                xPosition: 9.5,
                xWidth: 1,
                zHeight: 0.5,
                zOffset: 1
            }
        }
    }
}

export default ARRANGEMENTS_THINGS
