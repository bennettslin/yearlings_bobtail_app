import {
    CUTOUT,
    CARDBOARD,
    FIXTURE,
    PANEL,
} from '../../../../../app/constants/scene/things'
import {
    BENNETT_TAIWAN_STAIRS,
    ODIN_TAIWAN_STAIRS,
} from '../../../../../app/constants/scene/things/cardboards'
import {
    BUDDHA_SHRINE,
    TAIWAN_FRIDGE,
} from '../../../../../app/constants/scene/things/cutouts'
import { FRIDGE_DRAWINGS } from '../../../../../app/constants/scene/things/fixtures'
import { BUDDHA_STAND } from '../../../../../app/constants/scene/things/panels'

export default {
    [CARDBOARD]: {
        [BENNETT_TAIWAN_STAIRS]: {
            yIndex: 2,
            xPosition: 7.75,
            scaleFactor: 0.25,
        },
        [ODIN_TAIWAN_STAIRS]: {
            yIndex: 2,
            xPosition: 1.5,
            scaleFactor: 0.25,
        },
    },
    [CUTOUT]: {
        [BUDDHA_SHRINE]: {
            yIndex: 4,
            xPosition: 5.5,
        },
        [TAIWAN_FRIDGE]: {
            yIndex: 1,
            xPosition: 9.5,
        },
    },
    [FIXTURE]: {
        [FRIDGE_DRAWINGS]: {
            yIndex: 1,
            xPosition: 9,
            zOffset: 1.25,
            scaleFactor: 0.35,
        },
    },
    [PANEL]: {
        [BUDDHA_STAND]: {
            yIndex: 4,
            xPosition: 5.5,
            zOffset: -1.54,
        },
    },
}
