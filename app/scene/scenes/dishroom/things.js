import {
    CUTOUT,
    PANEL
} from 'constants/scene'
import {
    TRAY_PILE,
    DISHROOM_DOLLY__GLASS,
    GLASS_RACK__SINK,
    DISH_PILE
} from 'constants/scene/things/cutouts'
import {
    CONVEYOR_BELT,
    DISHROOM_SINK
} from 'constants/scene/things/panels'

const ARRANGEMENTS_THINGS = {
    [CUTOUT]: {
        [TRAY_PILE]: {
            yIndex: 3,
            xPosition: 2.5,
            scaleFactor: 0.4
        },
        [DISHROOM_DOLLY__GLASS]: {
            yIndex: 3,
            xPosition: 6,
            scaleFactor: 0.4
        },
        [GLASS_RACK__SINK]: {
            yIndex: 2,
            xPosition: 3,
            scaleFactor: 0.3
        },
        [DISH_PILE]: {
            yIndex: 2,
            xPosition: 4.5,
            scaleFactor: 0.4
        }
    },
    [PANEL]: {
        [CONVEYOR_BELT]: {
            yIndex: 1,
            xPosition: 4,
            scaleFactor: 0.37,
            zOffset: 0.1
        },
        [DISHROOM_SINK]: {
            yIndex: 3,
            xPosition: 4,
            scaleFactor: 0.47
        }
    }
}

export default ARRANGEMENTS_THINGS
