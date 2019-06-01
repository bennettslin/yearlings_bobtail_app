import {
    BACKDROPS,
    CUTOUTS
} from 'constants/scene'
import { TAIWAN_STAIRS_BACKDROP } from '../../keys/backdrops'
import {
    BENNETT_TAIWAN_GATE,
    ODIN_TAIWAN_GATE
} from '../../keys/cutouts'

const ARRANGEMENTS_THINGS = {
    [BACKDROPS]: {
        [TAIWAN_STAIRS_BACKDROP]: {
            yIndex: 0,
            arrangement: {
                xPosition: 5.5,
                xWidth: 12,
                zHeight: 4
            }
        }
    },
    [CUTOUTS]: {
        [BENNETT_TAIWAN_GATE]: {
            yIndex: 2,
            arrangement: {
                xPosition: 5,
                xWidth: 1,
                zHeight: 3
            }
        },
        [ODIN_TAIWAN_GATE]: {
            yIndex: 1,
            arrangement: {
                xPosition: 6,
                xWidth: 1,
                zHeight: 1
            }
        }
    }
}

export default ARRANGEMENTS_THINGS
