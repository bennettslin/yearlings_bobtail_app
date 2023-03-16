import {
    BACKDROP,
    CARDBOARD,
    CUTOUT,
    FLAT,
    PANEL,
    PUPPET,
} from '../../../../../src/constants/scene/things'
import { DREAM_OCEAN_FLOOR } from '../../../../../src/constants/scene/things/backdrops'
import {
    BENNETT_OCEAN_FLOOR,
    BUDDHA_CAVE_SHRINE,
    ODIN_OCEAN_FLOOR,
} from '../../../../../src/constants/scene/things/cardboards'
import { OCEAN_FLOOR_PLANTS_CENTRE, OCEAN_FLOOR_PLANTS_LEFT, OCEAN_FLOOR_PLANTS_RIGHT } from '../../../../../src/constants/scene/things/cutouts'
import { OCEAN_FLOOR_ROCKS } from '../../../../../src/constants/scene/things/flats'
import {
    OCEAN_CAVE_INTERIOR_LEFT,
    OCEAN_CAVE_INTERIOR_RIGHT,
    OCEAN_CAVE_EXTERIOR_LEFT,
    OCEAN_CAVE_EXTERIOR_RIGHT,
} from '../../../../../src/constants/scene/things/panels'
import { OCEAN_FLOOR_FISH } from '../../../../../src/constants/scene/things/puppets'

export default {
    [BACKDROP]: {
        [DREAM_OCEAN_FLOOR]: {
            yIndex: 3,
            xPosition: 2.2,
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
            xPosition: 3,
            zOffset: -0.05,
            layerYIndex: 4,
        },
        [ODIN_OCEAN_FLOOR]: {
            yIndex: 3,
            xPosition: 1,
            zOffset: -0.05,
            layerYIndex: 4,
        },
    },
    [CUTOUT]: {
        [OCEAN_FLOOR_PLANTS_CENTRE]: {
            yIndex: 4,
            xPosition: 5.5,
            layerYIndex: 5,
        },
        [OCEAN_FLOOR_PLANTS_LEFT]: {
            yIndex: 5,
            xPosition: 0,
        },
        [OCEAN_FLOOR_PLANTS_RIGHT]: {
            yIndex: 5,
            xPosition: 11,
        },
    },
    [FLAT]: {
        [OCEAN_FLOOR_ROCKS]: {
            yIndex: 1,
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
            xPosition: 7,
        },
        [OCEAN_CAVE_INTERIOR_LEFT]: {
            yIndex: 2,
            xPosition: 2.3,
            layerYIndex: 3,
        },
        [OCEAN_CAVE_INTERIOR_RIGHT]: {
            yIndex: 1,
            xPosition: 7,
        },
    },
    [PUPPET]: {
        [OCEAN_FLOOR_FISH]: {
            yIndex: 5,
            xPosition: 6.5,
            zOffset: 4.5,
        },
    },
}
