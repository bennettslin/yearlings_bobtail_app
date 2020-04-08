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
            yIndex: 0,
            xPosition: 6,
            zOffset: 7.6,
            scaleFactor: 0.15,
            rotate: -5
        },
        [SNOWGLOBE_PAST]: {
            yIndex: 0,
            xPosition: 10.2,
            zOffset: 6.1,
            scaleFactor: 0.7,
            rotate: 10
        }
    },
    [PANEL]: {
        [SNOWGLOBE__TETHERBALL]: {
            yIndex: 5,
            xPosition: 7,
            scaleFactor: 0.42
        }
    }
}
