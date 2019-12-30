import {
    CUTOUT,
    DOOR,
    PANEL
} from '../../../constants/scene/things'
import {
    TRAY_PILE,
    DISHROOM_DOLLY__TRAY,
    DISHROOM_DOLLY__GLASS,
    GLASS_RACK__SINK,
    GLASS_RACK__DOLLY,
    DISH_PILE
} from '../../../constants/scene/things/cutouts'
import { DISHROOM_DOOR } from '../../../constants/scene/things/doors'
import {
    CONVEYOR_BELT,
    DISHROOM_SINK
} from '../../../constants/scene/things/panels'
import {
    CUP__SHARED,
    DISH__SHARED,
    TRAY__SHARED
} from '../../sharedStyles/dishroom'

const ARRANGEMENTS_THINGS = {
    [CUTOUT]: {
        [DISH_PILE]: {
            yIndex: 2,
            xPosition: 2,
            scaleFactor: 0.4,
            sharedStyle: DISH__SHARED
        },
        [GLASS_RACK__SINK]: {
            yIndex: 2,
            xPosition: 5.5,
            scaleFactor: 0.4,
            sharedStyle: CUP__SHARED
        },
        [TRAY_PILE]: {
            yIndex: 4,
            xPosition: 1.75,
            zOffset: 0.55,
            scaleFactor: 0.4,
            sharedStyle: TRAY__SHARED
        },
        [GLASS_RACK__DOLLY]: {
            yIndex: 4,
            xPosition: 6.25,
            zOffset: 0.55,
            scaleFactor: 0.4,
            sharedStyle: CUP__SHARED
        },
        [DISHROOM_DOLLY__TRAY]: {
            yIndex: 4,
            xPosition: 1.75,
            scaleFactor: 0.4,
            flipHorizontal: true
        },
        [DISHROOM_DOLLY__GLASS]: {
            yIndex: 4,
            xPosition: 6.25,
            scaleFactor: 0.4
        }
    },
    [DOOR]: {
        [DISHROOM_DOOR]: {
            yIndex: 2,
            xPosition: 9,
            scaleFactor: 0.6
        }
    },
    [PANEL]: {
        [CONVEYOR_BELT]: {
            yIndex: 2,
            xPosition: 4.1,
            scaleFactor: 0.36,
            zOffset: 0.275,
            sharedStyle: [
                CUP__SHARED,
                DISH__SHARED,
                TRAY__SHARED
            ]
        },
        [DISHROOM_SINK]: {
            yIndex: 3,
            xPosition: 4,
            scaleFactor: 0.47
        }
    }
}

export default ARRANGEMENTS_THINGS
