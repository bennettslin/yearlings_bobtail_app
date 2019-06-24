import {
    CUTOUT
} from 'constants/scene'
import {
    APARTMENT_PLANT,
    CODE_BOX
} from 'constants/scene/things/cutouts'

const ARRANGEMENTS_THINGS = {
    [CUTOUT]: {
        [APARTMENT_PLANT]: {
            yIndex: 2,
            xPosition: 2.5,
            scaleFactor: 0.35
        },
        [CODE_BOX]: {
            yIndex: 2,
            arrangement: {
                xPosition: 5.5,
                xWidth: 1,
                zHeight: 1,
                zOffset: 3
            }
        }
    }
}

export default ARRANGEMENTS_THINGS
