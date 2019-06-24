import {
    BACKDROP,
    CUTOUT,
    PANEL
} from 'constants/scene'
import { OCEAN_FLOOR_FAR } from 'constants/scene/things/backdrops'
import {
    BENNETT_MAT,
    ODIN_MAT
} from 'constants/scene/things/cutouts'
import {
    OCEAN_CAVE_INTERIOR,
    OCEAN_CAVE_EXTERIOR
} from 'constants/scene/things/panels'

const ARRANGEMENTS_THINGS = {
    [BACKDROP]: {
        [OCEAN_FLOOR_FAR]: {
            yIndex: 0,
            arrangement: {
                xPosition: 5.5,
                xWidth: 12,
                zHeight: 4
            }
        }
    },
    [CUTOUT]: {
        [BENNETT_MAT]: {
            yIndex: 2,
            arrangement: {
                xPosition: 2.5,
                xWidth: 0.5,
                zHeight: 0.5
            }
        },
        [ODIN_MAT]: {
            yIndex: 2,
            arrangement: {
                xPosition: 3,
                xWidth: 0.5,
                zHeight: 0.5
            }
        }
    },
    [PANEL]: {
        [OCEAN_CAVE_INTERIOR]: {
            yIndex: 1,
            arrangement: {
                xPosition: 4.5,
                xWidth: 12,
                zHeight: 3
            }
        },
        [OCEAN_CAVE_EXTERIOR]: {
            yIndex: 3,
            arrangement: {
                xPosition: 5.5,
                xWidth: 12,
                zHeight: 3
            }
        }
    }
}

export default ARRANGEMENTS_THINGS
