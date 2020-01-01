import {
    CARDBOARD,
    PANEL
} from '../../../constants/scene/things'
import {
    SNOWGLOBE_SMALL__PAST,
    SNOWGLOBE_PAST
} from '../../../constants/scene/things/cardboards'
import { SNOWGLOBE__TETHERBALL } from '../../../constants/scene/things/panels'

export default {
    [CARDBOARD]: {
        [SNOWGLOBE_SMALL__PAST]: {
            yIndex: 1,
            xPosition: 6,
            zOffset: 6.45,
            scaleFactor: 0.15,
            rotate: -5
        },
        [SNOWGLOBE_PAST]: {
            yIndex: 1,
            xPosition: 8.5,
            zOffset: 6,
            scaleFactor: 0.7,
            rotate: 10
        }
    },
    [PANEL]: {
        [SNOWGLOBE__TETHERBALL]: {
            yIndex: 4,
            xPosition: 7,
            scaleFactor: 0.4
        }
    }
}
