import {
    BACKDROP,
    CARDBOARD,
    FLAT
} from 'constants/scene'
import { OCEAN_BOTTOM_FAR } from 'constants/scene/things/backdrops'
import { BENNETT_ODIN_OCEAN_FLOOR } from 'constants/scene/things/cardboards'
import {
    OCEAN_BOTTOM_MIDDLE,
    OCEAN_BOTTOM_NEAR
} from 'constants/scene/things/flats'
import { BENNETT_ODIN_SHARED } from '../../shared'

const ARRANGEMENTS_THINGS = {
    [BACKDROP]: {
        [OCEAN_BOTTOM_FAR]: {
            yIndex: 0,
            arrangement: {
                xPosition: 5.5,
                xWidth: 12,
                zHeight: 4
            }
        }
    },
    [CARDBOARD]: {
        [BENNETT_ODIN_OCEAN_FLOOR]: {
            yIndex: 4,
            xPosition: 8,
            scaleFactor: 0.2,
            style: BENNETT_ODIN_SHARED
        }
    },
    [FLAT]: {
        [OCEAN_BOTTOM_MIDDLE]: {
            yIndex: 1,
            xPosition: 5.5,
            scaleFactor: 0.6
        },
        [OCEAN_BOTTOM_NEAR]: {
            yIndex: 2,
            xPosition: 5.5,
            scaleFactor: 0.6
        }
    }
}

export default ARRANGEMENTS_THINGS
