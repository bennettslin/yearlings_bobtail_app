import {
    BACKDROP,
    CARDBOARD,
    FLAT
} from '../../../constants/scene'
import { OCEAN_BOTTOM_FAR } from '../../../constants/scene/things/backdrops'
import { BENNETT_ODIN_OCEAN_FLOOR } from '../../../constants/scene/things/cardboards'
import {
    OCEAN_BOTTOM_MIDDLE,
    OCEAN_BOTTOM_NEAR
} from '../../../constants/scene/things/flats'
import {
    PEOPLE_ALL__SHARED,
    PEOPLE_BENNETT__SHARED,
    PEOPLE_ODIN__SHARED
} from '../../shared/people'

const ARRANGEMENTS_THINGS = {
    [BACKDROP]: {
        [OCEAN_BOTTOM_FAR]: {
            yIndex: 0,
            xPosition: 5.5,
            scaleFactor: 0.7
        }
    },
    [CARDBOARD]: {
        [BENNETT_ODIN_OCEAN_FLOOR]: {
            yIndex: 4,
            xPosition: 8,
            scaleFactor: 0.2,
            sharedStyle: [
                PEOPLE_ALL__SHARED,
                PEOPLE_BENNETT__SHARED,
                PEOPLE_ODIN__SHARED
            ]
        }
    },
    [FLAT]: {
        [OCEAN_BOTTOM_MIDDLE]: {
            yIndex: 1,
            xPosition: 5.5,
            scaleFactor: 0.65
        },
        [OCEAN_BOTTOM_NEAR]: {
            yIndex: 2,
            xPosition: 5.5,
            scaleFactor: 0.5
        }
    }
}

export default ARRANGEMENTS_THINGS
