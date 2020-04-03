import {
    CARDBOARD,
    PANEL
} from '../../../constants/scene/things'
import {
    SNOWGLOBE_SMALL__PRESENT,
    SNOWGLOBE_PRESENT
} from '../../../constants/scene/things/cardboards'
import {
    SNOWGLOBE__LIZ_ALONE,
    SNOWGLOBE__BENNETT_MIRIAM,
    WIDE_COUCH_MIRIAM,
    WIDE_ARMREST_MIRIAM__LEFT,
    WIDE_ARMREST_MIRIAM__RIGHT
} from '../../../constants/scene/things/panels'

export default {
    [CARDBOARD]: {
        [SNOWGLOBE_SMALL__PRESENT]: {
            yIndex: 1,
            xPosition: 10.4,
            zOffset: 7.75,
            scaleFactor: 0.15,
            rotate: -10
        },
        [SNOWGLOBE_PRESENT]: {
            yIndex: 1,
            xPosition: 9,
            zOffset: 6.3,
            scaleFactor: 0.7,
            rotate: 10
        }
    },
    [PANEL]: {
        [SNOWGLOBE__LIZ_ALONE]: {
            yIndex: 4,
            xPosition: 2.5,
            scaleFactor: 0.3
        },
        [SNOWGLOBE__BENNETT_MIRIAM]: {
            yIndex: 5,
            xPosition: 8,
            scaleFactor: 0.4
        },
        [WIDE_COUCH_MIRIAM]: {
            yIndex: 3,
            xPosition: 8,
            scaleFactor: 0.25
        },
        [WIDE_ARMREST_MIRIAM__LEFT]: {
            yIndex: 4,
            xPosition: 5.1,
            scaleFactor: 0.3
        },
        [WIDE_ARMREST_MIRIAM__RIGHT]: {
            yIndex: 4,
            xPosition: 10.9,
            scaleFactor: 0.3,
            flipHorizontal: true
        }
    }
}
