import {
    CARDBOARD,
    FIXTURE,
    PANEL,
} from '../../../../../src/constants/scene/things'
import {
    SNOWGLOBE_SMALL_PRESENT,
    SNOWGLOBE_LEAVING_CRUMBLED,
} from '../../../../../src/constants/scene/things/cardboards'
import { BUDWEISER_FULLER__MIRIAM } from '../../../../../src/constants/scene/things/fixtures'
import {
    SNOWGLOBE_PRESENT__LIZ,
    SNOWGLOBE_PRESENT__BENNETT,
    LIZ_COUCH__PRESENT,
    WIDE_COUCH_MIRIAM,
    WIDE_ARMREST_MIRIAM__LEFT,
    WIDE_ARMREST_MIRIAM__RIGHT,
} from '../../../../../src/constants/scene/things/panels'

export default {
    [CARDBOARD]: {
        [SNOWGLOBE_SMALL_PRESENT]: {
            yIndex: 0,
            xPosition: 10.4,
            zOffset: 3.9,
            rotate: -10,
        },
        [SNOWGLOBE_LEAVING_CRUMBLED]: {
            yIndex: 0,
            xPosition: 8.7,
            zOffset: 2.7,
            scaleFactor: 0.85,
            rotate: 10,
        },
    },
    [FIXTURE]: {
        [BUDWEISER_FULLER__MIRIAM]: {
            yIndex: 3,
            xPosition: 6.5,
        },
    },
    [PANEL]: {
        [SNOWGLOBE_PRESENT__LIZ]: {
            yIndex: 4,
            xPosition: 2.5,
            scaleFactor: 0.86,
        },
        [SNOWGLOBE_PRESENT__BENNETT]: {
            yIndex: 5,
            xPosition: 8,
            scaleFactor: 0.98,
        },
        [LIZ_COUCH__PRESENT]: {
            yIndex: 2,
            xPosition: 2.075,
        },
        [WIDE_COUCH_MIRIAM]: {
            yIndex: 1,
            xPosition: 8,
        },
        [WIDE_ARMREST_MIRIAM__LEFT]: {
            yIndex: 3,
            xPosition: 5.1,
            zOffset: 1.5,
        },
        [WIDE_ARMREST_MIRIAM__RIGHT]: {
            yIndex: 3,
            xPosition: 10.9,
            zOffset: 1.5,
            flipHorizontal: true,
        },
    },
}
