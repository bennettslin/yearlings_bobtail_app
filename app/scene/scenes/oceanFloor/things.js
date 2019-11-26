import {
    BACKDROP,
    CARDBOARD,
    PANEL
} from '../../../constants/scene/things'
import { OCEAN_FLOOR_FAR } from '../../../constants/scene/things/backdrops'
import {
    BENNETT_MAT,
    ODIN_MAT
} from '../../../constants/scene/things/cardboards'
import {
    OCEAN_CAVE_INTERIOR,
    OCEAN_CAVE_EXTERIOR
} from '../../../constants/scene/things/panels'
import { ODIN__SHARED } from '../../shared/animals'
import { BENNETT } from '../../../constants/scene/actors'
import { ALL_PEOPLE__SHARED } from '../../shared/people'
import {
    BUDDHA_SHRINE__SHARED,
    TAIWAN_PILLOW__SHARED
} from '../../shared/taiwan'

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
            sharedStyle: [
                ALL_PEOPLE__SHARED,
                BENNETT,
                TAIWAN_PILLOW__SHARED
            ]
        },
        [ODIN_MAT]: {
            yIndex: 2,
            xPosition: 0.8,
            scaleFactor: 0.2,
            sharedStyle: ODIN__SHARED
        }
    },
    [PANEL]: {
        [OCEAN_CAVE_INTERIOR]: {
            yIndex: 1,
            xPosition: 5.5,
            scaleFactor: 0.55,
            sharedStyle: BUDDHA_SHRINE__SHARED
        },
        [OCEAN_CAVE_EXTERIOR]: {
            yIndex: 3,
            xPosition: 5.5,
            scaleFactor: 0.55
        }
    }
}

export default ARRANGEMENTS_THINGS
