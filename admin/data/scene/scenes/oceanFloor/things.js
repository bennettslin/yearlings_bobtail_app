import {
    BACKDROP,
    CARDBOARD,
    PANEL,
} from '../../../../../src/constants/scene/things'
import { DREAM_OCEAN_FLOOR } from '../../../../../src/constants/scene/things/backdrops'
import {
    BENNETT_OCEAN_FLOOR,
    ODIN_OCEAN_FLOOR,
} from '../../../../../src/constants/scene/things/cardboards'
import {
    OCEAN_CAVE_INTERIOR,
    OCEAN_CAVE_EXTERIOR,
} from '../../../../../src/constants/scene/things/panels'

export default {
    [BACKDROP]: {
        [DREAM_OCEAN_FLOOR]: {
            yIndex: 2,
            xPosition: 2.6,
            zOffset: 0.05,
        },
    },
    [CARDBOARD]: {
        [BENNETT_OCEAN_FLOOR]: {
            yIndex: 2,
            xPosition: 2.6,
            zOffset: -0.05,
        },
        [ODIN_OCEAN_FLOOR]: {
            yIndex: 2,
            xPosition: 0.8,
            zOffset: -0.05,
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
