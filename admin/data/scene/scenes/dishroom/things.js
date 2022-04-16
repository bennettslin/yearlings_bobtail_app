import {
    CARDBOARD,
    CUTOUT,
    DOOR,
    PANEL,
} from '../../../../../src/constants/scene/things'
import { CORKBOARD__DISHROOM } from '../../../../../src/constants/scene/things/cardboards'
import {
    TRAY_PILE,
    DISHROOM_DOLLY__TRAY,
    DISHROOM_DOLLY__GLASS,
    GLASS_RACK__SINK,
    GLASS_RACK__DOLLY,
    DISH_PILE,
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
        [DISH_PILE]: {
            yIndex: 2,
            xPosition: 4.7,
        },
        [GLASS_RACK__SINK]: {
            yIndex: 2,
            xPosition: 2.2,
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
