import {
    CUTOUTS
} from 'constants/scene'
import {
    APARTMENT_PLANT,
    CODE_BOX
} from '../../keys/cutouts'

const ARRANGEMENTS_THINGS = {
    [CUTOUTS]: {
        [APARTMENT_PLANT]: {
            yIndex: 2,
            arrangement: {
                xFloat: 2.5,
                xWidth: 3,
                zHeight: 5
            }
        },
        [CODE_BOX]: {
            yIndex: 2,
            arrangement: {
                xFloat: 5.5,
                xWidth: 1,
                zHeight: 1,
                zOffset: 3
            }
        }
    }
}

export default ARRANGEMENTS_THINGS
