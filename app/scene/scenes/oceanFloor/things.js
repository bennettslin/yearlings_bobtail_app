import {
    BACKDROP,
    CARDBOARD,
    PANEL
} from '../../../constants/scene'
import { OCEAN_FLOOR_FAR } from '../../../constants/scene/things/backdrops'
import {
    BENNETT_MAT,
    ODIN_MAT
} from '../../../constants/scene/things/cardboards'
import {
    OCEAN_CAVE_INTERIOR,
    OCEAN_CAVE_EXTERIOR
} from '../../../constants/scene/things/panels'
import {
    BENNETT_ODIN_SHARED,
    BUDDHA_SHRINE_SHARED
} from '../../shared'

const ARRANGEMENTS_THINGS = {
    [BACKDROP]: {
        [OCEAN_FLOOR_FAR]: {
            yIndex: 0,
            xPosition: 5.5,
            scaleFactor: 0.7
        }
    },
    [CARDBOARD]: {
        [BENNETT_MAT]: {
            yIndex: 2,
            xPosition: 2.6,
            scaleFactor: 0.2,
            sharedStyle: BENNETT_ODIN_SHARED
        },
        [ODIN_MAT]: {
            yIndex: 2,
            xPosition: 0.8,
            scaleFactor: 0.2,
            sharedStyle: BENNETT_ODIN_SHARED
        }
    },
    [PANEL]: {
        [OCEAN_CAVE_INTERIOR]: {
            yIndex: 1,
            xPosition: 5.5,
            scaleFactor: 0.55,
            sharedStyle: BUDDHA_SHRINE_SHARED
        },
        [OCEAN_CAVE_EXTERIOR]: {
            yIndex: 3,
            xPosition: 5.5,
            scaleFactor: 0.55
        }
    }
}

export default ARRANGEMENTS_THINGS
