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
import { BENNETT_ODIN } from '../../shared'

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
            xPosition: 2.5,
            scaleFactor: 0.2,
            style: BENNETT_ODIN
        },
        [ODIN_MAT]: {
            yIndex: 2,
            xPosition: 5,
            scaleFactor: 0.2,
            style: BENNETT_ODIN
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
