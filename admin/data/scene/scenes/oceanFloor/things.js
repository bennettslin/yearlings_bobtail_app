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
            yIndex: 2,
            xPosition: 2.2,
            zOffset: 0.05,
            hide: true,
        },
    },
    [CARDBOARD]: {
        [BUDDHA_CAVE_SHRINE]: {
            yIndex: 1,
            xPosition: 2.6,
            zOffset: -0.05,
            hide: true,
        },
        [BENNETT_OCEAN_FLOOR]: {
            yIndex: 2,
            xPosition: 2.6,
            zOffset: -0.05,
            hide: true,
        },
        [ODIN_OCEAN_FLOOR]: {
            yIndex: 2,
            xPosition: 0.8,
            zOffset: -0.05,
            hide: true,
        },
    },
    [PANEL]: {
        [OCEAN_CAVE_INTERIOR_LEFT]: {
            yIndex: 1,
            xPosition: 1.8,
        },
        [OCEAN_CAVE_INTERIOR_RIGHT]: {
            yIndex: 1,
            xPosition: 8,
        },
        [OCEAN_CAVE_EXTERIOR_LEFT]: {
            yIndex: 3,
            xPosition: 1.8,
        },
        [OCEAN_CAVE_EXTERIOR_RIGHT]: {
            yIndex: 3,
            xPosition: 8,
        },
    },
}
