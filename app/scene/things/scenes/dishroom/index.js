import {
    FIXTURES,
    PANELS
} from 'constants/scene'
import {
    CONVEYOR_BELT,
    TRAY_CART,
    GLASS_CART,
    GLASS_RACK,
    DISH_PILE
} from '../../keys/fixtures'
import { DISHROOM_SINK } from '../../keys/panels'

const ARRANGEMENTS_THINGS = {
    [FIXTURES]: {
        [CONVEYOR_BELT]: {
            yIndex: 1,
            arrangement: {
                xPosition: 4,
                xWidth: 5,
                zHeight: 2,
                zOffset: 2
            }
        },
        [TRAY_CART]: {
            yIndex: 3,
            arrangement: {
                xPosition: 2.5,
                xWidth: 1.5,
                zHeight: 2
            }
        },
        [GLASS_CART]: {
            yIndex: 3,
            arrangement: {
                xPosition: 6,
                xWidth: 1.5,
                zHeight: 2
            }
        },
        [GLASS_RACK]: {
            yIndex: 2,
            arrangement: {
                xPosition: 3,
                xWidth: 1.5,
                zHeight: 0.5
            }
        },
        [DISH_PILE]: {
            yIndex: 2,
            arrangement: {
                xPosition: 4.5,
                xWidth: 1,
                zHeight: 1
            }
        }
    },
    [PANELS]: {
        [DISHROOM_SINK]: {
            yIndex: 3,
            arrangement: {
                xPosition: 4,
                xWidth: 5,
                zHeight: 3
            }
        }
    }
}

export default ARRANGEMENTS_THINGS
