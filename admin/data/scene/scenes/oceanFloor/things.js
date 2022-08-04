import {
    BUBBLE,
    CARDBOARD,
    PANEL,
} from '../../../../../src/constants/scene/things'
import { DREAM_OCEAN_FLOOR } from '../../../../../src/constants/scene/things/bubbles'
import {
    BENNETT_MAT,
    ODIN_MAT,
} from '../../../../../src/constants/scene/things/cardboards'
import {
    OCEAN_CAVE_INTERIOR,
    OCEAN_CAVE_EXTERIOR,
} from '../../../../../src/constants/scene/things/panels'

export default {
    [BUBBLE]: {
        [DREAM_OCEAN_FLOOR]: {
            yIndex: 5,
            xPosition: 5.5,
        },
    },
    [CARDBOARD]: {
        [BENNETT_MAT]: {
            yIndex: 2,
            xPosition: 2.6,
            scaleFactor: 0.8,
        },
        [ODIN_MAT]: {
            yIndex: 2,
            xPosition: 0.8,
            scaleFactor: 0.8,
        },
    },
    [PANEL]: {
        [OCEAN_CAVE_INTERIOR]: {
            yIndex: 1,
        },
        [OCEAN_CAVE_EXTERIOR]: {
            yIndex: 3,
        },
    },
}
