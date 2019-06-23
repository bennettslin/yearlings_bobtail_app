import {
    CUTOUT,
    FIXTURE
} from 'constants/scene'
import {
    BUDDHA_SHRINE,
    TAIWAN_FRIDGE_FRONT,
    BENNETT_TAIWAN_STAIRS,
    ODIN_TAIWAN_STAIRS
} from '../../keys/cutouts'
import { FRIDGE_DRAWINGS } from '../../keys/fixtures'

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
        [TAIWAN_FRIDGE_FRONT]: {
            yIndex: 1,
            arrangement: {
                xPosition: 9.5,
                xWidth: 2.5,
                zHeight: 4
            }
        },
        [BENNETT_TAIWAN_STAIRS]: {
            yIndex: 2,
            arrangement: {
                xPosition: 7,
                xWidth: 1,
                zHeight: 4
            }
        },
        [ODIN_TAIWAN_STAIRS]: {
            yIndex: 2,
            arrangement: {
                xPosition: 1.5,
                xWidth: 2,
                zHeight: 1
            }
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
