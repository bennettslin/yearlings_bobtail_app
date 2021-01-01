import {
    CARDBOARD,
    FIXTURE,
    PANEL,
} from '../../../../../app/constants/scene/things'
import {
    SNOWGLOBE_SMALL__PAST,
    SNOWGLOBE_PAST,
} from '../../../../../app/constants/scene/things/cardboards'
import { TETHERBALL_POLE } from '../../../../../app/constants/scene/things/fixtures'
import { SNOWGLOBE__TETHERBALL } from '../../../../../app/constants/scene/things/panels'

export default {
    [CARDBOARD]: {
        [SNOWGLOBE_SMALL__PAST]: {
            yIndex: 0,
            xPosition: 6.5,
            zOffset: 7.6,
            scaleFactor: 0.15,
            rotate: -5,
        },
        [SNOWGLOBE_PAST]: {
            yIndex: 0,
            xPosition: 10.2,
            zOffset: 6.1,
            scaleFactor: 0.82,
            rotate: 10,
        },
    },
    [FIXTURE]: {
        [TETHERBALL_POLE]: {
            yIndex: 3,
            xPosition: 5.5,
            scaleFactor: 0.225,
        },
    },
    [PANEL]: {
        [SNOWGLOBE__TETHERBALL]: {
            yIndex: 5,
            xPosition: 7,
            scaleFactor: 0.42,
        },
    },
}
