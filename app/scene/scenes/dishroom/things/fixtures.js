import {
    CONVEYOR_BELT,
    TRAY_CART,
    GLASS_CART,
    GLASS_RACK,
    DISH_PILE
} from 'scene/fixtureKeys'


const ARRANGEMENTS_MAP = {
    [CONVEYOR_BELT]: {
        yIndex: 1,
        arrangement: {
            xFloat: 4,
            xWidth: 5,
            zHeight: 2,
            zOffset: 2
        }
    },
    [TRAY_CART]: {
        yIndex: 3,
        arrangement: {
            xFloat: 2.5,
            xWidth: 1.5,
            zHeight: 2
        }
    },
    [GLASS_CART]: {
        yIndex: 3,
        arrangement: {
            xFloat: 6,
            xWidth: 1.5,
            zHeight: 2
        }
    },
    [GLASS_RACK]: {
        yIndex: 2,
        arrangement: {
            xFloat: 3,
            xWidth: 1.5,
            zHeight: 0.5
        }
    },
    [DISH_PILE]: {
        yIndex: 2,
        arrangement: {
            xFloat: 4.5,
            xWidth: 1,
            zHeight: 1
        }
    }
}

export default ARRANGEMENTS_MAP
