import {
    CARDBOARD,
    CUTOUT,
    DOOR,
    PANEL,
} from '../../../../../src/constants/scene/things'
import { CORKBOARD__DISHROOM } from '../../../../../src/constants/scene/things/cardboards'
import {
    BOWL_PILE,
    CARRIAGE_TRAY,
    DISHROOM_DOLLY__GLASS,
    DISHROOM_DOLLY__TRAY,
    DISH_PILE,
    GLASS_RACK__DOLLY,
    GLASS_RACK__SINK,
    TRAY_PILE,
} from '../../../../../src/constants/scene/things/cutouts'
import { DISHROOM_DOOR } from '../../../../../src/constants/scene/things/doors'
import {
    CONVEYOR_BELT__LANCET,
    CONVEYOR_BELT__READING,
    DISHROOM_SINK,
} from '../../../../../src/constants/scene/things/panels'

export default {
    [CARDBOARD]: {
        [CORKBOARD__DISHROOM]: {
            yIndex: 0,
            xPosition: 3.5,
            zOffset: 4,
        },
    },
    [CUTOUT]: {
        [BOWL_PILE]: {
            yIndex: 2,
            xPosition: 3,
        },
        [CARRIAGE_TRAY]: {
            yIndex: 1,
            xPosition: 2.68,
            zOffset: -1.2,
            layerYIndex: 2,
        },
        [DISH_PILE]: {
            yIndex: 2,
            xPosition: 2,
        },
        [GLASS_RACK__SINK]: {
            yIndex: 2,
        },
        [TRAY_PILE]: {
            yIndex: 4,
            xPosition: 1.75,
            zOffset: 0.55,
        },
        [GLASS_RACK__DOLLY]: {
            yIndex: 4,
            xPosition: 6.25,
            zOffset: 0.55,
        },
        [DISHROOM_DOLLY__TRAY]: {
            yIndex: 4,
            xPosition: 1.75,
            flipHorizontal: true,
        },
        [DISHROOM_DOLLY__GLASS]: {
            yIndex: 4,
            xPosition: 6.25,
        },
    },
    [DOOR]: {
        [DISHROOM_DOOR]: {
            yIndex: 2,
            xPosition: 9,
        },
    },
    [PANEL]: {
        [CONVEYOR_BELT__READING]: {
            yIndex: 1,
            xPosition: 3.84,
            zOffset: -2.1,
            flipHorizontal: true,
            counterpart: CONVEYOR_BELT__LANCET,
        },
        [CONVEYOR_BELT__LANCET]: {
            yIndex: 1,
            xPosition: 4.1,
            zOffset: -2.1,
            counterpart: CONVEYOR_BELT__READING,
        },
        [DISHROOM_SINK]: {
            yIndex: 3,
            xPosition: 4,
        },
    },
}
