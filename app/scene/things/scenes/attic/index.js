import {
    CUTOUTS,
    FURNITURES
} from 'constants/scene'
import {
    STORAGE_BOXES,
    STORAGE_CHEST,
    HOWIE_FRIDGE,
    TELEVISION
} from '../../keys/cutouts'
import { ATTIC_CUSHIONS } from '../../keys/furniture'

const ARRANGEMENTS_THINGS = {
    [CUTOUTS]: {
        [STORAGE_BOXES]: {
            yIndex: 1,
            arrangement: {
                xFloat: 5.5,
                xWidth: 2,
                zHeight: 3
            }
        },
        [STORAGE_CHEST]: {
            yIndex: 4,
            arrangement: {
                xFloat: 1.5,
                xWidth: 1,
                zHeight: 1.5
            }
        },
        [HOWIE_FRIDGE]: {
            yIndex: 1,
            arrangement: {
                xFloat: 9,
                xWidth: 2.5,
                zHeight: 5
            }
        },
        [TELEVISION]: {
            yIndex: 4,
            arrangement: {
                xFloat: 3.5,
                xWidth: 1.5,
                zHeight: 1
            }
        }
    },
    [FURNITURES]: {
        [ATTIC_CUSHIONS]: {
            yIndex: 3,
            arrangement: {
                xFloat: 3.5,
                xWidth: 4,
                zHeight: 0.5
            }
        }
    }
}

export default ARRANGEMENTS_THINGS
