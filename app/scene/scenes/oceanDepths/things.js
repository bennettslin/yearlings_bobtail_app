import {
    BACKDROP,
    CARDBOARD,
    FLAT
} from '../../../constants/scene/things'
import { OCEAN_BOTTOM_FAR } from '../../../constants/scene/things/backdrops'
import { BENNETT_ODIN_OCEAN_FLOOR } from '../../../constants/scene/things/cardboards'
import {
    OCEAN_BOTTOM_MIDDLE,
    OCEAN_BOTTOM_NEAR
} from '../../../constants/scene/things/flats'
import { ODIN__SHARED } from '../../sharedStyles/animals'
import { BENNETT } from '../../../constants/scene/actors'
import { ALL_PEOPLE__SHARED } from '../../sharedStyles/people'

const ARRANGEMENTS_THINGS = {
    [BACKDROP]: {
        [OCEAN_BOTTOM_FAR]: {
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
                ALL_PEOPLE__SHARED,
                BENNETT,
                ODIN__SHARED
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
