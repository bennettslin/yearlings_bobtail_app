import {
    BACKDROP,
    CARDBOARD,
    PANEL,
} from '../../../../../src/constants/scene/things'
import { DREAM_OCEAN_FLOOR } from '../../../../../src/constants/scene/things/backdrops'
import {
    BENNETT_OCEAN_FLOOR,
    BUDDHA_CAVE_SHRINE,
    ODIN_OCEAN_FLOOR,
} from '../../../../../src/constants/scene/things/cardboards'
import {
    OCEAN_CAVE_INTERIOR_LEFT,
    OCEAN_CAVE_INTERIOR_RIGHT,
    OCEAN_CAVE_EXTERIOR_LEFT,
    OCEAN_CAVE_EXTERIOR_RIGHT,
} from '../../../../../src/constants/scene/things/panels'

export default {
    [BACKDROP]: {
        [DREAM_OCEAN_FLOOR]: {
            yIndex: 3,
            xPosition: 2.4,
            zOffset: 0.05,
            layerYIndex: 4,
        },
    },
    [CARDBOARD]: {
        [BUDDHA_CAVE_SHRINE]: {
            yIndex: 3,
            xPosition: 1.7,
            layerYIndex: 4,
        },
        [BENNETT_OCEAN_FLOOR]: {
            yIndex: 3,
            xPosition: 3.2,
            zOffset: -0.05,
            layerYIndex: 4,
        },
        [ODIN_OCEAN_FLOOR]: {
            yIndex: 3,
            xPosition: 0.7,
            zOffset: -0.05,
            layerYIndex: 4,
        },
    },
    [PANEL]: {
        [OCEAN_CAVE_EXTERIOR_LEFT]: {
            yIndex: 3,
            xPosition: 2.3,
            layerYIndex: 4,
        },
        [OCEAN_CAVE_EXTERIOR_RIGHT]: {
            yIndex: 2,
            xPosition: 8.7,
        },
        [OCEAN_CAVE_INTERIOR_LEFT]: {
            yIndex: 2,
            xPosition: 2.3,
            layerYIndex: 3,
        },
        [OCEAN_CAVE_INTERIOR_RIGHT]: {
            yIndex: 1,
            xPosition: 8.7,
        },
    },
}
