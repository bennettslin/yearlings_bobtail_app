import {
    CUTOUT,
    DOOR,
    PANEL,
} from '../../../../../app/constants/scene/things'
import {
    TRAY_PILE,
    DISHROOM_DOLLY__TRAY,
    DISHROOM_DOLLY__GLASS,
    GLASS_RACK__SINK,
    GLASS_RACK__DOLLY,
    DISH_PILE,
} from '../../../../../app/constants/scene/things/cutouts'
import { DISHROOM_DOOR } from '../../../../../app/constants/scene/things/doors'
import {
    CONVEYOR_BELT,
    DISHROOM_SINK,
} from '../../../../../app/constants/scene/things/panels'

export default {
    [CUTOUT]: {
        [DISH_PILE]: {
            yIndex: 2,
            xPosition: 2,
            scaleFactor: 0.4,
        },
        [GLASS_RACK__SINK]: {
            yIndex: 2,
            xPosition: 5.5,
            scaleFactor: 0.4,
        },
        [TRAY_PILE]: {
            yIndex: 4,
            xPosition: 1.75,
            zOffset: 0.55,
            scaleFactor: 0.4,
        },
        [GLASS_RACK__DOLLY]: {
            yIndex: 4,
            xPosition: 6.25,
            zOffset: 0.55,
            scaleFactor: 0.4,
        },
        [DISHROOM_DOLLY__TRAY]: {
            yIndex: 4,
            xPosition: 1.75,
            scaleFactor: 0.4,
            flipHorizontal: true,
        },
        [DISHROOM_DOLLY__GLASS]: {
            yIndex: 4,
            xPosition: 6.25,
            scaleFactor: 0.4,
        },
    },
    [DOOR]: {
        [DISHROOM_DOOR]: {
            yIndex: 2,
            xPosition: 9,
        },
    },
    [PANEL]: {
        [CONVEYOR_BELT]: {
            yIndex: 1,
            xPosition: 4.1,
            scaleFactor: 0.39,
            zOffset: -1.8,
        },
        [DISHROOM_SINK]: {
            yIndex: 3,
            xPosition: 4,
            scaleFactor: 0.47,
        },
    },
}
