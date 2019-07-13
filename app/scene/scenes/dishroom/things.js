import {
    CUTOUT,
    PANEL
} from 'constants/scene'
import {
    TRAY_CART,
    GLASS_CART,
    GLASS_RACK,
    DISH_PILE
} from 'constants/scene/things/cutouts'
import {
    CONVEYOR_BELT,
    DISHROOM_SINK
} from 'constants/scene/things/panels'

const ARRANGEMENTS_THINGS = {
    [CUTOUT]: {
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
    [PANEL]: {
        [CONVEYOR_BELT]: {
            yIndex: 1,
            xPosition: 4,
            scaleFactor: 0.37,
            zOffset: 0.6
        },
        [DISHROOM_SINK]: {
            yIndex: 3,
            xPosition: 4,
            scaleFactor: 0.45
        }
    }
}

export default ARRANGEMENTS_THINGS
