import {
    CARDBOARD,
    PANEL,
} from '../../../../../app/constants/scene/things'
import {
    SNOWGLOBE_SMALL__PRESENT,
    SNOWGLOBE_PRESENT,
} from '../../../../../app/constants/scene/things/cardboards'
import {
    SNOWGLOBE__LIZ_ALONE,
    SNOWGLOBE__BENNETT_MIRIAM,
    LIZ_COUCH__PRESENT,
    WIDE_COUCH_MIRIAM,
    WIDE_ARMREST_MIRIAM__LEFT,
    WIDE_ARMREST_MIRIAM__RIGHT,
} from '../../../../../app/constants/scene/things/panels'

export default {
    [CARDBOARD]: {
        [SNOWGLOBE_SMALL__PRESENT]: {
            yIndex: 0,
            xPosition: 10.4,
            zOffset: 3.9,
            scaleFactor: 0.15,
            rotate: -10,
        },
        [SNOWGLOBE_PRESENT]: {
            yIndex: 0,
            xPosition: 9,
            zOffset: 2.7,
            scaleFactor: 0.7,
            rotate: 10,
        },
    },
    [PANEL]: {
        [SNOWGLOBE__LIZ_ALONE]: {
            yIndex: 4,
            xPosition: 2.5,
            scaleFactor: 0.38,
        },
        [SNOWGLOBE__BENNETT_MIRIAM]: {
            yIndex: 5,
            xPosition: 8,
            scaleFactor: 0.43,
        },
        [LIZ_COUCH__PRESENT]: {
            yIndex: 2,
            xPosition: 2.075,
            scaleFactor: 0.23,
        },
        [WIDE_COUCH_MIRIAM]: {
            yIndex: 1,
            xPosition: 8,
            scaleFactor: 0.25,
        },
        [WIDE_ARMREST_MIRIAM__LEFT]: {
            yIndex: 3,
            xPosition: 5.1,
            zOffset: 1.5,
            scaleFactor: 0.3,
        },
        [WIDE_ARMREST_MIRIAM__RIGHT]: {
            yIndex: 3,
            xPosition: 10.9,
            zOffset: 1.5,
            scaleFactor: 0.3,
            flipHorizontal: true,
        },
    },
}
