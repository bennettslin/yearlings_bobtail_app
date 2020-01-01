import {
    CARDBOARD,
    PANEL
} from '../../../constants/scene/things'
import {
    BENNETT_MAT,
    ODIN_MAT
} from '../../../constants/scene/things/cardboards'
import {
    OCEAN_CAVE_INTERIOR,
    OCEAN_CAVE_EXTERIOR
} from '../../../constants/scene/things/panels'

export default {
    [CARDBOARD]: {
        [BENNETT_MAT]: {
            yIndex: 2,
            xPosition: 2.6,
            scaleFactor: 0.2
        },
        [ODIN_MAT]: {
            yIndex: 2,
            xPosition: 0.8,
            scaleFactor: 0.2
        }
    },
    [PANEL]: {
        [OCEAN_CAVE_INTERIOR]: {
            yIndex: 1,
            xPosition: 5.5,
            scaleFactor: 0.6
        },
        [OCEAN_CAVE_EXTERIOR]: {
            yIndex: 3,
            xPosition: 5.5,
            scaleFactor: 0.6
        }
    }
}
