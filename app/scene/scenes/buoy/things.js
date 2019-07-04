import {
    CUTOUT
} from 'constants/scene'
import {
    BENNETT_ODIN_DEPTHS,
    SEA_SERPENTS
} from 'constants/scene/things/cutouts'

const ARRANGEMENTS_THINGS = {
    [CUTOUT]: {
        [BENNETT_ODIN_DEPTHS]: {
            yIndex: 0,
            xPosition: 2,
            scaleFactor: 0.2,
            zOffset: 4
        },
        [SEA_SERPENTS]: {
            yIndex: 0,
            arrangement: {
                xPosition: 1,
                xWidth: 5,
                zHeight: 4,
                zOffset: 2
            }
        }
    }
}

export default ARRANGEMENTS_THINGS
